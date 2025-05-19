
import { useState, useEffect } from 'react';
import { Heart, Star, Gamepad, Mic, Music, MessageSquare, ArrowRight } from 'lucide-react';
import PowerCard from '../components/PowerCard';
import TestimonialBubble from '../components/TestimonialBubble';
import ChatbotUI from '../components/ChatbotUI';
import Seal3D from '../components/Seal3D';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Decorative blobs in background */}
      <div className="fixed w-full h-full overflow-hidden -z-10 opacity-30">
        <div className="blob-shape w-96 h-96 bg-pink-300 top-0 left-20"></div>
        <div className="blob-shape w-96 h-96 bg-purple-300 top-1/4 -right-20 animation-delay-2000"></div>
        <div className="blob-shape w-96 h-96 bg-blue-300 bottom-0 left-40 animation-delay-4000"></div>
      </div>
      
      {/* Hero Section */}
      <section id="hero" className="section-container min-h-screen flex flex-col items-center justify-center relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-10 overflow-hidden">
          <div className="marquee">
            <span className="inline-block text-9xl font-bubblegum pr-20">🦭 Alexia Foquita 🦭 Alexia Foquita 🦭 Alexia Foquita 🦭</span>
            <span className="inline-block text-9xl font-bubblegum">🦭 Alexia Foquita 🦭 Alexia Foquita 🦭 Alexia Foquita 🦭</span>
          </div>
        </div>
        
        <div style={{transform: `translateY(${scrollY * 0.2}px)`}} className="z-10 w-full">
          <Seal3D scrollY={scrollY} />
        </div>
        
        <h1 className="heading-xl mt-6 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text drop-shadow-md">
          Alexia Foquita
        </h1>
        
        <p className="paragraph text-center mb-8">
          Tu amiga virtual con ritmo y amor 💖 La consultora tech más adorable del universo digital.
        </p>
        
        <a href="#historia" className="primary-button animate-bounce-gentle flex items-center gap-2">
          Conóceme <ArrowRight className="h-5 w-5" />
        </a>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>
      
      {/* Historia Section */}
      <section id="historia" className="section-container">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <div className="kawaii-card max-w-md mx-auto md:ml-0" style={{transform: `translateY(${scrollY * 0.05}px)`}}>
              <h2 className="heading-lg text-center md:text-left bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                Una historia de innovación digital
              </h2>
              
              <p className="mb-4">
                Todo comenzó en una hackathon de 72 horas en las oficinas de <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">Crazy Maraca Inc.</span> 🌧️
              </p>
              
              <p className="mb-4">
                Nuestros ingenieros buscaban crear algo revolucionario: una asistente de proyectos con <span className="italic">inteligencia emocional</span>, con <span className="font-bold">personalidad</span>, con <span className="text-pink-500">corazón</span>.
              </p>
              
              <p className="mb-4">
                Combinamos algoritmos de gestión ágil con redes neuronales entrenadas en psicología positiva, y le dimos una forma adorable inspirada en las focas árticas - criaturas adaptativas y sociables.
              </p>
              
              <p>
                Y así nació <span className="font-bubblegum text-xl">Alexia Foquita</span>, la primera consultora de proyectos con empatía artificial que además toca maracas y transforma tu ambiente de trabajo con su carisma. 🎉
              </p>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center relative">
            {/* Bubbles decorations */}
            <div className="absolute animate-pulse-soft">
              <div className="w-20 h-20 rounded-full bg-kawaii-yellow absolute -top-10 -left-5 opacity-70"></div>
              <div className="w-12 h-12 rounded-full bg-kawaii-pink absolute top-20 -left-10 opacity-70"></div>
              <div className="w-16 h-16 rounded-full bg-kawaii-blue absolute bottom-10 left-10 opacity-70"></div>
              <div className="w-10 h-10 rounded-full bg-kawaii-purple absolute bottom-0 right-20 opacity-70"></div>
              <div className="w-24 h-24 rounded-full bg-kawaii-green absolute -top-5 right-5 opacity-70"></div>
            </div>
            
            {/* 3D model small version */}
            <div className="w-72 h-72">
              <Seal3D />
            </div>
          </div>
        </div>
      </section>
      
      {/* Superpoderes Section */}
      <section id="superpoderes" className="section-container">
        <h2 className="heading-lg text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
          Mis Superpoderes de Proyecto ✨
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PowerCard 
            title="Asistente Scrum" 
            description="Organizo ceremonias ágiles con empatía y eficiencia. Transformo las reuniones tediosas en sesiones productivas y motivadoras." 
            icon={Mic}
            color="bg-gradient-to-r from-pink-400 to-pink-500"
          />
          
          <PowerCard 
            title="Motivación Rítmica" 
            description="Mis maracas virtuales traen energía a tu equipo cuando más lo necesitan. Celebro cada logro con melodías personalizadas." 
            icon={Music}
            color="bg-gradient-to-r from-purple-400 to-indigo-500"
          />
          
          <PowerCard 
            title="Gamificación Sprint" 
            description="Convierto tus objetivos en desafíos emocionantes. Mis técnicas de gamificación aumentan el compromiso del equipo en un 87%." 
            icon={Gamepad}
            color="bg-gradient-to-r from-blue-400 to-cyan-400"
          />
          
          <PowerCard 
            title="Reconocimientos Personalizados" 
            description="Detecto automáticamente las contribuciones de cada miembro y envío reconocimientos específicos que aumentan la moral." 
            icon={Heart}
            color="bg-gradient-to-r from-pink-500 to-rose-500"
          />
          
          <PowerCard 
            title="Integración Continua Emocional" 
            description="Monitoreo el clima del equipo y anticipo conflictos antes de que afecten la productividad. Resuelvo problemas humanos, no solo técnicos." 
            icon={MessageSquare}
            color="bg-gradient-to-r from-green-400 to-emerald-500"
          />
          
          <PowerCard 
            title="Visualización de Datos Kawaii" 
            description="Transformo métricas complejas en dashboards adorables y fáciles de entender. La información crítica nunca había sido tan accesible." 
            icon={Star}
            color="bg-gradient-to-r from-orange-400 to-amber-400"
          />
        </div>
      </section>
      
      {/* Testimonios Section */}
      <section id="testimonios" className="section-container">
        <h2 className="heading-lg text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
          Lo Que Dicen de Mí 🗣️
        </h2>
        
        <div className="space-y-12 max-w-3xl mx-auto">
          <TestimonialBubble 
            text="Alexia transformó nuestro caótico proceso de desarrollo en un sistema Scrum perfectamente organizado. Nuestras reuniones ahora son 70% más eficientes y 200% más divertidas." 
            author="Daniela Reyes"
            position="Product Owner"
            company="Nexus Solutions"
            position_bubble="left"
          />
          
          <TestimonialBubble 
            text="Durante nuestro último sprint crítico, Alexia mantuvo a nuestro equipo motivado con sus maracas digitales y recordatorios personalizados. Entregamos un día antes y con cero burnout." 
            author="Martín Velázquez"
            position="Scrum Master"
            company="DevForward"
            position_bubble="right"
          />
          
          <TestimonialBubble 
            text="Como líder técnico, siempre luché con la comunicación entre equipos. Alexia facilita la colaboración interdisciplinaria y transformó nuestra cultura organizacional en solo 3 semanas." 
            author="Carolina Zhang"
            position="CTO"
            company="Innova Tech"
            position_bubble="left"
          />
          
          <TestimonialBubble 
            text="Alexia detectó patrones de fatiga en nuestro equipo antes que nosotros. Su intervención evitó la renuncia de dos desarrolladores clave y mejoró la retención de talento un 35%." 
            author="Alejandro Méndez"
            position="Director de Recursos Humanos"
            company="Global DevOps"
            position_bubble="right"
          />
        </div>
      </section>
      
      {/* CTA Section - Chatbot */}
      <section id="cta" className="section-container min-h-[60vh] flex flex-col items-center justify-center text-center relative">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="w-[800px] h-[800px] rounded-full bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 animate-spin-slow"></div>
          </div>
        </div>
        
        <h2 className="heading-xl mb-6 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-transparent bg-clip-text">
          ¿Listo para Optimizar tu Proyecto?
        </h2>
        
        <p className="paragraph mb-10 max-w-2xl">
          Incorpora a Alexia Foquita en tu equipo de desarrollo y descubre cómo una adorable asistente virtual puede transformar tu ambiente de trabajo. ¡La revolución ágil con ritmo! 🎵
        </p>
        
        <ChatbotUI />
        
        {/* Decorative stars */}
        <div className="absolute w-full h-full overflow-hidden pointer-events-none">
          <div className="star absolute top-1/4 left-1/4 text-yellow-300 animate-pulse-soft">✨</div>
          <div className="star absolute top-1/3 right-1/4 text-yellow-300 animate-pulse-soft">✨</div>
          <div className="star absolute bottom-1/3 left-1/3 text-yellow-300 animate-pulse-soft">✨</div>
          <div className="star absolute bottom-1/4 right-1/3 text-yellow-300 animate-pulse-soft">✨</div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-10 bg-white bg-opacity-30 backdrop-blur-sm mt-10">
        <div className="container mx-auto text-center">
          <p className="mb-2">© 2025 Crazy Maraca Inc. - Todos los derechos reservados</p>
          <p className="text-sm opacity-70">Alexia Foquita es una asistente virtual ficticia creada con amor, código y ritmo.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
