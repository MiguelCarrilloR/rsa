import { motion } from 'motion/react';
import { Lock, Unlock, Key, Shield } from 'lucide-react';
import { Card } from './ui/card';

export function RSAHero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-rose-100 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-red-500/5 backdrop-blur-3xl"></div>
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-left mb-12"
        >
          <div className="flex items-start gap-6 mb-8">
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="p-3 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl shadow-lg"
            >
              <Shield className="w-12 h-12 text-red-700" />
            </motion.div>
            <div>
              <h1 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-red-700 via-red-600 to-rose-500 bg-clip-text text-transparent leading-tight">
                ¿Qué rayos es RSA?
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-300 rounded-full"></div>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="max-w-4xl"
          >
            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-6">
              Imagínate que quieres mandar un mensaje súper secreto a tu mejor amigo. 
              El problema es que hay un montón de gente curiosa en el camino que podría leerlo.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              RSA es como tener un candado mágico que cualquiera puede cerrar, 
              pero solo la persona correcta puede abrir.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="grid md:grid-cols-3 gap-6"
        >
          <Card className="p-6 bg-white/90 backdrop-blur-sm border border-red-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="mb-4"
            >
              <Unlock className="w-10 h-10 text-red-500" />
            </motion.div>
            <h3 className="text-lg text-red-800 mb-2">Cerrar es fácil</h3>
            <p className="text-gray-600 text-sm">
              Cualquier persona puede usar la llave pública para cifrar un mensaje
            </p>
          </Card>

          <Card className="p-6 bg-white/90 backdrop-blur-sm border border-red-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <motion.div
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="mb-4"
            >
              <div className="w-10 h-2 bg-gradient-to-r from-red-400 to-red-600 rounded-full"></div>
            </motion.div>
            <h3 className="text-lg text-red-800 mb-2">Viaja seguro</h3>
            <p className="text-gray-600 text-sm">
              El mensaje cifrado puede viajar por internet sin problemas
            </p>
          </Card>

          <Card className="p-6 bg-white/90 backdrop-blur-sm border border-red-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <motion.div
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="mb-4"
            >
              <Key className="w-10 h-10 text-red-700" />
            </motion.div>
            <h3 className="text-lg text-red-800 mb-2">Solo uno puede abrir</h3>
            <p className="text-gray-600 text-sm">
              Únicamente quien tiene la llave privada puede leer el mensaje
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}