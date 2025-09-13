import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Users, Lock, Unlock, Hash, ArrowRight } from 'lucide-react';

export function RSAExplanation() {
  return (
    <section className="py-20 px-8 bg-gradient-to-b from-white to-red-50/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-1 bg-red-500 rounded-full"></div>
            <h2 className="text-3xl md:text-4xl text-red-800">¿Cómo funciona realmente?</h2>
          </div>
          <p className="text-xl text-gray-700 max-w-4xl leading-relaxed">
            RSA es lo que llamamos un cifrado asimétrico. La magia está en que usa 
            dos llaves diferentes que trabajan juntas, pero tienen roles opuestos.
          </p>
        </motion.div>

        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-8"
          >
            <Card className="p-8 bg-gradient-to-br from-red-50 to-red-100 border-l-4 border-red-400 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-red-200 rounded-xl">
                  <Unlock className="w-7 h-7 text-red-700" />
                </div>
                <div>
                  <h3 className="text-xl text-red-900 mb-2">Clave Pública</h3>
                  <Badge className="bg-red-200 text-red-800 hover:bg-red-300">Para todos</Badge>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Es como dejar tu buzón abierto para que cualquiera pueda meter cartas. 
                Todo el mundo puede usarla para cifrar mensajes que te envían, 
                pero no pueden leer lo que otros te mandan.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-rose-50 to-red-100 border-l-4 border-rose-400 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-rose-200 rounded-xl">
                  <Lock className="w-7 h-7 text-rose-700" />
                </div>
                <div>
                  <h3 className="text-xl text-rose-900 mb-2">Clave Privada</h3>
                  <Badge className="bg-rose-200 text-rose-800 hover:bg-rose-300">Solo tuya</Badge>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Esta es tu llave secreta personal. Solo tú la conoces y solo ella 
                puede abrir los mensajes que cifraron con tu clave pública. 
                Es como la combinación de tu caja fuerte personal.
              </p>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="p-10 bg-gradient-to-r from-pink-50 via-red-50 to-rose-50 border border-pink-200">
            <h3 className="text-2xl text-red-800 mb-8 text-center">
              La historia de Miguel y Valentina
            </h3>
            
            <div className="grid md:grid-cols-5 gap-6 items-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-200 rounded-full flex items-center justify-center mb-3 mx-auto">
                  <span className="text-lg">V</span>
                </div>
                <p className="text-sm text-gray-700">
                  Valentina publica su llave pública
                </p>
              </div>
              
              <ArrowRight className="w-6 h-6 text-red-400 mx-auto" />
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mb-3 mx-auto">
                  <span className="text-lg">M</span>
                </div>
                <p className="text-sm text-gray-700">
                  Miguel cifra su mensaje con esa llave
                </p>
              </div>
              
              <ArrowRight className="w-6 h-6 text-red-400 mx-auto" />
              
              <div className="text-center">
                <div className="w-16 h-16 bg-red-200 rounded-full flex items-center justify-center mb-3 mx-auto">
                  <span className="text-lg">V</span>
                </div>
                <p className="text-sm text-gray-700">
                  Solo Valentina puede descifrarlo con su llave privada
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300">
              <div className="p-3 bg-red-100 rounded-lg w-fit mb-4">
                <Users className="w-6 h-6 text-red-600" />
              </div>
              <h4 className="text-lg text-red-800 mb-3">Generación de llaves</h4>
              <p className="text-gray-600 text-sm mb-4">
                Se eligen dos números primos grandes y se hacen cálculos matemáticos 
                para crear las dos llaves relacionadas.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Elegir números primos (ej: 17 y 11)</li>
                <li>• Multiplicarlos para obtener n</li>
                <li>• Calcular las llaves pública y privada</li>
              </ul>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300">
              <div className="p-3 bg-red-100 rounded-lg w-fit mb-4">
                <Lock className="w-6 h-6 text-red-600" />
              </div>
              <h4 className="text-lg text-red-800 mb-3">Proceso de cifrado</h4>
              <p className="text-gray-600 text-sm mb-4">
                El mensaje se convierte en números y se aplica una fórmula 
                matemática usando la llave pública.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Convertir mensaje a números</li>
                <li>• Aplicar fórmula con exponentes</li>
                <li>• Obtener mensaje cifrado</li>
              </ul>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300">
              <div className="p-3 bg-red-100 rounded-lg w-fit mb-4">
                <Unlock className="w-6 h-6 text-red-600" />
              </div>
              <h4 className="text-lg text-red-800 mb-3">Descifrado seguro</h4>
              <p className="text-gray-600 text-sm mb-4">
                Solo la llave privada puede revertir el proceso y 
                recuperar el mensaje original.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Usar la llave privada</li>
                <li>• Aplicar operación inversa</li>
                <li>• Recuperar mensaje original</li>
              </ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}