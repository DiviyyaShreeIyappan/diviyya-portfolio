'use client'
import { useState, useEffect, useRef } from 'react'
import styles from './page.module.css'

const CircuitDivider = ({ variant = 1 }) => (
  <svg className={styles.circuitDivider} viewBox="0 0 400 20" xmlns="http://www.w3.org/2000/svg">
    {variant === 1 && <>
      <line x1="0" y1="10" x2="80" y2="10" stroke="#FFB34744" strokeWidth="0.5"/>
      <circle cx="80" cy="10" r="2" fill="#FFB347" opacity="0.6"/>
      <line x1="80" y1="10" x2="80" y2="4" stroke="#FFB34744" strokeWidth="0.5"/>
      <line x1="80" y1="4" x2="160" y2="4" stroke="#00D4FF44" strokeWidth="0.5"/>
      <circle cx="160" cy="4" r="2" fill="#00D4FF" opacity="0.6"/>
      <line x1="160" y1="4" x2="160" y2="10" stroke="#00D4FF44" strokeWidth="0.5"/>
      <line x1="160" y1="10" x2="240" y2="10" stroke="#FFB34744" strokeWidth="0.5"/>
      <circle cx="240" cy="10" r="2" fill="#FF3CAC" opacity="0.6"/>
      <line x1="240" y1="10" x2="240" y2="16" stroke="#FF3CAC44" strokeWidth="0.5"/>
      <line x1="240" y1="16" x2="320" y2="16" stroke="#FF3CAC44" strokeWidth="0.5"/>
      <circle cx="320" cy="16" r="2" fill="#FFB347" opacity="0.6"/>
      <line x1="320" y1="16" x2="320" y2="10" stroke="#FFB34744" strokeWidth="0.5"/>
      <line x1="320" y1="10" x2="400" y2="10" stroke="#FFB34744" strokeWidth="0.5"/>
    </>}
    {variant === 2 && <>
      <line x1="0" y1="10" x2="60" y2="10" stroke="#00D4FF44" strokeWidth="0.5"/>
      <circle cx="60" cy="10" r="2" fill="#00D4FF" opacity="0.6"/>
      <line x1="60" y1="10" x2="60" y2="16" stroke="#00D4FF44" strokeWidth="0.5"/>
      <line x1="60" y1="16" x2="140" y2="16" stroke="#FF3CAC44" strokeWidth="0.5"/>
      <circle cx="140" cy="16" r="2" fill="#FF3CAC" opacity="0.6"/>
      <line x1="140" y1="16" x2="200" y2="16" stroke="#FF3CAC44" strokeWidth="0.5"/>
      <circle cx="200" cy="16" r="3" fill="none" stroke="#FF3CAC" strokeWidth="0.5" opacity="0.6"/>
      <line x1="200" y1="16" x2="260" y2="16" stroke="#FF3CAC44" strokeWidth="0.5"/>
      <circle cx="260" cy="16" r="2" fill="#FFB347" opacity="0.6"/>
      <line x1="260" y1="16" x2="260" y2="10" stroke="#FFB34744" strokeWidth="0.5"/>
      <line x1="260" y1="10" x2="340" y2="10" stroke="#FFB34744" strokeWidth="0.5"/>
      <circle cx="340" cy="10" r="2" fill="#00D4FF" opacity="0.6"/>
      <line x1="340" y1="10" x2="400" y2="10" stroke="#00D4FF44" strokeWidth="0.5"/>
    </>}
    {variant === 3 && <>
      <line x1="0" y1="10" x2="100" y2="10" stroke="#FF3CAC44" strokeWidth="0.5"/>
      <circle cx="100" cy="10" r="2" fill="#FF3CAC" opacity="0.6"/>
      <line x1="100" y1="10" x2="100" y2="4" stroke="#FF3CAC44" strokeWidth="0.5"/>
      <line x1="100" y1="4" x2="180" y2="4" stroke="#00D4FF44" strokeWidth="0.5"/>
      <circle cx="140" cy="4" r="3" fill="none" stroke="#00D4FF" strokeWidth="0.5" opacity="0.5"/>
      <circle cx="180" cy="4" r="2" fill="#00D4FF" opacity="0.6"/>
      <line x1="180" y1="4" x2="180" y2="10" stroke="#00D4FF44" strokeWidth="0.5"/>
      <line x1="180" y1="10" x2="280" y2="10" stroke="#FFB34744" strokeWidth="0.5"/>
      <circle cx="280" cy="10" r="2" fill="#FFB347" opacity="0.6"/>
      <line x1="280" y1="10" x2="280" y2="16" stroke="#FFB34744" strokeWidth="0.5"/>
      <line x1="280" y1="16" x2="400" y2="16" stroke="#FF3CAC44" strokeWidth="0.5"/>
    </>}
  </svg>
)

const projects = [
  {
    id: 'server-01',
    status: 'online',
    title: 'Meeting Room Booking System',
    desc: 'Microservices architecture with Kafka event-driven communication, distributed locking to prevent double bookings under contention',
    tech: ['Java', 'Kafka', 'Spring Boot', 'Docker', 'Kubernetes', 'JWT'],
    tags: ['4 microservices', 'lock-confirm-expiry', 'resilience tested'],
    github: 'https://github.com/Ritika-91/Distributedsystem_group_Project.git',
    metrics: [
      { label: 'SERVICES', value: 80 },
      { label: 'RESILIENCE', value: 90 },
      { label: 'COVERAGE', value: 70 },
    ]
  },
  {
    id: 'server-02',
    status: 'online',
    title: 'Dublin Bikes',
    desc: 'Fullstack app with ML integration, built across 4 agile sprints with a team of 4. Frontend, backend and ML in parallel',
    tech: ['Python', 'JavaScript', 'Scrum', 'ML'],
    tags: ['4 sprints', 'SUS score ~70', 'team of 4'],
    github: 'https://github.com/dsmnov/COMP30830-GROUP-PROJECT-GROUP-12.git',
    metrics: [
      { label: 'USABILITY', value: 70 },
      { label: 'ML ACCURACY', value: 75 },
      { label: 'SPRINTS', value: 100 },
    ]
  },
  {
    id: 'server-03',
    status: 'online',
    title: 'Manhattan Muse Research Project',
    desc: 'Frontend lead in a team of 6. Map-based web app with Mapbox, API integration and data visualization from a live backend',
    tech: ['Next.js', 'React', 'Mapbox', 'REST APIs'],
    tags: ['frontend lead', 'team of 6', 'live data'],
    github: 'https://github.com/dharnesh13600/COMP47360-G1-Reseach_Practicum.git',
    metrics: [
      { label: 'UI QUALITY', value: 85 },
      { label: 'API INTEGRATION', value: 90 },
      { label: 'TEAM SIZE', value: 60 },
    ]
  },
  {
    id: 'server-04',
    status: 'building',
    title: 'ShiftSync',
    desc: 'Detects real-time scheduling conflicts across two independent manager nodes, resolves them via an AI agent using department priority and rolling fairness scores',
    tech: ['Java', 'PostgreSQL', 'Kafka', 'Spring Boot', 'AI agent'],
    tags: ['2 manager nodes', '3-tier unavailability', '30-min escalation'],
    github: 'https://github.com/DiviyyaShreeIyappan/shiftsync.git',
    metrics: [
      { label: 'BACKEND', value: 75 },
      { label: 'AI AGENT', value: 50 },
      { label: 'FRONTEND', value: 20 },
    ]
  }
]

const n = projects.length

const CardContent = ({ project, index }) => (
  <div className={styles.tower}>
    <span className={styles.cornerTL}/>
    <span className={styles.cornerTR}/>
    <span className={styles.cornerBL}/>
    <span className={styles.cornerBR}/>
    <div className={styles.rackPanel}>
      <div className={styles.rackLights}>
        <span className={styles.lightGreen}></span>
        <span className={styles.lightGreen}></span>
        <span className={styles.lightAmber}></span>
        <span className={styles.lightOff}></span>
        <span className={styles.lightGreen}></span>
        <span className={styles.lightOff}></span>
      </div>
      <div className={styles.rackUnit}>U{index + 1}</div>
    </div>
    <div className={styles.cardContent}>
      <div className={styles.cardHeader}>
        <span className={styles.serverId}>{project.id}</span>
        <span className={project.status === 'online' ? styles.online : styles.building}>
          ● {project.status}
        </span>
      </div>
      <CircuitDivider variant={1} />
      <div className={styles.cardBody}>
        <h2 className={styles.title}>{project.title}</h2>
        <p className={styles.desc}>{project.desc}</p>
      </div>
      <CircuitDivider variant={2} />
      <div className={styles.metrics}>
        {project.metrics.map(m => (
          <div key={m.label} className={styles.metricRow}>
            <span className={styles.metricLabel}>{m.label}</span>
            <div className={styles.metricBarBg}>
              <div className={styles.metricBarFill} style={{ width: `${m.value}%` }}/>
            </div>
            <span className={styles.metricValue}>{m.value}%</span>
          </div>
        ))}
      </div>
      <CircuitDivider variant={3} />
      <div className={styles.cardTech}>
        {project.tech.map(t => (
          <span key={t} className={styles.tag}>{t}</span>
        ))}
      </div>
      <CircuitDivider variant={1} />
      <div className={styles.cardFooter}>
        <div className={styles.footerTags}>
          {project.tags.map(t => (
            <span key={t} className={styles.footerTag}>{t}</span>
          ))}
        </div>
        {project.github
          ? <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.github}>GitHub</a>
          : <span className={styles.inProgress}>in progress</span>
        }
      </div>
    </div>
  </div>
)

export default function ProjectsPage() {
  const [current, setCurrent] = useState(0)
  const pausedRef = useRef(false)

  useEffect(() => {
    const interval = setInterval(() => {
      if (!pausedRef.current) {
        setCurrent(i => i + 1)
      }
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  const getPosition = (projectIndex) => {
    const active = ((current % n) + n) % n
    const diff = (projectIndex - active + n) % n
    if (diff === 0) return 'center'
    if (diff === 1) return 'right'
    if (diff === 2) return 'farRight'
    if (diff === n - 1) return 'left'
    if (diff === n - 2) return 'farLeft'
    return 'hidden'
  }

  const realIndex = ((current % n) + n) % n

  return (
    <section
      className={styles.projectsSection}
      onMouseEnter={() => { pausedRef.current = true }}
      onMouseLeave={() => { pausedRef.current = false }}
    >
      {/* Mobile stack — shown only on ≤425px via CSS */}
      <div className={styles.mobileStack}>
        {projects.map((project, index) => (
          <div key={project.id} className={styles.mobileCard}>
            <CardContent project={project} index={index} />
          </div>
        ))}
      </div>

      {/* Carousel — hidden on ≤425px via CSS */}
      <div className={styles.stage}>
        {projects.map((project, index) => {
          const position = getPosition(index)
          return (
            <div
              key={project.id}
              className={`${styles.towerWrapper} ${styles[position]}`}
              onClick={() => {
                if (position !== 'center') {
                  const active = ((current % n) + n) % n
                  const diff = (index - active + n) % n
                  setCurrent(i => i + diff)
                }
              }}
            >
              <CardContent project={project} index={index} />
            </div>
          )
        })}
      </div>

      <div className={styles.dots}>
        {projects.map((_, i) => (
          <span
            key={i}
            className={i === realIndex ? styles.dotActive : styles.dot}
            onClick={() => {
              const active = ((current % n) + n) % n
              const diff = (i - active + n) % n
              setCurrent(c => c + diff)
            }}
          />
        ))}
      </div>
    </section>
  )
}