import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { CheckCircle, XCircle, Shield, Zap, Globe, Clock, Cpu, Archive, TrendingUp } from 'lucide-react';

export function RSAProsCons() {
  const advantages = [
    {
      icon: <Shield className="w-7 h-7" />,
      title: "No necesitas compartir secretos",
      description: "Tu llave privada nunca sale de tu computadora. Solo publicas la llave que otros pueden usar para cifrarte mensajes."
    },
    {
      icon: <CheckCircle className="w-7 h-7" />,
      title: "Concepto fácil de entender",
      description: "Una vez que entiendes la analogía del candado, el resto tiene sentido. Es matemática elegante."
    },
    {
      icon: <Globe className="w-7 h-7" />,
      title: "Usado en todas partes",
      description: "Desde tu banco hasta WhatsApp, RSA protege gran parte de las comunicaciones modernas."
    }
  ];

  const disadvantages = [
    {
      icon: <Clock className="w-7 h-7" />,
      title: "Relativamente lento",
      description: "Las operaciones con números grandes requieren más tiempo de procesamiento que otros métodos."
    },
    {
      icon: <Cpu className="w-7 h-7" />,
      title: "Vulnerable con números pequeños",
      description: "En ejemplos didácticos como este, es fácil romperlo. En la realidad se usan números gigantescos."
    },
    {
      icon: <Archive className="w-7 h-7" />,
      title: "No ideal para archivos grandes",
      description: "Se usa más para intercambiar llaves pequeñas que para cifrar archivos completos."
    }
  ];

  return (
    <section className="py-20 px-8 bg-white">
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
            <h2 className="text-3xl md:text-4xl text-red-800">Las dos caras de la moneda</h2>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl">
            Como cualquier tecnología, RSA tiene sus fortalezas y sus limitaciones. 
            Vamos a ser honestos sobre ambas.
          </p>
        </motion.div>

        <div className="grid xl:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 h-full bg-gradient-to-br from-green-50 to-emerald-50 border-l-4 border-green-500">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-green-100 rounded-full">
                  <TrendingUp className="w-8 h-8 text-green-700" />
                </div>
                <h3 className="text-2xl text-green-800">Las ventajas</h3>
              </div>
              
              <div className="space-y-6">
                {advantages.map((advantage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4 p-5 bg-white rounded-xl border border-green-200 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="text-green-600 mt-1 flex-shrink-0">
                      {advantage.icon}
                    </div>
                    <div>
                      <h4 className="text-lg text-green-800 mb-2">
                        {advantage.title}
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {advantage.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 h-full bg-gradient-to-br from-red-50 to-rose-50 border-l-4 border-red-500">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-red-100 rounded-full">
                  <XCircle className="w-8 h-8 text-red-700" />
                </div>
                <h3 className="text-2xl text-red-800">Las limitaciones</h3>
              </div>
              
              <div className="space-y-6">
                {disadvantages.map((disadvantage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4 p-5 bg-white rounded-xl border border-red-200 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="text-red-600 mt-1 flex-shrink-0">
                      {disadvantage.icon}
                    </div>
                    <div>
                      <h4 className="text-lg text-red-800 mb-2">
                        {disadvantage.title}
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {disadvantage.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="p-10 bg-gradient-to-r from-red-50 via-pink-50 to-rose-50 border-2 border-red-200">
            <h3 className="text-2xl text-red-800 mb-8 text-center">
              ¿Por qué RSA sigue siendo relevante?
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <Clock className="w-6 h-6 text-red-600" />
                  </div>
                  <h4 className="text-lg text-red-800">Velocidad en perspectiva</h4>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">RSA (cifrado asimétrico)</span>
                      <Badge className="bg-red-100 text-red-700">Más lento</Badge>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className="bg-red-500 h-2 rounded-full"
                        initial={{ width: "0%" }}
                        whileInView={{ width: "25%" }}
                        transition={{ duration: 2, delay: 0.5 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">AES (cifrado simétrico)</span>
                      <Badge className="bg-green-100 text-green-700">Más rápido</Badge>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className="bg-green-500 h-2 rounded-full"
                        initial={{ width: "0%" }}
                        whileInView={{ width: "90%" }}
                        transition={{ duration: 2, delay: 0.8 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-red-200">
                <h5 className="text-lg text-red-800 mb-4">La solución híbrida</h5>
                <p className="text-gray-700 leading-relaxed mb-4">
                  En la práctica, RSA y AES trabajan en equipo:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    RSA cifra una llave pequeña de AES
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    AES cifra los datos grandes
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    Obtienes lo mejor de ambos mundos
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}