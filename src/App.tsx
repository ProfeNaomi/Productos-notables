import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight, ChevronLeft, BookOpen, PenTool, Shapes } from 'lucide-react';
import { topics, Topic } from './data/topics';
import { MathBlock, MathInline } from './components/Math';

export default function App() {
  const [activeTopicId, setActiveTopicId] = useState<string>(topics[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'desarrollo' | 'ejemplo' | 'geometria'>('desarrollo');
  const [activeExampleIndex, setActiveExampleIndex] = useState(0);
  
  const activeTopic = topics.find(t => t.id === activeTopicId) || topics[0];

  // Reset tab and example index when topic changes
  React.useEffect(() => {
    setActiveTab('desarrollo');
    setActiveExampleIndex(0);
  }, [activeTopicId]);

  // Reset example index when tab changes to avoid stale state
  React.useEffect(() => {
    if (activeTab === 'ejemplo') {
      setActiveExampleIndex(0);
    }
  }, [activeTab]);

  const currentExample = activeTopic.examples ? activeTopic.examples[activeExampleIndex] : activeTopic.examples[0];
  const totalExamples = activeTopic.examples ? activeTopic.examples.length : 1;

  return (
    <div className="flex h-screen bg-slate-50 text-slate-800 font-sans overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-200 shadow-xl lg:shadow-none transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } flex flex-col`}
      >
        <div className="p-6 border-b border-slate-100 flex justify-between items-start">
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-indigo-900 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-indigo-600" />
              MathVisualizer
            </h1>
            <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-500 mt-1.5">
              Factorización y<br/>Productos Notables
            </span>
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden p-2 -mt-2 -mr-2 text-slate-400 hover:text-slate-600">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto py-4">
          <h2 className="px-6 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
            Temas
          </h2>
          <nav className="space-y-1 px-3">
            {topics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => {
                  setActiveTopicId(topic.id);
                  setIsSidebarOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  activeTopicId === topic.id
                    ? 'bg-indigo-50 text-indigo-700'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <span className="truncate">{topic.title}</span>
                {activeTopicId === topic.id && <ChevronRight className="w-4 h-4" />}
              </button>
            ))}
          </nav>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 px-4 py-4 lg:px-8 flex items-center gap-4 shrink-0">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden p-2 -ml-2 text-slate-600 hover:bg-slate-100 rounded-lg"
          >
            <Menu className="w-6 h-6" />
          </button>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">{activeTopic.title}</h2>
            <p className="text-sm text-slate-500 mt-1">{activeTopic.description}</p>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4 lg:p-8">
          <div className="max-w-6xl mx-auto h-full flex flex-col">
            
            {/* Formula Banner */}
            <div className="bg-indigo-600 text-white rounded-2xl p-6 mb-8 shadow-lg flex flex-col items-center justify-center text-center shrink-0">
              <span className="text-indigo-200 text-sm font-medium uppercase tracking-wider mb-2">Fórmula General</span>
              <div className="text-3xl md:text-4xl font-serif">
                <MathInline math={activeTopic.formula} />
              </div>
            </div>

            {/* Layout with Side Menu and Main Content Area */}
            <div className="flex flex-col lg:flex-row gap-6 flex-1 min-h-0">
              
              {/* Left Menu for Modes */}
              <div className="w-full lg:w-64 shrink-0 flex flex-col gap-3">
                <button 
                  onClick={() => setActiveTab('desarrollo')} 
                  className={`p-4 rounded-xl text-left flex items-center gap-3 transition-all ${
                    activeTab === 'desarrollo' 
                      ? 'bg-blue-50 text-blue-700 border-2 border-blue-300 shadow-sm' 
                      : 'bg-white text-slate-600 border-2 border-transparent hover:border-slate-200 shadow-sm'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${activeTab === 'desarrollo' ? 'bg-blue-100' : 'bg-slate-100'}`}>
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <span className="font-semibold">Desarrollo Paso a Paso</span>
                </button>
                
                <button 
                  onClick={() => setActiveTab('ejemplo')} 
                  className={`p-4 rounded-xl text-left flex items-center gap-3 transition-all ${
                    activeTab === 'ejemplo' 
                      ? 'bg-emerald-50 text-emerald-700 border-2 border-emerald-300 shadow-sm' 
                      : 'bg-white text-slate-600 border-2 border-transparent hover:border-slate-200 shadow-sm'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${activeTab === 'ejemplo' ? 'bg-emerald-100' : 'bg-slate-100'}`}>
                    <PenTool className="w-5 h-5" />
                  </div>
                  <span className="font-semibold">Ejemplo Práctico</span>
                </button>
                
                <button 
                  onClick={() => setActiveTab('geometria')} 
                  className={`p-4 rounded-xl text-left flex items-center gap-3 transition-all ${
                    activeTab === 'geometria' 
                      ? 'bg-purple-50 text-purple-700 border-2 border-purple-300 shadow-sm' 
                      : 'bg-white text-slate-600 border-2 border-transparent hover:border-slate-200 shadow-sm'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${activeTab === 'geometria' ? 'bg-purple-100' : 'bg-slate-100'}`}>
                    <Shapes className="w-5 h-5" />
                  </div>
                  <span className="font-semibold">Visión Geométrica</span>
                </button>
              </div>

              {/* Right Content Area */}
              <div className="flex-1 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden min-h-[500px] flex flex-col">
                <AnimatePresence mode="wait">
                  {activeTab === 'desarrollo' && (
                    <motion.div 
                      key="desarrollo"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      className="p-6 lg:p-8 flex-1 flex flex-col overflow-y-auto"
                    >
                      <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2 border-b border-slate-100 pb-4 shrink-0">
                        <BookOpen className="w-6 h-6 text-blue-500" />
                        Desarrollo Algebraico
                      </h3>
                      <div className="max-w-3xl mx-auto w-full">
                        <StepByStepList steps={activeTopic.derivation} accentColor="blue" />
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'ejemplo' && currentExample && (
                    <motion.div 
                      key="ejemplo"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      className="p-6 lg:p-8 flex-1 flex flex-col overflow-y-auto"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-slate-100 pb-4 shrink-0">
                        <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                          <PenTool className="w-6 h-6 text-emerald-500" />
                          Aplicación Práctica
                        </h3>
                        
                        {totalExamples > 1 && (
                          <div className="flex items-center gap-3 bg-slate-50 p-1.5 rounded-lg border border-slate-200">
                            <button 
                              onClick={() => setActiveExampleIndex(prev => Math.max(0, prev - 1))}
                              disabled={activeExampleIndex === 0}
                              className="p-1.5 rounded-md text-slate-500 hover:bg-white hover:shadow-sm disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:shadow-none transition-all"
                            >
                              <ChevronLeft className="w-4 h-4" />
                            </button>
                            <span className="text-sm font-medium text-slate-600 min-w-[5rem] text-center">
                              Ejemplo {activeExampleIndex + 1} / {totalExamples}
                            </span>
                            <button 
                              onClick={() => setActiveExampleIndex(prev => Math.min(totalExamples - 1, prev + 1))}
                              disabled={activeExampleIndex === totalExamples - 1}
                              className="p-1.5 rounded-md text-slate-500 hover:bg-white hover:shadow-sm disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:shadow-none transition-all"
                            >
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          </div>
                        )}
                      </div>

                      <div className="max-w-3xl mx-auto w-full">
                        <div className="mb-8 p-6 bg-emerald-50 rounded-xl border border-emerald-200 shadow-inner">
                          <span className="text-emerald-800 font-semibold text-sm uppercase tracking-wider block mb-2">Problema a resolver:</span>
                          <div className="text-2xl text-emerald-900 font-serif text-center">
                            <MathInline math={currentExample.problem.replace('Factorizar: ', '').replace('Desarrollar: ', '').replace('Comprobar: ', '')} />
                          </div>
                        </div>
                        <StepByStepList key={`example-${activeTopicId}-${activeExampleIndex}`} steps={currentExample.solutionSteps} accentColor="emerald" />
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'geometria' && (
                    <motion.div 
                      key="geometria"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      className="p-6 lg:p-8 flex-1 flex flex-col h-full"
                    >
                      <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2 border-b border-slate-100 pb-4 shrink-0">
                        <Shapes className="w-6 h-6 text-purple-500" />
                        Representación Visual
                      </h3>
                      <div className="flex-1 flex items-center justify-center p-6 bg-purple-50/30 rounded-xl border border-purple-100 relative overflow-hidden min-h-0">
                        <div className="w-full h-full flex items-center justify-center">
                          <activeTopic.GeometryComponent />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function StepByStepList({ steps, accentColor = 'blue' }: { steps: { expression: string; explanation: string }[], accentColor?: 'blue' | 'emerald' }) {
  const [visibleSteps, setVisibleSteps] = useState(1);

  // Reset visible steps when the steps array changes (topic change)
  React.useEffect(() => {
    setVisibleSteps(1);
  }, [steps]);

  const colorClasses = {
    blue: {
      bg: 'bg-blue-50/50',
      border: 'border-blue-200',
      text: 'text-blue-700',
      btn: 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg',
      number: 'bg-blue-500 text-white',
      math: 'text-blue-900'
    },
    emerald: {
      bg: 'bg-emerald-50/50',
      border: 'border-emerald-200',
      text: 'text-emerald-700',
      btn: 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-md hover:shadow-lg',
      number: 'bg-emerald-500 text-white',
      math: 'text-emerald-900'
    }
  };

  const theme = colorClasses[accentColor];

  return (
    <div className="space-y-6">
      <AnimatePresence>
        {steps.slice(0, visibleSteps).map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-6 rounded-2xl border ${theme.border} ${theme.bg} relative shadow-sm`}
          >
            <div className={`absolute -left-4 -top-4 w-8 h-8 rounded-full ${theme.number} flex items-center justify-center text-sm font-bold shadow-md border-2 border-white`}>
              {index + 1}
            </div>
            <div className={`text-xl md:text-2xl font-serif mb-4 ${theme.math} overflow-x-auto pb-2 flex items-center`}>
              {index > 0 && <span className="mr-4 text-slate-400 font-sans text-lg">=</span>}
              <MathInline math={step.expression} />
            </div>
            <p className="text-base text-slate-700 border-t border-slate-200/60 pt-3">
              {step.explanation}
            </p>
          </motion.div>
        ))}
      </AnimatePresence>

      <div className="pt-4 flex flex-col sm:flex-row gap-4">
        {visibleSteps < steps.length && (
          <button
            onClick={() => setVisibleSteps(prev => prev + 1)}
            className={`flex-1 py-3 px-6 rounded-xl text-base font-semibold transition-all flex items-center justify-center gap-2 ${theme.btn}`}
          >
            Siguiente Paso <ChevronRight className="w-5 h-5" />
          </button>
        )}
        
        {visibleSteps === steps.length && steps.length > 1 && (
          <button
            onClick={() => setVisibleSteps(1)}
            className="flex-1 py-3 px-6 rounded-xl text-base font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            Reiniciar Explicación
          </button>
        )}
      </div>
    </div>
  );
}
