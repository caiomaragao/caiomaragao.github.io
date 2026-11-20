'use strict';

/**
 * Dados estruturados do portfólio de Caio Machado Aragão.
 * Atualize o campo perfil.links.email para ativar o botão de e-mail diretamente como mailto:.
 */
const PORTFOLIO_DATA = {
  perfil: {
    nome: 'Caio Machado Aragão',
    titulo: 'Design Engineer | Engenharia de Software & Design Gráfico',
    localizacao: 'Brasília, DF, Brasil',
    links: {
      portfolio: 'https://caiomaragao.github.io/',
      github: 'https://github.com/caiomaragao',
      behance: 'https://www.behance.net/caiomachado32',
      linkedin: 'https://www.linkedin.com/in/caio-machado-arag%C3%A3o-378019325/',
      email: 'caiomaragao@gmail.com'
    }
  },
  projetos: {
    'plataforma-maes-solo': {
      nome: 'Plataforma Educacional para Mães Solo',
      categoria: 'UI/UX',
      tags: ['UI/UX', 'Figma', 'Prototipagem', 'Design Educacional'],
      status: 'Protótipo de média/alta fidelidade no Figma',
      descricao:
        'Protótipo desenvolvido em equipe com alunos de design para um site educacional voltado a mães solteiras ou jovens que precisam estudar sem atrapalhar a criação dos filhos. Oferece cursos em leitura e videoaula avaliados por provas, com horários 100% flexíveis.',
      ctaLabel: 'Ver portfólio no Behance',
      ctaUrl: 'https://www.behance.net/caiomachado32'
    },
    'banco-dados-comercio': {
      nome: 'Banco de Dados Comércio Digital',
      categoria: 'Engenharia de Software',
      tags: ['Banco de Dados', 'SQL', 'MySQL/MariaDB', 'GitHub'],
      status: 'Documentado no GitHub',
      descricao:
        'Projeto de modelagem relacional completo contendo modelos conceitual e lógico, scripts SQL com triggers automatizadas e documentação técnica.',
      imagem: 'images/banco-dados-mapa-logico.jpg',
      imagemAlt:
        'Diagrama lógico do projeto Banco de Dados Comércio Digital com tabelas Cliente, Pedido, Pagamento, Produto, Categoria e Endereço',
      ctaLabel: 'Explorar no GitHub',
      ctaUrl: 'https://github.com/caiomaragao/database-comercio-digital'
    },
    'punk-desires': {
      nome: 'Punk Desires',
      categoria: 'Design Gráfico',
      tags: ['Branding', 'Identidade Visual'],
      status: 'Concluído',
      descricao:
        'Desenvolvimento de identidade visual e branding para marca de moda íntima com estética punk.',
      imagem: 'images/punk-desires-miv.png',
      imagemAlt: 'Manual de Identidade Visual da marca Punk Desires',
      ctaLabel: 'Ver trabalhos no Behance',
      ctaUrl: 'https://www.behance.net/caiomachado32'
    },
    'redesign-kapo': {
      nome: 'Redesign Embalagem Kapo',
      categoria: 'Design Gráfico',
      tags: ['Design Gráfico', 'Embalagem', 'Behance'],
      status: 'Publicado no Behance',
      descricao:
        'Estudo de caso de redesign de embalagem de suco Kapo, incluindo a adaptação técnica e o recálculo da tabela nutricional para 357 ml.',
      imagem: 'images/kapo-rotulo-frente.jpg',
      imagemAlt: 'Redesign do rótulo frontal da embalagem Kapo Sabor Uva',
      ctaLabel: 'Ver estudo no Behance',
      ctaUrl: 'https://www.behance.net/caiomachado32'
    },
    'mitologia-nordica': {
      nome: 'Redesign Editorial – Mitologia Nórdica',
      categoria: 'Design Gráfico',
      tags: ['Design Editorial', 'Diagramação', 'Tipografia'],
      status: 'Concluído',
      descricao:
        'Projeto de redesign de capa e diagramação interna de livro com temática de mitologia nórdica e tipografia customizada.',
      imagem: 'images/mitos-e-sagas-capa.png',
      imagemAlt: 'Capa do redesign editorial Mitos e Sagas Nórdicos',
      ctaLabel: 'Ver portfólio no Behance',
      ctaUrl: 'https://www.behance.net/caiomachado32'
    },
    'site-morcego': {
      nome: 'Site Murgueço — Site sobre Morcegos',
      categoria: 'Engenharia de Software',
      tags: ['HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript', 'GitHub'],
      status: 'Publicado no GitHub',
      descricao:
        'Página informativa e responsiva sobre morcegos desenvolvida com HTML5, CSS3, Bootstrap 5 e JavaScript para apresentar informações biológicas, curiosidades e desmistificar lendas, com cards, carrossel, accordions e popovers interativos.',
      imagem: 'images/site-morcego.png',
      imagemAlt: 'Ilustração gravada de morcego sobre fundo laranja do projeto Site Murgueço',
      ctaLabel: 'Ver repositório no GitHub',
      ctaUrl: 'https://github.com/caiomaragao/Site_Morcego'
    },
    'revista-oscar': {
      nome: 'Projeto Editorial – Revista do Oscar',
      categoria: 'Design Gráfico',
      tags: ['Design Editorial', 'Diagramação', 'Direção de Arte', 'Behance'],
      status: 'Publicado no Behance',
      descricao:
        'Projeto editorial da revista "Treta Nossa de Cada Dia — Oscar Banned" (Edição #12), explorando direção de arte cinematográfica, tipografia de alto impacto e diagramação de capa e matérias sobre os bastidores e banimentos da Academia.',
      imagem: 'images/revista-oscar.png',
      imagemAlt: 'Capa editorial da revista Treta Nossa de Cada Dia — Oscar Banned',
      ctaLabel: 'Ver projeto no Behance',
      ctaUrl: 'https://www.behance.net/caiomachado32'
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileMenu();
  initScrollSpy();
  initProjectFilter();
  initRevealAnimations();
  initModalAndActions();
});

/**
 * Adiciona elevação sutil na barra flutuante durante o scroll.
 */
function initHeaderScroll() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const updateHeader = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 18);
  };

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
}

/**
 * Controla a abertura e fechamento do menu mobile.
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!toggleBtn || !mobileMenu) return;

  const setOpen = (isOpen) => {
    toggleBtn.setAttribute('aria-expanded', String(isOpen));
    toggleBtn.setAttribute(
      'aria-label',
      isOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'
    );
    mobileMenu.hidden = !isOpen;
  };

  toggleBtn.addEventListener('click', () => {
    const isCurrentlyOpen = toggleBtn.getAttribute('aria-expanded') === 'true';
    setOpen(!isCurrentlyOpen);
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !mobileMenu.hidden) {
      setOpen(false);
      toggleBtn.focus();
    }
  });

  document.addEventListener('click', (event) => {
    if (
      !mobileMenu.hidden &&
      !mobileMenu.contains(event.target) &&
      !toggleBtn.contains(event.target)
    ) {
      setOpen(false);
    }
  });
}

/**
 * Destaca o link de navegação correspondente à seção visível na tela.
 */
function initScrollSpy() {
  const navLinks = Array.from(document.querySelectorAll('.nav-link'));
  const observedIds = ['sobre', 'projetos', 'habilidades'];
  const targets = observedIds
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  if (!navLinks.length || !targets.length || !('IntersectionObserver' in window)) {
    return;
  }

  const setActive = (id) => {
    navLinks.forEach((link) => {
      const matches = link.getAttribute('href') === `#${id}`;
      link.classList.toggle('is-active', matches);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      if (window.scrollY < 160) {
        setActive('');
        return;
      }
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    },
    {
      rootMargin: '-32% 0px -55% 0px',
      threshold: 0.05
    }
  );

  window.addEventListener(
    'scroll',
    () => {
      if (window.scrollY < 160) {
        setActive('');
      }
    },
    { passive: true }
  );

  targets.forEach((target) => observer.observe(target));
}

/**
 * Filtragem interativa da vitrine de projetos entre UI/UX, Design Gráfico e Engenharia & Dados.
 */
function initProjectFilter() {
  const filterButtons = Array.from(document.querySelectorAll('.filter-pill'));
  const projectCards = Array.from(document.querySelectorAll('.project-card'));
  if (!filterButtons.length || !projectCards.length) return;

  const applyFilter = (category) => {
    filterButtons.forEach((btn) => {
      const isActive = btn.dataset.filter === category;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });

    projectCards.forEach((card) => {
      const cardCategory = card.dataset.category;
      const shouldShow = category === 'all' || cardCategory === category;
      card.classList.toggle('is-hidden', !shouldShow);

      if (shouldShow) {
        card.classList.remove('is-pending');
        card.classList.add('is-visible');
      }
    });
  };

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      applyFilter(btn.dataset.filter || 'all');
    });
  });
}

/**
 * Animação sutil e progressiva de entrada apenas para blocos abaixo da dobra inicial.
 */
function initRevealAnimations() {
  const elements = Array.from(document.querySelectorAll('.reveal'));
  if (!elements.length) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced || !('IntersectionObserver' in window)) {
    return;
  }

  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  const belowFold = elements.filter((el) => el.getBoundingClientRect().top > viewportHeight * 0.92);

  if (!belowFold.length) return;

  belowFold.forEach((el) => el.classList.add('is-pending'));

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('is-pending');
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: '0px 0px -30px 0px',
      threshold: 0.05
    }
  );

  belowFold.forEach((el) => observer.observe(el));
}

/**
 * Modal acessível para visualização detalhada de projetos e ação de e-mail.
 */
function initModalAndActions() {
  const modal = document.getElementById('detail-modal');
  const closeBtn = document.getElementById('modal-close');
  const categoryEl = document.getElementById('modal-category');
  const titleEl = document.getElementById('modal-title');
  const statusEl = document.getElementById('modal-status');
  const mediaEl = document.getElementById('modal-media');
  const imageEl = document.getElementById('modal-image');
  const descEl = document.getElementById('modal-description');
  const tagsEl = document.getElementById('modal-tags');
  const footerEl = document.getElementById('modal-footer');
  const emailBtn = document.getElementById('footer-email-btn');

  if (!modal) return;

  let lastFocusedEl = null;

  const openModal = ({
    category,
    title,
    status,
    description,
    image = '',
    imageAlt = '',
    tags = [],
    actions = []
  }) => {
    lastFocusedEl = document.activeElement;

    categoryEl.textContent = category;
    titleEl.textContent = title;
    statusEl.textContent = status;
    descEl.textContent = description;

    if (mediaEl && imageEl) {
      if (image) {
        imageEl.src = image;
        imageEl.alt = imageAlt || title;
        mediaEl.hidden = false;
      } else {
        imageEl.removeAttribute('src');
        imageEl.alt = '';
        mediaEl.hidden = true;
      }
    }

    tagsEl.innerHTML = '';
    tags.forEach((tag) => {
      const li = document.createElement('li');
      li.textContent = tag;
      tagsEl.appendChild(li);
    });
    tagsEl.hidden = tags.length === 0;

    footerEl.innerHTML = '';
    actions.forEach((action) => {
      const link = document.createElement('a');
      link.href = action.href;
      link.className = action.primary ? 'btn-primary' : 'filter-pill';
      link.textContent = action.label;
      if (action.external) {
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
      }
      footerEl.appendChild(link);
    });

    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  };

  const closeModal = () => {
    modal.hidden = true;
    document.body.style.overflow = '';
    if (lastFocusedEl && typeof lastFocusedEl.focus === 'function') {
      lastFocusedEl.focus();
    }
  };

  closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.hidden) {
      closeModal();
    }
  });

  // Abrir detalhes ao clicar no botão ↗ ou no próprio card do projeto
  document.querySelectorAll('.project-card').forEach((card) => {
    const projectId = card.dataset.projectId;
    const project = PORTFOLIO_DATA.projetos[projectId];
    if (!project) return;

    const triggerOpen = () => {
      openModal({
        category: project.categoria,
        title: project.nome,
        status: project.status,
        description: project.descricao,
        image: project.imagem || '',
        imageAlt: project.imagemAlt || project.nome,
        tags: project.tags,
        actions: [
          {
            label: `${project.ctaLabel} ↗`,
            href: project.ctaUrl,
            primary: true,
            external: true
          }
        ]
      });
    };

    const btn = card.querySelector('[data-open-project]');
    if (btn) {
      btn.addEventListener('click', (event) => {
        event.stopPropagation();
        triggerOpen();
      });
    }

    card.style.cursor = 'pointer';
    card.addEventListener('click', triggerOpen);
  });

  // Configuração inteligente do botão de E-mail
  if (emailBtn) {
    const email = PORTFOLIO_DATA.perfil.links.email.trim();
    if (email) {
      emailBtn.href = `mailto:${email}`;
    } else {
      emailBtn.addEventListener('click', (event) => {
        event.preventDefault();
        openModal({
          category: 'CONTATO DIRETO',
          title: 'Fale com Caio Machado Aragão',
          status: 'Brasília, DF, Brasil',
          description:
            'O endereço de e-mail ainda não foi definido no JSON do portfólio. Você pode entrar em contato diretamente pelo LinkedIn, GitHub ou Behance abaixo — ou preencher perfil.links.email em script.js para habilitar o envio direto por e-mail.',
          tags: ['Design Engineer', 'UI/UX', 'Engenharia de Software'],
          actions: [
            {
              label: 'Abrir LinkedIn ↗',
              href: PORTFOLIO_DATA.perfil.links.linkedin,
              primary: true,
              external: true
            },
            {
              label: 'GitHub ↗',
              href: PORTFOLIO_DATA.perfil.links.github,
              primary: false,
              external: true
            },
            {
              label: 'Behance ↗',
              href: PORTFOLIO_DATA.perfil.links.behance,
              primary: false,
              external: true
            }
          ]
        });
      });
    }
  }
}
