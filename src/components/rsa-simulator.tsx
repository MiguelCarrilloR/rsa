import { useState } from 'react';
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowRight, Play, RotateCcw, User, Calculator, Send, Eye } from 'lucide-react';

export function RSASimulator() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const steps = [
    {
      title: "Los protagonistas",
      content: (
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 bg-gradient-to-br from-red-50 to-red-100 border-red-200 transform hover:scale-105 transition-transform duration-300">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-200 rounded-full flex items-center justify-center mb-4 mx-auto">
                <User className="w-10 h-10 text-red-700" />
              </div>
              <h3 className="text-xl text-red-800 mb-3">Miguel</h3>
              <p className="text-gray-700 leading-relaxed">
                Quiere enviar un mensaje súper secreto a Valentina. 
                Su número favorito es el <strong className="text-red-600">88</strong>
              </p>
            </div>
          </Card>
          
          <Card className="p-8 bg-gradient-to-br from-rose-50 to-pink-100 border-pink-200 transform hover:scale-105 transition-transform duration-300">
            <div className="text-center">
              <div className="w-20 h-20 bg-pink-200 rounded-full flex items-center justify-center mb-4 mx-auto">
                <User className="w-10 h-10 text-pink-700" />
              </div>
              <h3 className="text-xl text-pink-800 mb-3">Valentina</h3>
              <p className="text-gray-700 leading-relaxed">
                Ha generado sus llaves RSA y publicó la llave pública 
                para que Miguel pueda cifrar mensajes
              </p>
            </div>
          </Card>
        </div>
      )
    },
    {
      title: "Los números matemáticos",
      content: (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <p className="text-lg text-gray-600">
              Para este ejemplo usaremos números pequeños para que sea fácil de entender
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-white border-2 border-red-200">
              <div className="flex items-center gap-3 mb-4">
                <Calculator className="w-6 h-6 text-red-600" />
                <h3 className="text-lg text-red-800">Números base</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Primo P:</span>
                  <Badge className="bg-red-100 text-red-800">17</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Primo Q:</span>
                  <Badge className="bg-red-100 text-red-800">11</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">n = P × Q:</span>
                  <Badge className="bg-red-200 text-red-900">187</Badge>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-white border-2 border-red-200">
              <div className="flex items-center gap-3 mb-4">
                <ArrowRight className="w-6 h-6 text-red-600" />
                <h3 className="text-lg text-red-800">Llaves resultantes</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Llave pública (e):</span>
                  <Badge className="bg-green-100 text-green-800">7</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Llave privada (d):</span>
                  <Badge className="bg-blue-100 text-blue-800">23</Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>
      )
    },
    {
      title: "Miguel cifra su mensaje",
      content: (
        <div className="space-y-8">
          <Card className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Send className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl text-blue-800">Aplicando la fórmula de cifrado</h3>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-blue-200">
                <p className="text-gray-600 mb-4">Miguel usa la llave pública de Valentina:</p>
                <div className="text-2xl mb-4 font-mono text-center">
                  C = 88<sup>7</sup> mod 187
                </div>
                <motion.div 
                  className="text-center"
                  animate={isAnimating ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-lg mb-2">Resultado del cifrado:</p>
                  <Badge className="text-2xl px-6 py-3 bg-red-500 text-white">11</Badge>
                </motion.div>
              </div>
            </div>
          </Card>
          
          <div className="flex items-center justify-center gap-6 p-6 bg-gray-50 rounded-lg">
            <div className="text-center">
              <Badge className="bg-gray-200 text-gray-800 mb-2">Mensaje original</Badge>
              <div className="text-3xl">88</div>
            </div>
            <ArrowRight className="w-8 h-8 text-gray-400" />
            <div className="text-center">
              <Badge className="bg-red-500 text-white mb-2">Mensaje cifrado</Badge>
              <div className="text-3xl text-red-600">11</div>
            </div>
          </div>
          
          <p className="text-center text-gray-600 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            Miguel envía el número <strong>11</strong> por internet. 
            Nadie que lo vea sabrá que en realidad significa "88"
          </p>
        </div>
      )
    },
    {
      title: "Valentina descifra el mensaje",
      content: (
        <div className="space-y-8">
          <Card className="p-8 bg-gradient-to-r from-pink-50 to-rose-50 border-2 border-pink-200">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <User className="w-8 h-8 text-pink-600" />
                <h3 className="text-xl text-pink-800">Valentina usa su llave privada</h3>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-pink-200">
                <p className="text-gray-600 mb-4">Aplicando la fórmula de descifrado:</p>
                <div className="text-2xl mb-4 font-mono text-center">
                  M = 11<sup>23</sup> mod 187
                </div>
                <motion.div 
                  className="text-center"
                  animate={isAnimating ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-lg mb-2">¡Mensaje recuperado!</p>
                  <Badge className="text-2xl px-6 py-3 bg-green-500 text-white">88</Badge>
                </motion.div>
              </div>
            </div>
          </Card>
          
          <div className="flex items-center justify-center gap-6 p-6 bg-gray-50 rounded-lg">
            <div className="text-center">
              <Badge className="bg-red-500 text-white mb-2">Recibió</Badge>
              <div className="text-3xl text-red-600">11</div>
            </div>
            <ArrowRight className="w-8 h-8 text-gray-400" />
            <div className="text-center p-4 bg-green-100 rounded-lg">
              <div className="text-lg text-green-800">Llave privada</div>
            </div>
            <ArrowRight className="w-8 h-8 text-gray-400" />
            <div className="text-center">
              <Badge className="bg-green-500 text-white mb-2">Descifrado</Badge>
              <div className="text-3xl text-green-600">88</div>
            </div>
          </div>
          
          <p className="text-xl text-center text-green-700 bg-green-50 p-4 rounded-lg border border-green-200">
            ¡Perfecto! Valentina recuperó el mensaje original
          </p>
        </div>
      )
    },
    {
      title: "¿Qué pasa si alguien más ve el mensaje?",
      content: (
        <Card className="p-8 bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200">
          <div className="text-center space-y-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Eye className="w-8 h-8 text-orange-600" />
              <h3 className="text-2xl text-orange-800">Un curioso intercepta el mensaje</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white rounded-lg border border-orange-200">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Eye className="w-6 h-6 text-orange-600" />
                </div>
                <p className="text-sm text-gray-700">
                  Ve el número <strong className="text-orange-600">11</strong> viajando por internet
                </p>
              </div>
              
              <div className="text-center p-4 bg-white rounded-lg border border-red-200">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-red-600 text-xl">✗</span>
                </div>
                <p className="text-sm text-gray-700">
                  No tiene la llave privada de Valentina
                </p>
              </div>
              
              <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-gray-600 text-xl">?</span>
                </div>
                <p className="text-sm text-gray-700">
                  No puede hacer absolutamente nada con esa información
                </p>
              </div>
            </div>
            
            <motion.div 
              className="text-lg p-6 bg-green-100 rounded-lg border-2 border-green-300"
              animate={isAnimating ? { scale: [1, 1.02, 1] } : {}}
              transition={{ duration: 0.8 }}
            >
              <p className="text-green-800">
                <strong>La magia de RSA:</strong> La información viaja abiertamente por internet, 
                pero sin la llave privada correcta es completamente inútil para cualquier atacante.
              </p>
            </motion.div>
          </div>
        </Card>
      )
    }
  ];

  const nextStep = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
      setIsAnimating(false);
    }, 100);
  };

  const resetSimulation = () => {
    setCurrentStep(0);
    setIsAnimating(false);
  };

  return (
    <section className="py-20 px-8 bg-gradient-to-br from-red-50/50 to-rose-100/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-1 bg-red-500 rounded-full"></div>
            <h2 className="text-3xl md:text-4xl text-red-800">Ejemplo práctico paso a paso</h2>
          </div>
          <p className="text-lg text-gray-600">
            Vamos a ver exactamente cómo Miguel le envía un mensaje secreto a Valentina
          </p>
        </motion.div>

        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <h3 className="text-xl text-red-800">{steps[currentStep].title}</h3>
            <Badge className="bg-red-100 text-red-800">
              Paso {currentStep + 1} de {steps.length}
            </Badge>
          </div>
          
          <div className="w-full bg-red-100 rounded-full h-3 mb-8">
            <motion.div
              className="bg-gradient-to-r from-red-500 to-red-600 h-3 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </div>
        </div>

        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {steps[currentStep].content}
        </motion.div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            onClick={nextStep}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3"
            size="lg"
          >
            {currentStep === steps.length - 1 ? (
              <>
                <RotateCcw className="w-5 h-5" />
                Volver al inicio
              </>
            ) : (
              <>
                <Play className="w-5 h-5" />
                Siguiente paso
              </>
            )}
          </Button>
          
          {currentStep > 0 && (
            <Button 
              onClick={resetSimulation}
              variant="outline"
              className="border-red-300 text-red-700 hover:bg-red-50 px-8 py-3"
              size="lg"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              Reiniciar
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}