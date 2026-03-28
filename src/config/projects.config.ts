export interface Project {
  id: string
  title: string
  shortDesc: string
  techStack: string[]
  githubUrl: string
}

export const projects: Project[] = [
  {
    id: 'georisk',
    title: 'Go Job Queue',
    shortDesc: 'Fault-Tolerant Background Processing System. Designed and implemented a Redis-backed asynchronous job queue system in Go for reliable background task processing. Built a producer-consumer architecture with concurrent worker pools using goroutines and implemented retry and failure recovery mechanisms.',
    techStack: ['Go', 'Redis', 'REST API'],
    githubUrl: 'https://github.com/abhinavpaste/go-job-queue',
  },
  {
    id: 'navsh',
    title: 'navsh — POSIX Shell for Linux',
    shortDesc: 'Built a POSIX-compliant Unix shell from scratch in C using low-level system calls — fork, execvp, waitpid, pipe, dup2, and sigaction. Implemented foreground/background job control with terminal ownership via tcsetpgrp, correct signal propagation to child processes, and zombie process prevention via SIGCHLD.',
    techStack: ['C', 'POSIX', 'Linux'],
    githubUrl: 'https://github.com/abhinavpaste/navsh',
  },
  {
    id: 'portfolio',
    title: 'Win98 Portfolio',
    shortDesc: 'This portfolio website — built with React, TypeScript, Vite and Styled Components. Designed to look and feel like Windows 98, complete with draggable windows, a taskbar, start menu, desktop icons, video wallpaper and click sound effects.',
    techStack: ['React', 'TypeScript', 'Vite', 'Styled Components'],
    githubUrl: 'https://github.com/abhinavpaste/portfolio',
  },
]