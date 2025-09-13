import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Shield, AlertTriangle, Computer, Lock, Clock, Zap, Target, Ban, DollarSign } from 'lucide-react';

export function RSASecurity() {
  return (
    <section className="py-20 px-8 bg-gradient-to-br from-red-50/30 to-rose-100/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-1 bg-red-500 rounded-full"></div>
            <h2 className="text-3xl md:text-4xl text-red-800">¿Realmente es imposible de romper?</h2>
          </div>
          <p className="text-xl text-gray-700 max-w-4xl leading-relaxed">
            La respuesta honesta: depende completamente de si tienes la llave privada correcta. 
            Sin ella, estás básicamente tratando de adivinar un número astronómicamente grande.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="p-10 bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200">
            <div className="text-center space-y-8">
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block"
              >
                <div className="w-24 h-24 bg-red-200 rounded-full flex items-center justify-center">
                  <Lock className="w-12 h-12 text-red-700" />
                </div>
              </motion.div>
              
              <h3 className="text-2xl text-red-800 mb-6">La realidad sin la llave privada</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center p-6 bg-white rounded-xl border border-red-200">
                  <AlertTriangle className="w-10 h-10 text-orange-600 mb-4" />
                  <h4 className="text-lg text-orange-800 mb-2">Información visible</h4>
                  <p className="text-sm text-gray-700 text-center">
                    Puedes ver el mensaje cifrado, pero es solo un número sin sentido
                  </p>
                </div>
                
                <div className="flex flex-col items-center p-6 bg-white rounded-xl border border-red-200">
                  <Computer className="w-10 h-10 text-blue-600 mb-4" />
                  <h4 className="text-lg text-blue-800 mb-2">Supercomputadoras</h4>
                  <p className="text-sm text-gray-700 text-center">
                    Ni las máquinas más potentes pueden romper RSA moderno
                  </p>
                </div>
                
                <div className="flex flex-col items-center p-6 bg-white rounded-xl border border-red-200">
                  <Ban className="w-10 h-10 text-red-600 mb-4" />
                  <h4 className="text-lg text-red-800 mb-2">Resultado</h4>
                  <p className="text-sm text-gray-700 text-center">
                    El mensaje permanece completamente inaccesible
                  </p>
                </div>
              </div>
              
              <motion.div 
                className="text-lg p-6 bg-white rounded-xl border-2 border-red-300"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-red-800">
                  <strong>La brutal realidad:</strong> RSA está diseñado matemáticamente 
                  para que romperlo sin la llave privada sea computacionalmente imposible 
                  con la tecnología actual.
                </p>
              </motion.div>
            </div>
          </Card>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 h-full bg-gradient-to-br from-green-50 to-emerald-50 border-l-4 border-green-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-green-100 rounded-full">
                  <Shield className="w-8 h-8 text-green-700" />
                </div>
                <h3 className="text-xl text-green-800">Con la llave correcta</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-green-200">
                  <Zap className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-green-800 mb-1">Descifrado instantáneo</h4>
                    <p className="text-sm text-gray-700">
                      La operación matemática es directa y rápida
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-green-200">
                  <Target className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-green-800 mb-1">Precisión perfecta</h4>
                    <p className="text-sm text-gray-700">
                      Recuperas exactamente el mensaje original
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-green-200">
                  <Lock className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-green-800 mb-1">Control total</h4>
                    <p className="text-sm text-gray-700">
                      Solo tú decides quién puede leer tus mensajes
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 h-full bg-gradient-to-br from-red-50 to-rose-50 border-l-4 border-red-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-red-100 rounded-full">
                  <AlertTriangle className="w-8 h-8 text-red-700" />
                </div>
                <h3 className="text-xl text-red-800">Sin la llave</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-red-200">
                  <Clock className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-red-800 mb-1">Tiempo astronómico</h4>
                    <p className="text-sm text-gray-700">
                      Millones de años de computación continua
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-red-200">
                  <DollarSign className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-red-800 mb-1">Costo prohibitivo</h4>
                    <p className="text-sm text-gray-700">
                      Billones de dólares en recursos computacionales
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-red-200">
                  <Ban className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-red-800 mb-1">Probabilidad cero</h4>
                    <p className="text-sm text-gray-700">
                      Matemáticamente considerado imposible
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="p-10 bg-gradient-to-r from-red-600 to-rose-600 text-white">
            <div className="text-center space-y-6">
              <motion.div
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block"
              >
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                  <Shield className="w-10 h-10 text-white" />
                </div>
              </motion.div>
              
              <h3 className="text-2xl">El secreto matemático de RSA</h3>
              
              <p className="text-lg max-w-3xl mx-auto leading-relaxed">
                La elegancia está en una asimetría matemática: es trivialmente fácil 
                multiplicar dos números primos enormes, pero extraordinariamente difícil 
                factorizar el resultado de vuelta.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
                <Badge className="bg-white/90 text-red-700 px-6 py-2 text-base">
                  Fácil: 17 × 11 = 187
                </Badge>
                <Badge className="bg-white/90 text-red-700 px-6 py-2 text-base">
                  Difícil: 187 = ? × ?
                </Badge>
              </div>
              
              <p className="text-sm opacity-90 max-w-2xl mx-auto">
                Ahora imagina esta ecuación con números de 300 dígitos cada uno. 
                Esa diferencia de dificultad es lo que mantiene segura toda la internet moderna.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}