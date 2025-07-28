import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Users, Award, Shield, Heart, Star, ChevronRight, Calendar, MessageCircle, CheckCircle, Baby, Stethoscope, Activity, Mail, User, FileText, AlertCircle, X } from 'lucide-react';

interface FormData {
  nombre: string;
  correo: string;
  edad: string;
  problema: string;
  servicios: string;
}

function App() {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    correo: '',
    edad: '',
    problema: '',
    servicios: ''
  });
  
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const validateForm = () => {
    if (!formData.nombre.trim()) return 'Por favor ingresa tu nombre completo';
    if (!formData.correo.trim() || !formData.correo.includes('@')) return 'Por favor ingresa un correo válido';
    if (!formData.edad.trim()) return 'Por favor indica tu edad';
    if (!formData.servicios.trim()) return 'Por favor selecciona el servicio que buscas';
    if (!formData.problema.trim()) return 'Por favor describe brevemente tu consulta';
    
    const edad = parseInt(formData.edad);
    if (isNaN(edad) || edad < 18 || edad > 28) {
      return 'Nuestros servicios están especialmente diseñados para mujeres entre 18 y 28 años. Para otras edades, contáctanos directamente.';
    }
    
    return null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const error = validateForm();
    if (error) {
      setShowError(error);
      setTimeout(() => setShowError(''), 5000);
      return;
    }

    const mensaje = `🌸 *SOLICITUD DE CITA MÉDICA* 🌸

Hola Dra. Yaritza, me gustaría agendar una cita para atención ginecológica.

👤 *DATOS PERSONALES:*
• Nombre: ${formData.nombre}
• Correo: ${formData.correo}
• Edad: ${formData.edad} años

🩺 *INFORMACIÓN MÉDICA:*
• Servicio solicitado: ${formData.servicios}
• Consulta/Problema: ${formData.problema}

📍 Ubicación: La Cisterna, Santiago

Quedo atenta a su respuesta para coordinar la cita. ¡Gracias!`;

    const whatsappUrl = `https://wa.me/56952399709?text=${encodeURIComponent(mensaje)}`;
    window.open(whatsappUrl, '_blank');
    
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
    
    setFormData({
      nombre: '',
      correo: '',
      edad: '',
      problema: '',
      servicios: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const openWhatsApp = (customMessage?: string) => {
    const mensaje = customMessage || "🌸 Hola Dra. Yaritza, me gustaría obtener más información sobre sus servicios de ginecología. Estoy en La Cisterna, Santiago y me interesa agendar una consulta. ¡Gracias!";
    const whatsappUrl = `https://wa.me/56952399709?text=${encodeURIComponent(mensaje)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Dra. Yaritza Núñez</h1>
                <p className="text-sm text-gray-600">Matrona Ginecóloga</p>
              </div>
            </div>
            <button 
              onClick={() => openWhatsApp()}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 hover:shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-blue-50 overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-100/20 to-blue-100/20"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-pink-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-300/20 rounded-full blur-lg animate-pulse delay-500"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-6">
                <div className="inline-flex items-center bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium animate-bounce">
                  <Heart className="w-4 h-4 mr-2" />
                  Tu salud íntima también importa
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Atención Ginecológica
                  <span className="text-pink-500 block">Profesional en La Cisterna</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                  Acompañando tu salud íntima con respeto, confianza y profesionalismo. Servicios especializados para mujeres jóvenes que buscan llevar su sexualidad de manera tranquila y segura.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => openWhatsApp("🌸 Hola Dra. Yaritza, vi su página web y me gustaría agendar una cita. Soy de La Cisterna y necesito atención ginecológica. ¡Gracias!")}
                  className="group bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Agendar Cita Ahora
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <a 
                  href="#servicios" 
                  className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center hover:shadow-lg"
                >
                  Ver Servicios
                </a>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div className="text-center group">
                  <div className="text-3xl font-bold text-pink-500 group-hover:scale-110 transition-transform">500+</div>
                  <div className="text-sm text-gray-600">Pacientes Atendidas</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-blue-500 group-hover:scale-110 transition-transform">5+</div>
                  <div className="text-sm text-gray-600">Años de Experiencia</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-green-500 group-hover:scale-110 transition-transform">98%</div>
                  <div className="text-sm text-gray-600">Satisfacción</div>
                </div>
              </div>
            </div>
            
            {/* Image */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-pink-100 to-blue-100 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Consulta ginecológica profesional"
                  className="w-full h-96 object-cover rounded-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg animate-pulse">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                    <span className="text-sm font-medium text-gray-700">Disponible Ahora</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Servicios Especializados</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos atención integral en ginecología y obstetricia con enfoque personalizado para mujeres jóvenes que buscan cuidar su salud íntima.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Métodos Anticonceptivos",
                description: "Inicio o cambios de métodos anticonceptivos seguros y personalizados según tu estilo de vida.",
                color: "pink",
                features: ["Píldoras anticonceptivas", "DIU", "Implantes", "Inyecciones"]
              },
              {
                icon: <Stethoscope className="w-8 h-8" />,
                title: "Control Ginecológico",
                description: "Consultas ginecológicas regulares y atención preconcepcional para planificar tu maternidad.",
                color: "blue",
                features: ["Consulta ginecológica", "Control preconcepcional", "Revisiones periódicas"]
              },
              {
                icon: <Activity className="w-8 h-8" />,
                title: "Climaterio y Menopausia",
                description: "Control y consejería especializada durante cambios hormonales y menopausia temprana.",
                color: "green",
                features: ["Control hormonal", "Consejería especializada", "Tratamiento síntomas"]
              },
              {
                icon: <Baby className="w-8 h-8" />,
                title: "Lactancia Materna",
                description: "Consejería y apoyo profesional para una lactancia materna exitosa y sin complicaciones.",
                color: "purple",
                features: ["Técnicas de lactancia", "Solución problemas", "Apoyo emocional"]
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Exámenes Preventivos",
                description: "PAP, VPH y test rápido de ITS para prevención y detección temprana de enfermedades.",
                color: "red",
                features: ["Toma de PAP-VPH", "Test rápido ITS", "Solicitud exámenes"]
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Tratamientos Especiales",
                description: "Plasmapen para verrugas y condilomas, plasma rico en plaquetas y otros tratamientos.",
                color: "indigo",
                features: ["Plasmapen", "Plasma rico plaquetas", "Tratamientos menores"]
              }
            ].map((service, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-pink-200 transform hover:-translate-y-2">
                <div className={`w-16 h-16 bg-${service.color}-100 text-${service.color}-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">¿Por qué elegir nuestra atención?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Como Matrona Yaritza Núñez, me especializo en brindar atención ginecológica integral con un enfoque humano, cercano y profesional para mujeres jóvenes.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: <Award className="w-6 h-6" />,
                    title: "Experiencia Profesional",
                    description: "Más de 5 años de experiencia especializada en ginecología y obstetricia"
                  },
                  {
                    icon: <Users className="w-6 h-6" />,
                    title: "Atención Personalizada",
                    description: "Enfoque individual y cercano, especialmente para mujeres de 18-28 años"
                  },
                  {
                    icon: <Shield className="w-6 h-6" />,
                    title: "Ambiente de Confianza",
                    description: "Consulta en ambiente seguro y privado para tu comodidad y tranquilidad"
                  },
                  {
                    icon: <Clock className="w-6 h-6" />,
                    title: "Horarios Flexibles",
                    description: "Martes 8:00-12:30 y Jueves 14:00-19:00, adaptándonos a tu rutina"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="w-12 h-12 bg-pink-100 text-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Atención médica profesional"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contacto" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Agenda tu Cita</h2>
              <p className="text-xl text-gray-600">
                Complete el formulario y nos pondremos en contacto contigo vía WhatsApp para confirmar tu cita.
              </p>
            </div>
            
            {/* Success Message */}
            {showSuccess && (
              <div className="mb-8 p-4 bg-green-100 border border-green-300 rounded-xl flex items-center justify-between animate-fade-in">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-green-700 font-medium">¡Formulario enviado! Te contactaremos pronto por WhatsApp.</span>
                </div>
                <button onClick={() => setShowSuccess(false)} className="text-green-500 hover:text-green-700">
                  <X className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* Error Message */}
            {showError && (
              <div className="mb-8 p-4 bg-red-100 border border-red-300 rounded-xl flex items-center justify-between animate-fade-in">
                <div className="flex items-center">
                  <AlertCircle className="w-6 h-6 text-red-500 mr-3" />
                  <span className="text-red-700 font-medium">{showError}</span>
                </div>
                <button onClick={() => setShowError('')} className="text-red-500 hover:text-red-700">
                  <X className="w-5 h-5" />
                </button>
              </div>
            )}
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <div className="bg-gradient-to-br from-pink-50 to-blue-50 p-8 rounded-2xl shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                      placeholder="Tu nombre completo"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Correo electrónico *
                    </label>
                    <input
                      type="email"
                      name="correo"
                      value={formData.correo}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                      placeholder="tu@correo.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Edad *
                    </label>
                    <input
                      type="number"
                      name="edad"
                      value={formData.edad}
                      onChange={handleInputChange}
                      min="18"
                      max="28"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                      placeholder="Tu edad (18-28 años)"
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">Nuestros servicios están especializados para mujeres de 18-28 años</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Stethoscope className="w-4 h-4 inline mr-2" />
                      ¿Qué servicio buscas? *
                    </label>
                    <select
                      name="servicios"
                      value={formData.servicios}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                      required
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="Métodos Anticonceptivos">Métodos Anticonceptivos</option>
                      <option value="Control Ginecológico">Control Ginecológico</option>
                      <option value="Climaterio y Menopausia">Climaterio y Menopausia</option>
                      <option value="Lactancia Materna">Lactancia Materna</option>
                      <option value="Exámenes Preventivos">Exámenes Preventivos (PAP, VPH, ITS)</option>
                      <option value="Tratamientos Especiales">Tratamientos Especiales (Plasmapen)</option>
                      <option value="Consulta General">Consulta General</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <FileText className="w-4 h-4 inline mr-2" />
                      Describe tu consulta o problema *
                    </label>
                    <textarea
                      name="problema"
                      value={formData.problema}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Cuéntanos brevemente sobre tu consulta o qué te gustaría tratar en la cita..."
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Enviar y Agendar por WhatsApp</span>
                  </button>
                </form>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                      <MapPin className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Ubicación</h4>
                        <p className="text-gray-600">Gran Avenida José Miguel Carrera 8423, oficina 23</p>
                        <p className="text-gray-600">La Cisterna, Santiago, Chile</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                      <Clock className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Horarios de Atención</h4>
                        <p className="text-gray-600">• Martes: 8:00 AM - 12:30 PM</p>
                        <p className="text-gray-600">• Jueves: 2:00 PM - 7:00 PM</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                      <Phone className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                        <p className="text-gray-600">+56 9 5239 9709</p>
                        <button
                          onClick={() => openWhatsApp()}
                          className="text-green-500 hover:text-green-600 font-medium text-sm mt-1"
                        >
                          Escribir ahora →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Testimonials */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Lo que dicen nuestras pacientes</h3>
                  <div className="space-y-4">
                    {[
                      {
                        text: "Excelente atención, muy profesional y me hizo sentir cómoda desde el primer momento. Recomendada 100%.",
                        author: "María José, 24 años",
                        rating: 5
                      },
                      {
                        text: "La Dra. Yaritza es súper cercana y resuelve todas las dudas. Me ayudó mucho con mi método anticonceptivo.",
                        author: "Camila, 22 años", 
                        rating: 5
                      },
                      {
                        text: "Muy buena ubicación en La Cisterna y los horarios se adaptan perfecto a mi trabajo. Muy recomendada.",
                        author: "Javiera, 26 años",
                        rating: 5
                      }
                    ].map((testimonial, index) => (
                      <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                        <div className="flex mb-3">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-gray-600 italic mb-3">"{testimonial.text}"</p>
                        <p className="text-sm font-medium text-gray-900">— {testimonial.author}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Dra. Yaritza Núñez</h3>
                  <p className="text-gray-400">Matrona Ginecóloga</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Atención ginecológica profesional y cercana para mujeres jóvenes en La Cisterna, Santiago.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-400">
                <li>• Métodos Anticonceptivos</li>
                <li>• Control Ginecológico</li>
                <li>• Exámenes Preventivos</li>
                <li>• Lactancia Materna</li>
                <li>• Tratamientos Especiales</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <div className="space-y-3 text-gray-400">
                <p className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                  La Cisterna, Santiago
                </p>
                <p className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                  +56 9 5239 9709
                </p>
                <button
                  onClick={() => openWhatsApp()}
                  className="flex items-center text-green-400 hover:text-green-300 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Dra. Yaritza Núñez - Matrona Ginecóloga. Todos los derechos reservados.</p>
            <p className="text-sm mt-2">Atención especializada para mujeres de 18-28 años en La Cisterna, Santiago</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button
        onClick={() => openWhatsApp("🌸 Hola Dra. Yaritza, estoy interesada en agendar una cita. Soy de La Cisterna y me gustaría más información sobre sus servicios. ¡Gracias!")}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 z-50 animate-bounce hover:animate-none group"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
        <div className="absolute -top-12 -left-20 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          ¿Necesitas ayuda?
        </div>
      </button>
    </div>
  );
}

export default App;