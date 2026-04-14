export interface Project {
  id: string
  title: string
  shortDesc: string
  techStack: string[]
  githubUrl: string
  demoUrl?: string
  overview: string
  features: string[]
  challenges: string[]
}

export const projects: Project[] = [
  {
    id: 'georisk',
    title: 'Go Job Queue',
    shortDesc: 'Fault-Tolerant Background Processing System. Designed and implemented a Redis-backed asynchronous job queue system in Go for reliable background task processing. Built a producer-consumer architecture with concurrent worker pools using goroutines and implemented retry and failure recovery mechanisms.',
    techStack: ['Go', 'Redis', 'REST API'],
    githubUrl: 'https://github.com/abhinavpaste/go-job-queue',
    overview: 'Designed and implemented a Redis-backed asynchronous job queue system in Go for reliable background task processing. Built a producer-consumer architecture with concurrent worker pools using goroutines.',
    features: [
      'Redis-backed async job queue',
      'Producer-consumer architecture',
      'Concurrent worker pools using goroutines',
      'Retry and failure recovery mechanisms',
      'REST API for job submission and status',
    ],
    challenges: [
      'Handling concurrent access to Redis without race conditions',
      'Implementing reliable retry logic with exponential backoff',
      'Ensuring fault tolerance when workers crash mid-job',
    ],
  },
  {
    id: 'navsh',
    title: 'navsh — POSIX Shell for Linux',
    shortDesc: 'Built a POSIX-compliant Unix shell from scratch in C using low-level system calls — fork, execvp, waitpid, pipe, dup2, and sigaction. Implemented foreground/background job control with terminal ownership via tcsetpgrp, correct signal propagation to child processes, and zombie process prevention via SIGCHLD.',
    techStack: ['C', 'POSIX', 'Linux'],
    githubUrl: 'https://github.com/abhinavpaste/c-shell',
    overview: 'Built a POSIX-compliant Unix shell from scratch in C using low-level system calls — fork, execvp, waitpid, pipe, dup2, and sigaction. Implements foreground/background job control.',
    features: [
      'fork/execvp/waitpid for process management',
      'Pipe support via pipe() and dup2()',
      'Signal handling with sigaction (SIGINT, SIGTSTP, SIGCHLD)',
      'Foreground/background job control via tcsetpgrp',
      'Zombie process prevention via SIGCHLD',
      'Dynamic prompt via getcwd',
    ],
    challenges: [
      'Correctly propagating signals to child process groups',
      'Preventing zombie processes with SIGCHLD handler',
      'Managing terminal ownership during job control',
    ],
  },
  {
    id: 'crev',
    title: 'crev — Lightweight Code Review Tool',
    shortDesc: 'Built a lightweight code review tool in Go using net/http, PostgreSQL, JWT auth and bcrypt. Implements a full REST API for snippet submission and inline commenting. Designed to replace heavier tools for small teams.',
    techStack: ['Go', 'PostgreSQL', 'REST API', 'JWT'],
    githubUrl: 'https://github.com/abhinavpaste/crev',
    overview: 'Built a lightweight code review tool in Go using net/http, PostgreSQL, JWT auth and bcrypt. Implements a full REST API for snippet submission and inline line-level commenting.',
    features: [
      'JWT authentication with bcrypt password hashing',
      'Snippet submission and storage in PostgreSQL',
      'Line-level inline comments on code snippets',
      'Full REST API tested with Postman',
      'Built with net/http (no frameworks) to demonstrate fundamentals',
    ],
    challenges: [
      'Implementing JWT middleware from scratch without Gin',
      'Designing the schema for line-level comments',
      'Managing PostgreSQL connections with database/sql and lib/pq',
    ],
  },
  {
    id: 'portfolio',
    title: 'Win98 Portfolio',
    shortDesc: 'This portfolio website — built with React, TypeScript, Vite and Styled Components. Designed to look and feel like Windows 98, complete with draggable windows, a taskbar, start menu, desktop icons, video wallpaper and click sound effects.',
    techStack: ['React', 'TypeScript', 'Vite', 'Styled Components'],
    githubUrl: 'https://github.com/abhinavpaste/portfolio',
    overview: 'A portfolio website built to look and feel exactly like Windows 98. Features draggable windows, a taskbar with start menu, desktop icons, video wallpaper, click sound effects and a DOS-style boot sequence.',
    features: [
      'Draggable windows with z-index management',
      'DOS-style boot sequence animation',
      'Taskbar with start menu and window buttons',
      'Desktop icons with single click actions',
      'Video wallpaper background',
      'Win98 authentic styled components',
      'Clock window with live time',
    ],
    challenges: [
      'Managing global window state across components',
      'Implementing authentic Win98 beveled border styles',
      'Making the boot sequence feel realistic',
    ],
  },
]