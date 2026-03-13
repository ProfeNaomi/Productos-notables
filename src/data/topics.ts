import React from 'react';
import {
  BinomialSquareSumGeometry,
  BinomialSquareDiffGeometry,
  DifferenceOfSquaresGeometry,
  CommonFactorGeometry,
  BinomialCubeGeometry,
  SumOfCubesGeometry,
  BinomialWithCommonTermGeometry
} from '../components/Geometry';

export type Step = {
  expression: string;
  explanation: string;
};

export type Topic = {
  id: string;
  title: string;
  description: string;
  formula: string;
  derivation: Step[];
  examples: {
    problem: string;
    solutionSteps: Step[];
  }[];
  GeometryComponent: React.FC;
};

export const topics: Topic[] = [
  {
    id: 'factor-comun',
    title: 'Factor Común',
    description: 'Es la transformación de una expresión algebraica racional entera en el producto de sus factores racionales y enteros, primos entre sí.',
    formula: 'ab + ac = a(b + c)',
    derivation: [
      { expression: 'ab + ac', explanation: 'Expresión original con dos términos.' },
      { expression: 'a(b) + a(c)', explanation: 'Identificamos el factor que se repite en ambos términos, que es "a".' },
      { expression: 'a(b + c)', explanation: 'Extraemos "a" como factor común, multiplicando a la suma de los términos restantes.' }
    ],
    examples: [
      {
        problem: 'Factorizar: 3x^2 + 6x',
        solutionSteps: [
          { expression: '3x^2 + 6x', explanation: 'Expresión a factorizar.' },
          { expression: '3x(x) + 3x(2)', explanation: 'El máximo factor común de 3x² y 6x es 3x.' },
          { expression: '3x(x + 2)', explanation: 'Extraemos 3x y escribimos lo que queda dentro del paréntesis.' }
        ]
      },
      {
        problem: 'Factorizar: 5y^3 - 15y^2',
        solutionSteps: [
          { expression: '5y^3 - 15y^2', explanation: 'Expresión a factorizar.' },
          { expression: '5y^2(y) - 5y^2(3)', explanation: 'El máximo factor común de 5y³ y 15y² es 5y².' },
          { expression: '5y^2(y - 3)', explanation: 'Extraemos 5y² y escribimos lo que queda dentro del paréntesis.' }
        ]
      },
      {
        problem: 'Factorizar: 12a^2b + 18ab^2',
        solutionSteps: [
          { expression: '12a^2b + 18ab^2', explanation: 'Expresión a factorizar.' },
          { expression: '6ab(2a) + 6ab(3b)', explanation: 'El máximo factor común de 12a²b y 18ab² es 6ab.' },
          { expression: '6ab(2a + 3b)', explanation: 'Extraemos 6ab y escribimos lo que queda dentro del paréntesis.' }
        ]
      },
      {
        problem: 'Factorizar: 4m^4 - 8m^3 + 12m^2',
        solutionSteps: [
          { expression: '4m^4 - 8m^3 + 12m^2', explanation: 'Expresión a factorizar.' },
          { expression: '4m^2(m^2) - 4m^2(2m) + 4m^2(3)', explanation: 'El máximo factor común de los tres términos es 4m².' },
          { expression: '4m^2(m^2 - 2m + 3)', explanation: 'Extraemos 4m² y escribimos lo que queda dentro del paréntesis.' }
        ]
      },
      {
        problem: 'Factorizar: 7p^3q^2 - 14p^2q^3 + 21pq^4',
        solutionSteps: [
          { expression: '7p^3q^2 - 14p^2q^3 + 21pq^4', explanation: 'Expresión a factorizar.' },
          { expression: '7pq^2(p^2) - 7pq^2(2pq) + 7pq^2(3q^2)', explanation: 'El máximo factor común de los tres términos es 7pq².' },
          { expression: '7pq^2(p^2 - 2pq + 3q^2)', explanation: 'Extraemos 7pq² y escribimos lo que queda dentro del paréntesis.' }
        ]
      }
    ],
    GeometryComponent: CommonFactorGeometry
  },
  {
    id: 'cuadrado-binomio-suma',
    title: 'Cuadrado de Binomio (Suma)',
    description: 'El cuadrado de la suma de dos cantidades es igual al cuadrado de la primera cantidad, más el doble producto de la primera por la segunda, más el cuadrado de la segunda.',
    formula: '(a + b)^2 = a^2 + 2ab + b^2',
    derivation: [
      { expression: '(a + b)^2', explanation: 'Expresión original.' },
      { expression: '(a + b)(a + b)', explanation: 'Por definición de potencia, multiplicamos la base por sí misma.' },
      { expression: 'a(a + b) + b(a + b)', explanation: 'Aplicamos la propiedad distributiva.' },
      { expression: 'a^2 + ab + ba + b^2', explanation: 'Multiplicamos cada término.' },
      { expression: 'a^2 + 2ab + b^2', explanation: 'Sumamos términos semejantes (ab = ba).' }
    ],
    examples: [
      {
        problem: 'Desarrollar: (2x + 3)^2',
        solutionSteps: [
          { expression: '(2x + 3)^2', explanation: 'El cuadrado de un binomio significa multiplicar el binomio por sí mismo.' },
          { expression: '(2x + 3)(2x + 3)', explanation: 'Escribimos la multiplicación explícitamente.' },
          { expression: '2x(2x) + 2x(3) + 3(2x) + 3(3)', explanation: 'Aplicamos la propiedad distributiva: multiplicamos cada término del primer paréntesis por cada término del segundo.' },
          { expression: '4x^2 + 6x + 6x + 9', explanation: 'Resolvemos cada una de las multiplicaciones término a término.' },
          { expression: '4x^2 + 12x + 9', explanation: 'Finalmente, sumamos los términos semejantes (6x + 6x) para obtener el resultado.' }
        ]
      },
      {
        problem: 'Desarrollar: (4y + 5)^2',
        solutionSteps: [
          { expression: '(4y + 5)^2', explanation: 'El cuadrado de un binomio significa multiplicar el binomio por sí mismo.' },
          { expression: '(4y + 5)(4y + 5)', explanation: 'Escribimos la multiplicación explícitamente.' },
          { expression: '4y(4y) + 4y(5) + 5(4y) + 5(5)', explanation: 'Aplicamos la propiedad distributiva: multiplicamos cada término del primer paréntesis por cada término del segundo.' },
          { expression: '16y^2 + 20y + 20y + 25', explanation: 'Resolvemos cada una de las multiplicaciones término a término.' },
          { expression: '16y^2 + 40y + 25', explanation: 'Finalmente, sumamos los términos semejantes (20y + 20y) para obtener el resultado.' }
        ]
      },
      {
        problem: 'Desarrollar: (3a + 7b)^2',
        solutionSteps: [
          { expression: '(3a + 7b)^2', explanation: 'El cuadrado de un binomio significa multiplicar el binomio por sí mismo.' },
          { expression: '(3a + 7b)(3a + 7b)', explanation: 'Escribimos la multiplicación explícitamente.' },
          { expression: '3a(3a) + 3a(7b) + 7b(3a) + 7b(7b)', explanation: 'Aplicamos la propiedad distributiva: multiplicamos cada término del primer paréntesis por cada término del segundo.' },
          { expression: '9a^2 + 21ab + 21ab + 49b^2', explanation: 'Resolvemos cada una de las multiplicaciones término a término.' },
          { expression: '9a^2 + 42ab + 49b^2', explanation: 'Finalmente, sumamos los términos semejantes (21ab + 21ab) para obtener el resultado.' }
        ]
      },
      {
        problem: 'Desarrollar: (x^2 + 6)^2',
        solutionSteps: [
          { expression: '(x^2 + 6)^2', explanation: 'El cuadrado de un binomio significa multiplicar el binomio por sí mismo.' },
          { expression: '(x^2 + 6)(x^2 + 6)', explanation: 'Escribimos la multiplicación explícitamente.' },
          { expression: 'x^2(x^2) + x^2(6) + 6(x^2) + 6(6)', explanation: 'Aplicamos la propiedad distributiva: multiplicamos cada término del primer paréntesis por cada término del segundo.' },
          { expression: 'x^4 + 6x^2 + 6x^2 + 36', explanation: 'Resolvemos cada una de las multiplicaciones término a término.' },
          { expression: 'x^4 + 12x^2 + 36', explanation: 'Finalmente, sumamos los términos semejantes (6x² + 6x²) para obtener el resultado.' }
        ]
      },
      {
        problem: 'Desarrollar: (5m + 2n^3)^2',
        solutionSteps: [
          { expression: '(5m + 2n^3)^2', explanation: 'El cuadrado de un binomio significa multiplicar el binomio por sí mismo.' },
          { expression: '(5m + 2n^3)(5m + 2n^3)', explanation: 'Escribimos la multiplicación explícitamente.' },
          { expression: '5m(5m) + 5m(2n^3) + 2n^3(5m) + 2n^3(2n^3)', explanation: 'Aplicamos la propiedad distributiva: multiplicamos cada término del primer paréntesis por cada término del segundo.' },
          { expression: '25m^2 + 10mn^3 + 10mn^3 + 4n^6', explanation: 'Resolvemos cada una de las multiplicaciones término a término.' },
          { expression: '25m^2 + 20mn^3 + 4n^6', explanation: 'Finalmente, sumamos los términos semejantes (10mn³ + 10mn³) para obtener el resultado.' }
        ]
      }
    ],
    GeometryComponent: BinomialSquareSumGeometry
  },
  {
    id: 'cuadrado-binomio-diferencia',
    title: 'Cuadrado de Binomio (Diferencia)',
    description: 'El cuadrado de la diferencia de dos cantidades es igual al cuadrado de la primera cantidad, menos el doble producto de la primera por la segunda, más el cuadrado de la segunda.',
    formula: '(a - b)^2 = a^2 - 2ab + b^2',
    derivation: [
      { expression: '(a - b)^2', explanation: 'Expresión original.' },
      { expression: '(a - b)(a - b)', explanation: 'Por definición de potencia.' },
      { expression: 'a(a - b) - b(a - b)', explanation: 'Aplicamos la propiedad distributiva.' },
      { expression: 'a^2 - ab - ba + b^2', explanation: 'Multiplicamos cada término (cuidado con los signos).' },
      { expression: 'a^2 - 2ab + b^2', explanation: 'Sumamos términos semejantes (-ab - ba = -2ab).' }
    ],
    examples: [
      {
        problem: 'Desarrollar: (5y - 2)^2',
        solutionSteps: [
          { expression: '(5y - 2)^2', explanation: 'El cuadrado significa multiplicar el binomio por sí mismo.' },
          { expression: '(5y - 2)(5y - 2)', explanation: 'Escribimos la multiplicación explícitamente.' },
          { expression: '5y(5y) + 5y(-2) - 2(5y) - 2(-2)', explanation: 'Aplicamos la propiedad distributiva término a término, respetando los signos negativos.' },
          { expression: '25y^2 - 10y - 10y + 4', explanation: 'Resolvemos las multiplicaciones (nota que -2 por -2 es +4).' },
          { expression: '25y^2 - 20y + 4', explanation: 'Sumamos los términos semejantes (-10y - 10y) para obtener el resultado final.' }
        ]
      },
      {
        problem: 'Desarrollar: (3x - 7)^2',
        solutionSteps: [
          { expression: '(3x - 7)^2', explanation: 'El cuadrado significa multiplicar el binomio por sí mismo.' },
          { expression: '(3x - 7)(3x - 7)', explanation: 'Escribimos la multiplicación explícitamente.' },
          { expression: '3x(3x) + 3x(-7) - 7(3x) - 7(-7)', explanation: 'Aplicamos la propiedad distributiva término a término, respetando los signos negativos.' },
          { expression: '9x^2 - 21x - 21x + 49', explanation: 'Resolvemos las multiplicaciones (nota que -7 por -7 es +49).' },
          { expression: '9x^2 - 42x + 49', explanation: 'Sumamos los términos semejantes (-21x - 21x) para obtener el resultado final.' }
        ]
      },
      {
        problem: 'Desarrollar: (8a - 3b)^2',
        solutionSteps: [
          { expression: '(8a - 3b)^2', explanation: 'El cuadrado significa multiplicar el binomio por sí mismo.' },
          { expression: '(8a - 3b)(8a - 3b)', explanation: 'Escribimos la multiplicación explícitamente.' },
          { expression: '8a(8a) + 8a(-3b) - 3b(8a) - 3b(-3b)', explanation: 'Aplicamos la propiedad distributiva término a término, respetando los signos negativos.' },
          { expression: '64a^2 - 24ab - 24ab + 9b^2', explanation: 'Resolvemos las multiplicaciones (nota que -3b por -3b es +9b²).' },
          { expression: '64a^2 - 48ab + 9b^2', explanation: 'Sumamos los términos semejantes (-24ab - 24ab) para obtener el resultado final.' }
        ]
      },
      {
        problem: 'Desarrollar: (m^2 - 4)^2',
        solutionSteps: [
          { expression: '(m^2 - 4)^2', explanation: 'El cuadrado significa multiplicar el binomio por sí mismo.' },
          { expression: '(m^2 - 4)(m^2 - 4)', explanation: 'Escribimos la multiplicación explícitamente.' },
          { expression: 'm^2(m^2) + m^2(-4) - 4(m^2) - 4(-4)', explanation: 'Aplicamos la propiedad distributiva término a término, respetando los signos negativos.' },
          { expression: 'm^4 - 4m^2 - 4m^2 + 16', explanation: 'Resolvemos las multiplicaciones (nota que -4 por -4 es +16).' },
          { expression: 'm^4 - 8m^2 + 16', explanation: 'Sumamos los términos semejantes (-4m² - 4m²) para obtener el resultado final.' }
        ]
      },
      {
        problem: 'Desarrollar: (6p - 5q^2)^2',
        solutionSteps: [
          { expression: '(6p - 5q^2)^2', explanation: 'El cuadrado significa multiplicar el binomio por sí mismo.' },
          { expression: '(6p - 5q^2)(6p - 5q^2)', explanation: 'Escribimos la multiplicación explícitamente.' },
          { expression: '6p(6p) + 6p(-5q^2) - 5q^2(6p) - 5q^2(-5q^2)', explanation: 'Aplicamos la propiedad distributiva término a término, respetando los signos negativos.' },
          { expression: '36p^2 - 30pq^2 - 30pq^2 + 25q^4', explanation: 'Resolvemos las multiplicaciones (nota que -5q² por -5q² es +25q⁴).' },
          { expression: '36p^2 - 60pq^2 + 25q^4', explanation: 'Sumamos los términos semejantes (-30pq² - 30pq²) para obtener el resultado final.' }
        ]
      }
    ],
    GeometryComponent: BinomialSquareDiffGeometry
  },
  {
    id: 'suma-por-diferencia',
    title: 'Suma por Diferencia',
    description: 'El producto de la suma por la diferencia de dos cantidades es igual al cuadrado de la primera cantidad menos el cuadrado de la segunda.',
    formula: '(a + b)(a - b) = a^2 - b^2',
    derivation: [
      { expression: '(a + b)(a - b)', explanation: 'Expresión original.' },
      { expression: 'a(a - b) + b(a - b)', explanation: 'Aplicamos la propiedad distributiva.' },
      { expression: 'a^2 - ab + ba - b^2', explanation: 'Multiplicamos cada término.' },
      { expression: 'a^2 - b^2', explanation: 'Los términos centrales se cancelan (-ab + ba = 0).' }
    ],
    examples: [
      {
        problem: 'Desarrollar: (3x + 4)(3x - 4)',
        solutionSteps: [
          { expression: '(3x + 4)(3x - 4)', explanation: 'Tenemos el producto de la suma por la diferencia de los mismos términos.' },
          { expression: '3x(3x) + 3x(-4) + 4(3x) + 4(-4)', explanation: 'Aplicamos la propiedad distributiva multiplicando cada término del primer paréntesis por los del segundo.' },
          { expression: '9x^2 - 12x + 12x - 16', explanation: 'Resolvemos las multiplicaciones.' },
          { expression: '9x^2 + 0x - 16', explanation: 'Observamos que los términos centrales (-12x y +12x) son opuestos y se cancelan.' },
          { expression: '9x^2 - 16', explanation: 'El resultado final es la diferencia de los cuadrados de ambos términos.' }
        ]
      },
      {
        problem: 'Desarrollar: (5y + 2)(5y - 2)',
        solutionSteps: [
          { expression: '(5y + 2)(5y - 2)', explanation: 'Tenemos el producto de la suma por la diferencia de los mismos términos.' },
          { expression: '5y(5y) + 5y(-2) + 2(5y) + 2(-2)', explanation: 'Aplicamos la propiedad distributiva multiplicando cada término del primer paréntesis por los del segundo.' },
          { expression: '25y^2 - 10y + 10y - 4', explanation: 'Resolvemos las multiplicaciones.' },
          { expression: '25y^2 + 0y - 4', explanation: 'Observamos que los términos centrales (-10y y +10y) son opuestos y se cancelan.' },
          { expression: '25y^2 - 4', explanation: 'El resultado final es la diferencia de los cuadrados de ambos términos.' }
        ]
      },
      {
        problem: 'Desarrollar: (7a + 9b)(7a - 9b)',
        solutionSteps: [
          { expression: '(7a + 9b)(7a - 9b)', explanation: 'Tenemos el producto de la suma por la diferencia de los mismos términos.' },
          { expression: '7a(7a) + 7a(-9b) + 9b(7a) + 9b(-9b)', explanation: 'Aplicamos la propiedad distributiva multiplicando cada término del primer paréntesis por los del segundo.' },
          { expression: '49a^2 - 63ab + 63ab - 81b^2', explanation: 'Resolvemos las multiplicaciones.' },
          { expression: '49a^2 + 0ab - 81b^2', explanation: 'Observamos que los términos centrales (-63ab y +63ab) son opuestos y se cancelan.' },
          { expression: '49a^2 - 81b^2', explanation: 'El resultado final es la diferencia de los cuadrados de ambos términos.' }
        ]
      },
      {
        problem: 'Desarrollar: (m^2 + 8)(m^2 - 8)',
        solutionSteps: [
          { expression: '(m^2 + 8)(m^2 - 8)', explanation: 'Tenemos el producto de la suma por la diferencia de los mismos términos.' },
          { expression: 'm^2(m^2) + m^2(-8) + 8(m^2) + 8(-8)', explanation: 'Aplicamos la propiedad distributiva multiplicando cada término del primer paréntesis por los del segundo.' },
          { expression: 'm^4 - 8m^2 + 8m^2 - 64', explanation: 'Resolvemos las multiplicaciones.' },
          { expression: 'm^4 + 0m^2 - 64', explanation: 'Observamos que los términos centrales (-8m² y +8m²) son opuestos y se cancelan.' },
          { expression: 'm^4 - 64', explanation: 'El resultado final es la diferencia de los cuadrados de ambos términos.' }
        ]
      },
      {
        problem: 'Desarrollar: (2p^3 + 5q)(2p^3 - 5q)',
        solutionSteps: [
          { expression: '(2p^3 + 5q)(2p^3 - 5q)', explanation: 'Tenemos el producto de la suma por la diferencia de los mismos términos.' },
          { expression: '2p^3(2p^3) + 2p^3(-5q) + 5q(2p^3) + 5q(-5q)', explanation: 'Aplicamos la propiedad distributiva multiplicando cada término del primer paréntesis por los del segundo.' },
          { expression: '4p^6 - 10p^3q + 10p^3q - 25q^2', explanation: 'Resolvemos las multiplicaciones.' },
          { expression: '4p^6 + 0p^3q - 25q^2', explanation: 'Observamos que los términos centrales (-10p³q y +10p³q) son opuestos y se cancelan.' },
          { expression: '4p^6 - 25q^2', explanation: 'El resultado final es la diferencia de los cuadrados de ambos términos.' }
        ]
      }
    ],
    GeometryComponent: DifferenceOfSquaresGeometry
  },
  {
    id: 'binomio-termino-comun',
    title: 'Binomio con Término Común',
    description: 'El producto de dos binomios con un término común es igual al cuadrado del término común, más el producto de la suma de los términos no comunes por el término común, más el producto de los términos no comunes.',
    formula: '(x + a)(x + b) = x^2 + (a + b)x + ab',
    derivation: [
      { expression: '(x + a)(x + b)', explanation: 'Producto de dos binomios con el término común "x".' },
      { expression: 'x(x + b) + a(x + b)', explanation: 'Aplicamos la propiedad distributiva.' },
      { expression: 'x^2 + xb + ax + ab', explanation: 'Multiplicamos cada término.' },
      { expression: 'x^2 + (a + b)x + ab', explanation: 'Agrupamos los términos que tienen "x" como factor común.' }
    ],
    examples: [
      {
        problem: 'Desarrollar: (x + 5)(x + 3)',
        solutionSteps: [
          { expression: '(x + 5)(x + 3)', explanation: 'Multiplicación de dos binomios que comparten el término "x".' },
          { expression: 'x(x) + x(3) + 5(x) + 5(3)', explanation: 'Aplicamos la propiedad distributiva multiplicando término a término.' },
          { expression: 'x^2 + 3x + 5x + 15', explanation: 'Resolvemos las multiplicaciones individuales.' },
          { expression: 'x^2 + (3 + 5)x + 15', explanation: 'Agrupamos los términos semejantes que contienen "x".' },
          { expression: 'x^2 + 8x + 15', explanation: 'Sumamos para obtener el trinomio final.' }
        ]
      },
      {
        problem: 'Desarrollar: (y + 7)(y + 2)',
        solutionSteps: [
          { expression: '(y + 7)(y + 2)', explanation: 'Multiplicación de dos binomios que comparten el término "y".' },
          { expression: 'y(y) + y(2) + 7(y) + 7(2)', explanation: 'Aplicamos la propiedad distributiva multiplicando término a término.' },
          { expression: 'y^2 + 2y + 7y + 14', explanation: 'Resolvemos las multiplicaciones individuales.' },
          { expression: 'y^2 + (2 + 7)y + 14', explanation: 'Agrupamos los términos semejantes que contienen "y".' },
          { expression: 'y^2 + 9y + 14', explanation: 'Sumamos para obtener el trinomio final.' }
        ]
      },
      {
        problem: 'Desarrollar: (a - 4)(a + 9)',
        solutionSteps: [
          { expression: '(a - 4)(a + 9)', explanation: 'Multiplicación de dos binomios que comparten el término "a".' },
          { expression: 'a(a) + a(9) - 4(a) - 4(9)', explanation: 'Aplicamos la propiedad distributiva multiplicando término a término.' },
          { expression: 'a^2 + 9a - 4a - 36', explanation: 'Resolvemos las multiplicaciones individuales.' },
          { expression: 'a^2 + (9 - 4)a - 36', explanation: 'Agrupamos los términos semejantes que contienen "a".' },
          { expression: 'a^2 + 5a - 36', explanation: 'Sumamos para obtener el trinomio final.' }
        ]
      },
      {
        problem: 'Desarrollar: (m - 6)(m - 8)',
        solutionSteps: [
          { expression: '(m - 6)(m - 8)', explanation: 'Multiplicación de dos binomios que comparten el término "m".' },
          { expression: 'm(m) + m(-8) - 6(m) - 6(-8)', explanation: 'Aplicamos la propiedad distributiva multiplicando término a término.' },
          { expression: 'm^2 - 8m - 6m + 48', explanation: 'Resolvemos las multiplicaciones individuales.' },
          { expression: 'm^2 + (-8 - 6)m + 48', explanation: 'Agrupamos los términos semejantes que contienen "m".' },
          { expression: 'm^2 - 14m + 48', explanation: 'Sumamos para obtener el trinomio final.' }
        ]
      },
      {
        problem: 'Desarrollar: (2p + 3)(2p + 5)',
        solutionSteps: [
          { expression: '(2p + 3)(2p + 5)', explanation: 'Multiplicación de dos binomios que comparten el término "2p".' },
          { expression: '2p(2p) + 2p(5) + 3(2p) + 3(5)', explanation: 'Aplicamos la propiedad distributiva multiplicando término a término.' },
          { expression: '4p^2 + 10p + 6p + 15', explanation: 'Resolvemos las multiplicaciones individuales.' },
          { expression: '4p^2 + (10 + 6)p + 15', explanation: 'Agrupamos los términos semejantes que contienen "p".' },
          { expression: '4p^2 + 16p + 15', explanation: 'Sumamos para obtener el trinomio final.' }
        ]
      }
    ],
    GeometryComponent: BinomialWithCommonTermGeometry
  },
  {
    id: 'cubo-binomio-suma',
    title: 'Cubo de Binomio (Suma)',
    description: 'El cubo de la suma de dos cantidades es igual al cubo de la primera, más el triple del cuadrado de la primera por la segunda, más el triple de la primera por el cuadrado de la segunda, más el cubo de la segunda.',
    formula: '(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3',
    derivation: [
      { expression: '(a + b)^3', explanation: 'Expresión original.' },
      { expression: '(a + b)(a + b)^2', explanation: 'Separamos en un producto de un binomio por un cuadrado de binomio.' },
      { expression: '(a + b)(a^2 + 2ab + b^2)', explanation: 'Desarrollamos el cuadrado de binomio.' },
      { expression: 'a(a^2 + 2ab + b^2) + b(a^2 + 2ab + b^2)', explanation: 'Distribuimos el primer binomio (a+b) sobre el trinomio.' },
      { expression: '(a^3 + 2a^2b + ab^2) + (a^2b + 2ab^2 + b^3)', explanation: 'Multiplicamos "a" por el trinomio y "b" por el trinomio.' },
      { expression: 'a^3 + (2a^2b + a^2b) + (ab^2 + 2ab^2) + b^3', explanation: 'Agrupamos los términos semejantes.' },
      { expression: 'a^3 + 3a^2b + 3ab^2 + b^3', explanation: 'Sumamos los términos semejantes para obtener la fórmula final.' }
    ],
    examples: [
      {
        problem: 'Desarrollar: (x + 2)^3',
        solutionSteps: [
          { expression: '(x + 2)^3', explanation: 'El cubo significa multiplicar el binomio por sí mismo tres veces.' },
          { expression: '(x + 2)(x + 2)(x + 2)', explanation: 'Lo escribimos como el producto de tres factores.' },
          { expression: '(x + 2)(x^2 + 4x + 4)', explanation: 'Primero resolvemos (x+2)(x+2) que es un cuadrado de binomio.' },
          { expression: 'x(x^2) + x(4x) + x(4) + 2(x^2) + 2(4x) + 2(4)', explanation: 'Aplicamos la propiedad distributiva multiplicando el binomio por el trinomio.' },
          { expression: 'x^3 + 4x^2 + 4x + 2x^2 + 8x + 8', explanation: 'Resolvemos todas las multiplicaciones.' },
          { expression: 'x^3 + (4x^2 + 2x^2) + (4x + 8x) + 8', explanation: 'Agrupamos los términos semejantes (los que tienen x² y los que tienen x).' },
          { expression: 'x^3 + 6x^2 + 12x + 8', explanation: 'Sumamos para obtener el desarrollo final.' }
        ]
      },
      {
        problem: 'Desarrollar: (3y + 1)^3',
        solutionSteps: [
          { expression: '(3y + 1)^3', explanation: 'El cubo significa multiplicar el binomio por sí mismo tres veces.' },
          { expression: '(3y + 1)(3y + 1)(3y + 1)', explanation: 'Lo escribimos como el producto de tres factores.' },
          { expression: '(3y + 1)(9y^2 + 6y + 1)', explanation: 'Primero resolvemos (3y+1)(3y+1) que es un cuadrado de binomio.' },
          { expression: '3y(9y^2) + 3y(6y) + 3y(1) + 1(9y^2) + 1(6y) + 1(1)', explanation: 'Aplicamos la propiedad distributiva multiplicando el binomio por el trinomio.' },
          { expression: '27y^3 + 18y^2 + 3y + 9y^2 + 6y + 1', explanation: 'Resolvemos todas las multiplicaciones.' },
          { expression: '27y^3 + (18y^2 + 9y^2) + (3y + 6y) + 1', explanation: 'Agrupamos los términos semejantes.' },
          { expression: '27y^3 + 27y^2 + 9y + 1', explanation: 'Sumamos para obtener el desarrollo final.' }
        ]
      },
      {
        problem: 'Desarrollar: (a + 4)^3',
        solutionSteps: [
          { expression: '(a + 4)^3', explanation: 'El cubo significa multiplicar el binomio por sí mismo tres veces.' },
          { expression: '(a + 4)(a + 4)(a + 4)', explanation: 'Lo escribimos como el producto de tres factores.' },
          { expression: '(a + 4)(a^2 + 8a + 16)', explanation: 'Primero resolvemos (a+4)(a+4) que es un cuadrado de binomio.' },
          { expression: 'a(a^2) + a(8a) + a(16) + 4(a^2) + 4(8a) + 4(16)', explanation: 'Aplicamos la propiedad distributiva multiplicando el binomio por el trinomio.' },
          { expression: 'a^3 + 8a^2 + 16a + 4a^2 + 32a + 64', explanation: 'Resolvemos todas las multiplicaciones.' },
          { expression: 'a^3 + (8a^2 + 4a^2) + (16a + 32a) + 64', explanation: 'Agrupamos los términos semejantes.' },
          { expression: 'a^3 + 12a^2 + 48a + 64', explanation: 'Sumamos para obtener el desarrollo final.' }
        ]
      },
      {
        problem: 'Desarrollar: (2m + 5)^3',
        solutionSteps: [
          { expression: '(2m + 5)^3', explanation: 'El cubo significa multiplicar el binomio por sí mismo tres veces.' },
          { expression: '(2m + 5)(2m + 5)(2m + 5)', explanation: 'Lo escribimos como el producto de tres factores.' },
          { expression: '(2m + 5)(4m^2 + 20m + 25)', explanation: 'Primero resolvemos (2m+5)(2m+5) que es un cuadrado de binomio.' },
          { expression: '2m(4m^2) + 2m(20m) + 2m(25) + 5(4m^2) + 5(20m) + 5(25)', explanation: 'Aplicamos la propiedad distributiva multiplicando el binomio por el trinomio.' },
          { expression: '8m^3 + 40m^2 + 50m + 20m^2 + 100m + 125', explanation: 'Resolvemos todas las multiplicaciones.' },
          { expression: '8m^3 + (40m^2 + 20m^2) + (50m + 100m) + 125', explanation: 'Agrupamos los términos semejantes.' },
          { expression: '8m^3 + 60m^2 + 150m + 125', explanation: 'Sumamos para obtener el desarrollo final.' }
        ]
      },
      {
        problem: 'Desarrollar: (p^2 + 3)^3',
        solutionSteps: [
          { expression: '(p^2 + 3)^3', explanation: 'El cubo significa multiplicar el binomio por sí mismo tres veces.' },
          { expression: '(p^2 + 3)(p^2 + 3)(p^2 + 3)', explanation: 'Lo escribimos como el producto de tres factores.' },
          { expression: '(p^2 + 3)(p^4 + 6p^2 + 9)', explanation: 'Primero resolvemos (p²+3)(p²+3) que es un cuadrado de binomio.' },
          { expression: 'p^2(p^4) + p^2(6p^2) + p^2(9) + 3(p^4) + 3(6p^2) + 3(9)', explanation: 'Aplicamos la propiedad distributiva multiplicando el binomio por el trinomio.' },
          { expression: 'p^6 + 6p^4 + 9p^2 + 3p^4 + 18p^2 + 27', explanation: 'Resolvemos todas las multiplicaciones.' },
          { expression: 'p^6 + (6p^4 + 3p^4) + (9p^2 + 18p^2) + 27', explanation: 'Agrupamos los términos semejantes.' },
          { expression: 'p^6 + 9p^4 + 27p^2 + 27', explanation: 'Sumamos para obtener el desarrollo final.' }
        ]
      }
    ],
    GeometryComponent: BinomialCubeGeometry
  },
  {
    id: 'cubo-binomio-diferencia',
    title: 'Cubo de Binomio (Diferencia)',
    description: 'Similar a la suma al cubo, pero con signos alternados (+, -, +, -).',
    formula: '(a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3',
    derivation: [
      { expression: '(a - b)^3', explanation: 'Expresión original.' },
      { expression: '(a - b)(a - b)^2', explanation: 'Separamos en un producto de un binomio por un cuadrado de binomio.' },
      { expression: '(a - b)(a^2 - 2ab + b^2)', explanation: 'Desarrollamos el cuadrado de binomio.' },
      { expression: 'a(a^2 - 2ab + b^2) - b(a^2 - 2ab + b^2)', explanation: 'Distribuimos el primer binomio (a-b) sobre el trinomio.' },
      { expression: '(a^3 - 2a^2b + ab^2) - (a^2b - 2ab^2 + b^3)', explanation: 'Multiplicamos "a" por el trinomio y "b" por el trinomio (cuidado con el signo negativo).' },
      { expression: 'a^3 - 2a^2b + ab^2 - a^2b + 2ab^2 - b^3', explanation: 'Quitamos los paréntesis aplicando la regla de los signos.' },
      { expression: 'a^3 - 3a^2b + 3ab^2 - b^3', explanation: 'Sumamos los términos semejantes para obtener la fórmula final.' }
    ],
    examples: [
      {
        problem: 'Desarrollar: (2m - 1)^3',
        solutionSteps: [
          { expression: '(2m - 1)^3', explanation: 'Multiplicamos el binomio por sí mismo tres veces.' },
          { expression: '(2m - 1)(2m - 1)(2m - 1)', explanation: 'Lo expresamos como factores.' },
          { expression: '(2m - 1)(4m^2 - 4m + 1)', explanation: 'Resolvemos los dos últimos factores como un cuadrado de binomio.' },
          { expression: '2m(4m^2) + 2m(-4m) + 2m(1) - 1(4m^2) - 1(-4m) - 1(1)', explanation: 'Aplicamos la propiedad distributiva, teniendo mucho cuidado con los signos.' },
          { expression: '8m^3 - 8m^2 + 2m - 4m^2 + 4m - 1', explanation: 'Resolvemos las multiplicaciones.' },
          { expression: '8m^3 + (-8m^2 - 4m^2) + (2m + 4m) - 1', explanation: 'Agrupamos los términos semejantes.' },
          { expression: '8m^3 - 12m^2 + 6m - 1', explanation: 'Obtenemos el resultado final.' }
        ]
      },
      {
        problem: 'Desarrollar: (x - 3)^3',
        solutionSteps: [
          { expression: '(x - 3)^3', explanation: 'Multiplicamos el binomio por sí mismo tres veces.' },
          { expression: '(x - 3)(x - 3)(x - 3)', explanation: 'Lo expresamos como factores.' },
          { expression: '(x - 3)(x^2 - 6x + 9)', explanation: 'Resolvemos los dos últimos factores como un cuadrado de binomio.' },
          { expression: 'x(x^2) + x(-6x) + x(9) - 3(x^2) - 3(-6x) - 3(9)', explanation: 'Aplicamos la propiedad distributiva, teniendo mucho cuidado con los signos.' },
          { expression: 'x^3 - 6x^2 + 9x - 3x^2 + 18x - 27', explanation: 'Resolvemos las multiplicaciones.' },
          { expression: 'x^3 + (-6x^2 - 3x^2) + (9x + 18x) - 27', explanation: 'Agrupamos los términos semejantes.' },
          { expression: 'x^3 - 9x^2 + 27x - 27', explanation: 'Obtenemos el resultado final.' }
        ]
      },
      {
        problem: 'Desarrollar: (4y - 5)^3',
        solutionSteps: [
          { expression: '(4y - 5)^3', explanation: 'Multiplicamos el binomio por sí mismo tres veces.' },
          { expression: '(4y - 5)(4y - 5)(4y - 5)', explanation: 'Lo expresamos como factores.' },
          { expression: '(4y - 5)(16y^2 - 40y + 25)', explanation: 'Resolvemos los dos últimos factores como un cuadrado de binomio.' },
          { expression: '4y(16y^2) + 4y(-40y) + 4y(25) - 5(16y^2) - 5(-40y) - 5(25)', explanation: 'Aplicamos la propiedad distributiva, teniendo mucho cuidado con los signos.' },
          { expression: '64y^3 - 160y^2 + 100y - 80y^2 + 200y - 125', explanation: 'Resolvemos las multiplicaciones.' },
          { expression: '64y^3 + (-160y^2 - 80y^2) + (100y + 200y) - 125', explanation: 'Agrupamos los términos semejantes.' },
          { expression: '64y^3 - 240y^2 + 300y - 125', explanation: 'Obtenemos el resultado final.' }
        ]
      },
      {
        problem: 'Desarrollar: (a - 2b)^3',
        solutionSteps: [
          { expression: '(a - 2b)^3', explanation: 'Multiplicamos el binomio por sí mismo tres veces.' },
          { expression: '(a - 2b)(a - 2b)(a - 2b)', explanation: 'Lo expresamos como factores.' },
          { expression: '(a - 2b)(a^2 - 4ab + 4b^2)', explanation: 'Resolvemos los dos últimos factores como un cuadrado de binomio.' },
          { expression: 'a(a^2) + a(-4ab) + a(4b^2) - 2b(a^2) - 2b(-4ab) - 2b(4b^2)', explanation: 'Aplicamos la propiedad distributiva, teniendo mucho cuidado con los signos.' },
          { expression: 'a^3 - 4a^2b + 4ab^2 - 2a^2b + 8ab^2 - 8b^3', explanation: 'Resolvemos las multiplicaciones.' },
          { expression: 'a^3 + (-4a^2b - 2a^2b) + (4ab^2 + 8ab^2) - 8b^3', explanation: 'Agrupamos los términos semejantes.' },
          { expression: 'a^3 - 6a^2b + 12ab^2 - 8b^3', explanation: 'Obtenemos el resultado final.' }
        ]
      },
      {
        problem: 'Desarrollar: (3p^2 - 2)^3',
        solutionSteps: [
          { expression: '(3p^2 - 2)^3', explanation: 'Multiplicamos el binomio por sí mismo tres veces.' },
          { expression: '(3p^2 - 2)(3p^2 - 2)(3p^2 - 2)', explanation: 'Lo expresamos como factores.' },
          { expression: '(3p^2 - 2)(9p^4 - 12p^2 + 4)', explanation: 'Resolvemos los dos últimos factores como un cuadrado de binomio.' },
          { expression: '3p^2(9p^4) + 3p^2(-12p^2) + 3p^2(4) - 2(9p^4) - 2(-12p^2) - 2(4)', explanation: 'Aplicamos la propiedad distributiva, teniendo mucho cuidado con los signos.' },
          { expression: '27p^6 - 36p^4 + 12p^2 - 18p^4 + 24p^2 - 8', explanation: 'Resolvemos las multiplicaciones.' },
          { expression: '27p^6 + (-36p^4 - 18p^4) + (12p^2 + 24p^2) - 8', explanation: 'Agrupamos los términos semejantes.' },
          { expression: '27p^6 - 54p^4 + 36p^2 - 8', explanation: 'Obtenemos el resultado final.' }
        ]
      }
    ],
    GeometryComponent: BinomialCubeGeometry
  },
  {
    id: 'suma-cubos',
    title: 'Suma de Cubos',
    description: 'La suma de dos cubos perfectos se descompone en dos factores: la suma de sus raíces cúbicas, y el cuadrado de la primera raíz, menos el producto de ambas, más el cuadrado de la segunda.',
    formula: 'a^3 + b^3 = (a + b)(a^2 - ab + b^2)',
    derivation: [
      { expression: '(a + b)(a^2 - ab + b^2)', explanation: 'Partimos de los factores para demostrar que equivalen a la suma de cubos.' },
      { expression: 'a(a^2 - ab + b^2) + b(a^2 - ab + b^2)', explanation: 'Propiedad distributiva.' },
      { expression: 'a^3 - a^2b + ab^2 + a^2b - ab^2 + b^3', explanation: 'Multiplicamos.' },
      { expression: 'a^3 + b^3', explanation: 'Cancelamos términos semejantes (-a²b + a²b = 0, ab² - ab² = 0).' }
    ],
    examples: [
      {
        problem: 'Comprobar: 8x^3 + 27',
        solutionSteps: [
          { expression: '8x^3 + 27', explanation: 'Queremos factorizar esta suma de cubos.' },
          { expression: '(2x)^3 + (3)^3', explanation: 'Identificamos las bases: a = 2x, b = 3.' },
          { expression: '(2x + 3)((2x)^2 - (2x)(3) + (3)^2)', explanation: 'Aplicamos la fórmula: (a+b)(a² - ab + b²).' },
          { expression: '(2x + 3)(4x^2 - 6x + 9)', explanation: 'Esta es la factorización. Ahora comprobaremos multiplicando término a término.' },
          { expression: '2x(4x^2) + 2x(-6x) + 2x(9) + 3(4x^2) + 3(-6x) + 3(9)', explanation: 'Aplicamos la propiedad distributiva para comprobar.' },
          { expression: '8x^3 - 12x^2 + 18x + 12x^2 - 18x + 27', explanation: 'Resolvemos las multiplicaciones.' },
          { expression: '8x^3 + (-12x^2 + 12x^2) + (18x - 18x) + 27', explanation: 'Agrupamos términos semejantes. Notamos que se cancelan.' },
          { expression: '8x^3 + 27', explanation: 'Llegamos a la expresión original, comprobando la factorización.' }
        ]
      },
      {
        problem: 'Comprobar: y^3 + 64',
        solutionSteps: [
          { expression: 'y^3 + 64', explanation: 'Queremos factorizar esta suma de cubos.' },
          { expression: '(y)^3 + (4)^3', explanation: 'Identificamos las bases: a = y, b = 4.' },
          { expression: '(y + 4)((y)^2 - (y)(4) + (4)^2)', explanation: 'Aplicamos la fórmula: (a+b)(a² - ab + b²).' },
          { expression: '(y + 4)(y^2 - 4y + 16)', explanation: 'Esta es la factorización. Ahora comprobaremos multiplicando término a término.' },
          { expression: 'y(y^2) + y(-4y) + y(16) + 4(y^2) + 4(-4y) + 4(16)', explanation: 'Aplicamos la propiedad distributiva para comprobar.' },
          { expression: 'y^3 - 4y^2 + 16y + 4y^2 - 16y + 64', explanation: 'Resolvemos las multiplicaciones.' },
          { expression: 'y^3 + (-4y^2 + 4y^2) + (16y - 16y) + 64', explanation: 'Agrupamos términos semejantes. Notamos que se cancelan.' },
          { expression: 'y^3 + 64', explanation: 'Llegamos a la expresión original, comprobando la factorización.' }
        ]
      },
      {
        problem: 'Comprobar: 125a^3 + 8b^3',
        solutionSteps: [
          { expression: '125a^3 + 8b^3', explanation: 'Queremos factorizar esta suma de cubos.' },
          { expression: '(5a)^3 + (2b)^3', explanation: 'Identificamos las bases: a = 5a, b = 2b.' },
          { expression: '(5a + 2b)((5a)^2 - (5a)(2b) + (2b)^2)', explanation: 'Aplicamos la fórmula: (a+b)(a² - ab + b²).' },
          { expression: '(5a + 2b)(25a^2 - 10ab + 4b^2)', explanation: 'Esta es la factorización. Ahora comprobaremos multiplicando término a término.' },
          { expression: '5a(25a^2) + 5a(-10ab) + 5a(4b^2) + 2b(25a^2) + 2b(-10ab) + 2b(4b^2)', explanation: 'Aplicamos la propiedad distributiva para comprobar.' },
          { expression: '125a^3 - 50a^2b + 20ab^2 + 50a^2b - 20ab^2 + 8b^3', explanation: 'Resolvemos las multiplicaciones.' },
          { expression: '125a^3 + (-50a^2b + 50a^2b) + (20ab^2 - 20ab^2) + 8b^3', explanation: 'Agrupamos términos semejantes. Notamos que se cancelan.' },
          { expression: '125a^3 + 8b^3', explanation: 'Llegamos a la expresión original, comprobando la factorización.' }
        ]
      },
      {
        problem: 'Comprobar: m^6 + 216',
        solutionSteps: [
          { expression: 'm^6 + 216', explanation: 'Queremos factorizar esta suma de cubos.' },
          { expression: '(m^2)^3 + (6)^3', explanation: 'Identificamos las bases: a = m², b = 6.' },
          { expression: '(m^2 + 6)((m^2)^2 - (m^2)(6) + (6)^2)', explanation: 'Aplicamos la fórmula: (a+b)(a² - ab + b²).' },
          { expression: '(m^2 + 6)(m^4 - 6m^2 + 36)', explanation: 'Esta es la factorización. Ahora comprobaremos multiplicando término a término.' },
          { expression: 'm^2(m^4) + m^2(-6m^2) + m^2(36) + 6(m^4) + 6(-6m^2) + 6(36)', explanation: 'Aplicamos la propiedad distributiva para comprobar.' },
          { expression: 'm^6 - 6m^4 + 36m^2 + 6m^4 - 36m^2 + 216', explanation: 'Resolvemos las multiplicaciones.' },
          { expression: 'm^6 + (-6m^4 + 6m^4) + (36m^2 - 36m^2) + 216', explanation: 'Agrupamos términos semejantes. Notamos que se cancelan.' },
          { expression: 'm^6 + 216', explanation: 'Llegamos a la expresión original, comprobando la factorización.' }
        ]
      },
      {
        problem: 'Comprobar: 27p^3 + 1000q^3',
        solutionSteps: [
          { expression: '27p^3 + 1000q^3', explanation: 'Queremos factorizar esta suma de cubos.' },
          { expression: '(3p)^3 + (10q)^3', explanation: 'Identificamos las bases: a = 3p, b = 10q.' },
          { expression: '(3p + 10q)((3p)^2 - (3p)(10q) + (10q)^2)', explanation: 'Aplicamos la fórmula: (a+b)(a² - ab + b²).' },
          { expression: '(3p + 10q)(9p^2 - 30pq + 100q^2)', explanation: 'Esta es la factorización. Ahora comprobaremos multiplicando término a término.' },
          { expression: '3p(9p^2) + 3p(-30pq) + 3p(100q^2) + 10q(9p^2) + 10q(-30pq) + 10q(100q^2)', explanation: 'Aplicamos la propiedad distributiva para comprobar.' },
          { expression: '27p^3 - 90p^2q + 300pq^2 + 90p^2q - 300pq^2 + 1000q^3', explanation: 'Resolvemos las multiplicaciones.' },
          { expression: '27p^3 + (-90p^2q + 90p^2q) + (300pq^2 - 300pq^2) + 1000q^3', explanation: 'Agrupamos términos semejantes. Notamos que se cancelan.' },
          { expression: '27p^3 + 1000q^3', explanation: 'Llegamos a la expresión original, comprobando la factorización.' }
        ]
      }
    ],
    GeometryComponent: SumOfCubesGeometry
  },
  {
    id: 'diferencia-cubos',
    title: 'Diferencia de Cubos',
    description: 'La diferencia de dos cubos perfectos se descompone en dos factores: la diferencia de sus raíces cúbicas, y el cuadrado de la primera raíz, más el producto de ambas, más el cuadrado de la segunda.',
    formula: 'a^3 - b^3 = (a - b)(a^2 + ab + b^2)',
    derivation: [
      { expression: '(a - b)(a^2 + ab + b^2)', explanation: 'Partimos de los factores para demostrar.' },
      { expression: 'a(a^2 + ab + b^2) - b(a^2 + ab + b^2)', explanation: 'Propiedad distributiva.' },
      { expression: 'a^3 + a^2b + ab^2 - a^2b - ab^2 - b^3', explanation: 'Multiplicamos.' },
      { expression: 'a^3 - b^3', explanation: 'Cancelamos términos semejantes.' }
    ],
    examples: [
      {
        problem: 'Comprobar: 64y^3 - 1',
        solutionSteps: [
          { expression: '64y^3 - 1', explanation: 'Queremos factorizar esta diferencia de cubos.' },
          { expression: '(4y)^3 - (1)^3', explanation: 'Identificamos las bases: a = 4y, b = 1.' },
          { expression: '(4y - 1)((4y)^2 + (4y)(1) + (1)^2)', explanation: 'Aplicamos la fórmula: (a-b)(a² + ab + b²).' },
          { expression: '(4y - 1)(16y^2 + 4y + 1)', explanation: 'Esta es la factorización. Comprobaremos multiplicando.' },
          { expression: '4y(16y^2) + 4y(4y) + 4y(1) - 1(16y^2) - 1(4y) - 1(1)', explanation: 'Aplicamos la propiedad distributiva.' },
          { expression: '64y^3 + 16y^2 + 4y - 16y^2 - 4y - 1', explanation: 'Resolvemos las multiplicaciones.' },
          { expression: '64y^3 + (16y^2 - 16y^2) + (4y - 4y) - 1', explanation: 'Agrupamos términos semejantes. Los términos centrales se cancelan.' },
          { expression: '64y^3 - 1', explanation: 'Llegamos a la expresión original, comprobando la factorización.' }
        ]
      },
      {
        problem: 'Comprobar: 27x^3 - 8',
        solutionSteps: [
          { expression: '27x^3 - 8', explanation: 'Queremos factorizar esta diferencia de cubos.' },
          { expression: '(3x)^3 - (2)^3', explanation: 'Identificamos las bases: a = 3x, b = 2.' },
          { expression: '(3x - 2)((3x)^2 + (3x)(2) + (2)^2)', explanation: 'Aplicamos la fórmula: (a-b)(a² + ab + b²).' },
          { expression: '(3x - 2)(9x^2 + 6x + 4)', explanation: 'Esta es la factorización. Comprobaremos multiplicando.' },
          { expression: '3x(9x^2) + 3x(6x) + 3x(4) - 2(9x^2) - 2(6x) - 2(4)', explanation: 'Aplicamos la propiedad distributiva.' },
          { expression: '27x^3 + 18x^2 + 12x - 18x^2 - 12x - 8', explanation: 'Resolvemos las multiplicaciones.' },
          { expression: '27x^3 + (18x^2 - 18x^2) + (12x - 12x) - 8', explanation: 'Agrupamos términos semejantes. Los términos centrales se cancelan.' },
          { expression: '27x^3 - 8', explanation: 'Llegamos a la expresión original, comprobando la factorización.' }
        ]
      },
      {
        problem: 'Comprobar: 125m^3 - 64n^3',
        solutionSteps: [
          { expression: '125m^3 - 64n^3', explanation: 'Queremos factorizar esta diferencia de cubos.' },
          { expression: '(5m)^3 - (4n)^3', explanation: 'Identificamos las bases: a = 5m, b = 4n.' },
          { expression: '(5m - 4n)((5m)^2 + (5m)(4n) + (4n)^2)', explanation: 'Aplicamos la fórmula: (a-b)(a² + ab + b²).' },
          { expression: '(5m - 4n)(25m^2 + 20mn + 16n^2)', explanation: 'Esta es la factorización. Comprobaremos multiplicando.' },
          { expression: '5m(25m^2) + 5m(20mn) + 5m(16n^2) - 4n(25m^2) - 4n(20mn) - 4n(16n^2)', explanation: 'Aplicamos la propiedad distributiva.' },
          { expression: '125m^3 + 100m^2n + 80mn^2 - 100m^2n - 80mn^2 - 64n^3', explanation: 'Resolvemos las multiplicaciones.' },
          { expression: '125m^3 + (100m^2n - 100m^2n) + (80mn^2 - 80mn^2) - 64n^3', explanation: 'Agrupamos términos semejantes. Los términos centrales se cancelan.' },
          { expression: '125m^3 - 64n^3', explanation: 'Llegamos a la expresión original, comprobando la factorización.' }
        ]
      },
      {
        problem: 'Comprobar: p^6 - 27',
        solutionSteps: [
          { expression: 'p^6 - 27', explanation: 'Queremos factorizar esta diferencia de cubos.' },
          { expression: '(p^2)^3 - (3)^3', explanation: 'Identificamos las bases: a = p², b = 3.' },
          { expression: '(p^2 - 3)((p^2)^2 + (p^2)(3) + (3)^2)', explanation: 'Aplicamos la fórmula: (a-b)(a² + ab + b²).' },
          { expression: '(p^2 - 3)(p^4 + 3p^2 + 9)', explanation: 'Esta es la factorización. Comprobaremos multiplicando.' },
          { expression: 'p^2(p^4) + p^2(3p^2) + p^2(9) - 3(p^4) - 3(3p^2) - 3(9)', explanation: 'Aplicamos la propiedad distributiva.' },
          { expression: 'p^6 + 3p^4 + 9p^2 - 3p^4 - 9p^2 - 27', explanation: 'Resolvemos las multiplicaciones.' },
          { expression: 'p^6 + (3p^4 - 3p^4) + (9p^2 - 9p^2) - 27', explanation: 'Agrupamos términos semejantes. Los términos centrales se cancelan.' },
          { expression: 'p^6 - 27', explanation: 'Llegamos a la expresión original, comprobando la factorización.' }
        ]
      },
      {
        problem: 'Comprobar: 8a^3 - 125b^6',
        solutionSteps: [
          { expression: '8a^3 - 125b^6', explanation: 'Queremos factorizar esta diferencia de cubos.' },
          { expression: '(2a)^3 - (5b^2)^3', explanation: 'Identificamos las bases: a = 2a, b = 5b².' },
          { expression: '(2a - 5b^2)((2a)^2 + (2a)(5b^2) + (5b^2)^2)', explanation: 'Aplicamos la fórmula: (a-b)(a² + ab + b²).' },
          { expression: '(2a - 5b^2)(4a^2 + 10ab^2 + 25b^4)', explanation: 'Esta es la factorización. Comprobaremos multiplicando.' },
          { expression: '2a(4a^2) + 2a(10ab^2) + 2a(25b^4) - 5b^2(4a^2) - 5b^2(10ab^2) - 5b^2(25b^4)', explanation: 'Aplicamos la propiedad distributiva.' },
          { expression: '8a^3 + 20a^2b^2 + 50ab^4 - 20a^2b^2 - 50ab^4 - 125b^6', explanation: 'Resolvemos las multiplicaciones.' },
          { expression: '8a^3 + (20a^2b^2 - 20a^2b^2) + (50ab^4 - 50ab^4) - 125b^6', explanation: 'Agrupamos términos semejantes. Los términos centrales se cancelan.' },
          { expression: '8a^3 - 125b^6', explanation: 'Llegamos a la expresión original, comprobando la factorización.' }
        ]
      }
    ],
    GeometryComponent: SumOfCubesGeometry
  }
];
