import { motion } from 'framer-motion'
import './index.css'

const bgImage = '/painting.png'

const services = [
  { name: 'Мужская стрижка', price: '1 500 ₽' },
  { name: 'Стрижка + борода', price: '2 300 ₽' },
  { name: 'Оформление бороды', price: '1 000 ₽' },
  { name: 'Королевское бритьё', price: '1 200 ₽' },
  { name: 'Камуфляж седины', price: '1 500 ₽' },
]

const team = [
  {
    name: 'Александр Волков',
    role: 'Основатель и старший барбер',
    exp: '12 лет опыта',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    desc: 'Мастер классических стрижек и королевского бритья'
  },
  {
    name: 'Дмитрий Орлов',
    role: 'Топ-барбер',
    exp: '8 лет опыта',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    desc: 'Специалист по fade-стрижкам и современным образам'
  },
  {
    name: 'Михаил Соколов',
    role: 'Барбер-стилист',
    exp: '6 лет опыта',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    desc: 'Эксперт по оформлению бороды и камуфляжу'
  },
  {
    name: 'Артём Князев',
    role: 'Барбер',
    exp: '5 лет опыта',
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face',
    desc: 'Мастер детских и подростковых стрижек'
  },
]

const gallery = [
  'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1621607512214-68297480165e?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&h=400&fit=crop',
]

const glassStyle = {
  background: 'rgba(0, 0, 0, 0.4)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: '0 25px 80px rgba(0, 0, 0, 0.5)',
}

// SVG иконка сабли с металлическим золотым эффектом (приглушённый)
const sabrePath = "M2015 1359 c-193 -134 -508 -271 -715 -313 -156 -31 -316 -46 -500 -46 -102 0 -209 3 -238 7 l-53 6 3 46 c2 38 6 46 22 46 11 0 21 6 24 13 2 6 -2 12 -10 12 -26 0 -56 -30 -62 -63 -13 -68 -20 -72 -152 -69 -135 3 -191 -10 -211 -49 -18 -33 -16 -53 6 -80 17 -21 22 -22 46 -11 23 11 26 16 20 42 -6 26 -3 31 18 39 14 6 75 7 137 4 l112 -6 14 -33 c8 -18 14 -42 14 -53 0 -21 27 -41 54 -41 25 0 19 18 -6 22 -20 3 -23 9 -23 43 l0 40 305 6 c343 7 455 18 615 59 270 68 538 223 655 379 69 92 59 92 -75 0z"

const SabreIcon = ({ style = {} }) => (
  <svg viewBox="0 0 225 225" preserveAspectRatio="xMidYMid meet" style={{ display: 'block', width: '100%', ...style }}>
    <defs>
      <linearGradient id="goldMetal" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#c4a035" />
        <stop offset="15%" stopColor="#a8882a" />
        <stop offset="30%" stopColor="#d4b042" />
        <stop offset="45%" stopColor="#8a7020" />
        <stop offset="55%" stopColor="#b89828" />
        <stop offset="70%" stopColor="#7a6518" />
        <stop offset="85%" stopColor="#a08525" />
        <stop offset="100%" stopColor="#6b5812" />
      </linearGradient>
      <linearGradient id="goldShine" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#e8d080" stopOpacity="0.4" />
        <stop offset="40%" stopColor="#c4a035" stopOpacity="0.2" />
        <stop offset="60%" stopColor="#8a7020" stopOpacity="0.1" />
        <stop offset="100%" stopColor="#5a4810" stopOpacity="0.3" />
      </linearGradient>
      <filter id="goldGlow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur" />
        <feFlood floodColor="#a08525" floodOpacity="0.4" result="color" />
        <feComposite in="color" in2="blur" operator="in" result="shadow" />
        <feMerge>
          <feMergeNode in="shadow" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g transform="translate(0,225) scale(0.1,-0.1)" filter="url(#goldGlow)">
      <path fill="url(#goldMetal)" stroke="none" d={sabrePath}/>
      <path fill="url(#goldShine)" stroke="none" d={sabrePath}/>
    </g>
  </svg>
)

// Компонент логотипа — сабля переплетается с буквами
// Над S, под A, над B, под R, над E
const Logo = ({ size = 'normal' }) => {
  const isLarge = size === 'large'
  const fontSize = isLarge ? 'clamp(55px, 10vw, 100px)' : '24px'
  const letterStyle = (aboveSabre) => ({
    position: 'relative',
    zIndex: aboveSabre ? 3 : 1,
    fontFamily: 'Playfair Display, serif',
    fontSize,
    fontWeight: 700,
    color: 'white',
    letterSpacing: '0.15em',
    textShadow: isLarge
      ? '0 4px 30px rgba(0,0,0,0.5), 0 2px 10px rgba(0,0,0,0.3)'
      : '0 2px 8px rgba(0,0,0,0.5)',
    display: 'inline-block',
  })
  // S=над, A=под, B=над, R=под, E=над
  const letters = [
    { char: 'S', above: true },
    { char: 'A', above: false },
    { char: 'B', above: true },
    { char: 'R', above: false },
    { char: 'E', above: true },
  ]
  return (
    <div style={{
      position: 'relative',
      display: 'inline-block',
      filter: isLarge
        ? 'drop-shadow(0 8px 25px rgba(0,0,0,0.6)) drop-shadow(0 2px 8px rgba(201,162,39,0.2))'
        : 'drop-shadow(0 3px 8px rgba(0,0,0,0.5))',
    }}>
      {/* Сабля — z-index 2, между буквами */}
      <div style={{
        position: 'absolute',
        left: '-5%',
        right: '-5%',
        top: '50%',
        transform: 'translateY(-50%) rotate(5deg)',
        zIndex: 2,
        pointerEvents: 'none',
      }}>
        <SabreIcon />
      </div>
      {/* Буквы с чередующимся z-index */}
      <div style={{ display: 'flex', position: 'relative' }}>
        {letters.map(({ char, above }, i) => (
          <span key={i} style={letterStyle(above)}>{char}</span>
        ))}
      </div>
    </div>
  )
}


// Стили для кнопок с анимациями
const buttonPrimaryStyle = {
  padding: '18px 45px',
  background: 'linear-gradient(145deg, #ddb832, #c9a227, #b8931f)',
  color: '#1a1410',
  fontSize: '16px',
  fontFamily: 'Cormorant Garamond, serif',
  fontWeight: 600,
  letterSpacing: '0.15em',
  textDecoration: 'none',
  borderRadius: '50px',
  boxShadow: '0 8px 25px rgba(201, 162, 39, 0.5), 0 4px 10px rgba(0,0,0,0.3), inset 0 1px 2px rgba(255,255,255,0.3)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  cursor: 'pointer',
  border: 'none',
  display: 'inline-block',
}

const buttonSecondaryStyle = {
  padding: '18px 45px',
  background: 'rgba(255,255,255,0.05)',
  color: 'white',
  fontSize: '16px',
  fontFamily: 'Cormorant Garamond, serif',
  fontWeight: 600,
  letterSpacing: '0.15em',
  textDecoration: 'none',
  borderRadius: '50px',
  border: '2px solid rgba(255,255,255,0.3)',
  boxShadow: '0 4px 15px rgba(0,0,0,0.2), inset 0 1px 2px rgba(255,255,255,0.1)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  cursor: 'pointer',
  display: 'inline-block',
}

function App() {
  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Фон - картина с затемнением */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
        }}
      >
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.45)' }} />
      </div>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          position: 'fixed',
          top: '20px',
          left: '25px',
          right: '25px',
          zIndex: 90,
          ...glassStyle,
          borderRadius: '20px',
          padding: '15px 25px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <a href="#" style={{ textDecoration: 'none' }}>
          <Logo />
        </a>
        <nav style={{ display: 'flex', gap: '5px' }}>
          {['Услуги', 'Команда', 'Галерея', 'Контакты'].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                color: 'rgba(255,255,255,0.7)',
                textDecoration: 'none',
                padding: '10px 20px',
                borderRadius: '10px',
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '17px',
                transition: 'all 0.3s',
              }}
              onMouseOver={e => { e.target.style.background = 'rgba(255,255,255,0.1)'; e.target.style.color = 'white' }}
              onMouseOut={e => { e.target.style.background = 'transparent'; e.target.style.color = 'rgba(255,255,255,0.7)' }}
            >
              {item}
            </a>
          ))}
        </nav>
        <motion.a
          href="#booking"
          whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(201, 162, 39, 0.6)' }}
          whileTap={{ scale: 0.98 }}
          style={{
            background: 'linear-gradient(145deg, #ddb832, #c9a227)',
            color: '#1a1410',
            padding: '12px 30px',
            borderRadius: '10px',
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '16px',
            fontWeight: 600,
            textDecoration: 'none',
            boxShadow: '0 4px 15px rgba(201, 162, 39, 0.4), inset 0 1px 2px rgba(255,255,255,0.3)',
            transition: 'all 0.3s',
          }}
        >
          Записаться
        </motion.a>
      </motion.header>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10, padding: '30px' }}>

        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          style={{ minHeight: 'calc(100vh - 60px)', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '60px' }}
        >
          <div style={{ ...glassStyle, borderRadius: '40px', padding: '70px 90px', maxWidth: '850px', textAlign: 'center' }}>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
              style={{ color: '#c9a227', fontSize: '14px', letterSpacing: '0.5em', textTransform: 'uppercase', marginBottom: '25px', fontFamily: 'Cormorant Garamond, serif' }}>
              Премиум барбершоп
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
              style={{ marginBottom: '15px', display: 'flex', justifyContent: 'center' }}>
              <Logo size="large" />
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', margin: '35px 0' }}>
              <span style={{ width: '70px', height: '2px', background: 'linear-gradient(to right, transparent, #c9a227)' }} />
              <span style={{ color: '#c9a227', fontSize: '28px' }}>✦</span>
              <span style={{ width: '70px', height: '2px', background: 'linear-gradient(to left, transparent, #c9a227)' }} />
            </motion.div>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
              style={{ fontSize: 'clamp(18px, 2.5vw, 28px)', fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', color: 'rgba(255,255,255,0.85)', marginBottom: '40px' }}>
              «Точность. Мастерство. Стиль.»
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4 }}
              style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <motion.a
                href="#booking"
                style={buttonPrimaryStyle}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 12px 35px rgba(201, 162, 39, 0.6), 0 6px 15px rgba(0,0,0,0.4), inset 0 1px 3px rgba(255,255,255,0.4)',
                  background: 'linear-gradient(145deg, #e8c33d, #d4ad2c, #c9a227)'
                }}
                whileTap={{ scale: 0.97 }}
              >
                ЗАПИСАТЬСЯ
              </motion.a>
              <motion.a
                href="#услуги"
                style={buttonSecondaryStyle}
                whileHover={{
                  scale: 1.05,
                  background: 'rgba(255,255,255,0.15)',
                  borderColor: 'rgba(255,255,255,0.5)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.3), inset 0 1px 3px rgba(255,255,255,0.2)'
                }}
                whileTap={{ scale: 0.97 }}
              >
                УСЛУГИ
              </motion.a>
            </motion.div>
          </div>
        </motion.section>

        {/* Services */}
        <motion.section id="услуги" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
          style={{ padding: '80px 0' }}>
          <div style={{ ...glassStyle, maxWidth: '750px', margin: '0 auto', borderRadius: '40px', padding: '50px 70px' }}>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(32px, 5vw, 48px)', fontFamily: 'Playfair Display, serif', color: 'white', marginBottom: '40px' }}>
              <span style={{ color: '#c9a227', fontSize: '13px', letterSpacing: '0.3em', display: 'block', marginBottom: '12px', fontFamily: 'Cormorant Garamond, serif' }}>НАШИ УСЛУГИ</span>
              Прайс-лист
            </h2>
            {services.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '22px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <span style={{ fontSize: 'clamp(16px, 2vw, 22px)', fontFamily: 'Cormorant Garamond, serif', color: 'rgba(255,255,255,0.9)' }}>{s.name}</span>
                <span style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', fontFamily: 'Playfair Display, serif', fontWeight: 600, color: '#c9a227' }}>{s.price}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Team */}
        <motion.section id="команда" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
          style={{ padding: '80px 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span style={{ color: '#c9a227', fontSize: '13px', letterSpacing: '0.3em', fontFamily: 'Cormorant Garamond, serif' }}>НАША КОМАНДА</span>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontFamily: 'Playfair Display, serif', color: 'white', marginTop: '10px' }}>Мастера своего дела</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px', maxWidth: '1200px', margin: '0 auto' }}>
            {team.map((person, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                whileHover={{ y: -5, boxShadow: '0 35px 100px rgba(0, 0, 0, 0.6)' }}
                style={{ ...glassStyle, borderRadius: '30px', padding: '30px', textAlign: 'center', transition: 'all 0.3s' }}>
                <div style={{ width: '140px', height: '140px', margin: '0 auto 20px', borderRadius: '50%', overflow: 'hidden', border: '3px solid #c9a227' }}>
                  <img src={person.img} alt={person.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', color: 'white', marginBottom: '5px' }}>{person.name}</h3>
                <p style={{ color: '#c9a227', fontFamily: 'Cormorant Garamond, serif', fontSize: '16px', marginBottom: '5px' }}>{person.role}</p>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Cormorant Garamond, serif', fontSize: '14px', marginBottom: '15px' }}>{person.exp}</p>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Cormorant Garamond, serif', fontSize: '15px', lineHeight: 1.5 }}>{person.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Gallery */}
        <motion.section id="галерея" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
          style={{ padding: '80px 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span style={{ color: '#c9a227', fontSize: '13px', letterSpacing: '0.3em', fontFamily: 'Cormorant Garamond, serif' }}>АТМОСФЕРА</span>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontFamily: 'Playfair Display, serif', color: 'white', marginTop: '10px' }}>Галерея</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', maxWidth: '1200px', margin: '0 auto' }}>
            {gallery.map((img, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.03 }}
                style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', aspectRatio: '3/2' }}>
                <img src={img} alt={`Галерея ${i+1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                  onMouseOver={e => e.target.style.transform = 'scale(1.1)'}
                  onMouseOut={e => e.target.style.transform = 'scale(1)'} />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Booking */}
        <motion.section id="booking" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
          style={{ padding: '80px 0' }}>
          <div style={{ ...glassStyle, maxWidth: '550px', margin: '0 auto', borderRadius: '40px', padding: '50px 60px' }}>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(32px, 5vw, 48px)', fontFamily: 'Playfair Display, serif', color: 'white', marginBottom: '35px' }}>
              <span style={{ color: '#c9a227', fontSize: '13px', letterSpacing: '0.3em', display: 'block', marginBottom: '12px', fontFamily: 'Cormorant Garamond, serif' }}>ОНЛАЙН</span>
              Запись
            </h2>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <input type="text" placeholder="Ваше имя" style={{ padding: '18px 22px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '15px', color: 'white', fontSize: '17px', fontFamily: 'Cormorant Garamond, serif', outline: 'none', transition: 'all 0.3s' }}
                onFocus={e => { e.target.style.borderColor = '#c9a227'; e.target.style.boxShadow = '0 0 15px rgba(201, 162, 39, 0.3)' }}
                onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.15)'; e.target.style.boxShadow = 'none' }} />
              <input type="tel" placeholder="+7 (___) ___-__-__" style={{ padding: '18px 22px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '15px', color: 'white', fontSize: '17px', fontFamily: 'Cormorant Garamond, serif', outline: 'none', transition: 'all 0.3s' }}
                onFocus={e => { e.target.style.borderColor = '#c9a227'; e.target.style.boxShadow = '0 0 15px rgba(201, 162, 39, 0.3)' }}
                onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.15)'; e.target.style.boxShadow = 'none' }} />
              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 10px 30px rgba(201, 162, 39, 0.5), inset 0 1px 3px rgba(255,255,255,0.3)',
                  background: 'linear-gradient(145deg, #e8c33d, #d4ad2c)'
                }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: '20px',
                  background: 'linear-gradient(145deg, #ddb832, #c9a227)',
                  border: 'none',
                  borderRadius: '15px',
                  color: '#1a1410',
                  fontSize: '17px',
                  fontFamily: 'Cormorant Garamond, serif',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  cursor: 'pointer',
                  boxShadow: '0 6px 20px rgba(201, 162, 39, 0.4), inset 0 1px 2px rgba(255,255,255,0.3)',
                  transition: 'all 0.3s'
                }}>
                ЗАПИСАТЬСЯ
              </motion.button>
            </form>
          </div>
        </motion.section>

        {/* Contacts */}
        <motion.section id="контакты" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
          style={{ padding: '60px 0' }}>
          <div style={{ ...glassStyle, maxWidth: '900px', margin: '0 auto', borderRadius: '30px', padding: '40px 50px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', textAlign: 'center' }}>
              {[
                { icon: '📍', label: 'Адрес', value: 'ул. Тверская, 15', sub: 'м. Тверская' },
                { icon: '📞', label: 'Телефон', value: '+7 (900) 123-45-67', sub: 'Ежедневно' },
                { icon: '🕐', label: 'Время', value: '10:00 – 22:00', sub: 'Без выходных' },
              ].map((c, i) => (
                <div key={i}>
                  <span style={{ fontSize: '32px', display: 'block', marginBottom: '10px' }}>{c.icon}</span>
                  <p style={{ color: '#c9a227', fontSize: '12px', letterSpacing: '0.2em', fontFamily: 'Cormorant Garamond, serif', marginBottom: '5px' }}>{c.label}</p>
                  <p style={{ color: 'white', fontSize: '18px', fontFamily: 'Playfair Display, serif', marginBottom: '3px' }}>{c.value}</p>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', fontFamily: 'Cormorant Garamond, serif' }}>{c.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer style={{ textAlign: 'center', padding: '40px 0' }}>
          <div style={{ ...glassStyle, display: 'inline-block', borderRadius: '50px', padding: '18px 45px' }}>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Cormorant Garamond, serif', fontSize: '15px' }}>
              © 2024 <span style={{ color: '#c9a227' }}>SABRE</span> — Все права защищены
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
