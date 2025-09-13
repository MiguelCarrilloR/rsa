import { RSAHero } from './components/rsa-hero';
import { RSAExplanation } from './components/rsa-explanation';
import { RSASimulator } from './components/rsa-simulator';
import { RSAProsCons } from './components/rsa-pros-cons';
import { RSASecurity } from './components/rsa-security';
import { Lock } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen">
      <RSAHero />
      <RSAExplanation />
      <RSASimulator />
      <RSAProsCons />
      <RSASecurity />
      
      {/* Footer */}
      <footer className="bg-gradient-to-r from-red-900 to-red-800 text-white py-12 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-red-700 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="w-8 h-8 text-red-100" />
          </div>
          <h3 className="text-2xl mb-4">¡Ahora entiendes RSA!</h3>
          <p className="text-red-100 max-w-2xl mx-auto leading-relaxed">
            La próxima vez que veas "https" en tu navegador o uses aplicaciones seguras, 
            recordarás la elegante matemática que protege tus datos.
          </p>
          <div className="mt-8 pt-6 border-t border-red-700">
            <p className="text-red-200 text-sm">
              Tutorial interactivo de criptografía RSA
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}