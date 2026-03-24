import { useEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import type { IconType } from "react-icons";
import { BiLogoJava } from "react-icons/bi";
import { DiMsqlServer } from "react-icons/di";
import {
  SiAngular,
  SiBootstrap,
  SiCss,
  SiDocker,
  SiDotnet,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPostman,
  SiRedis,
  SiTypescript,
} from "react-icons/si";
import {
  TbApi,
  TbBinaryTree2,
  TbBrandCSharp,
  TbChevronLeft,
  TbChevronRight,
  TbCirclesRelation,
  TbPlugConnected,
  TbTestPipe2,
} from "react-icons/tb";
import type { SectionIntro, Skill, SkillIconKey, SkillsCollection } from "../../data/portfolio";
import { SectionHeading } from "../ui/SectionHeading";

type SkillsSectionProps = {
  intro: SectionIntro;
  skills: SkillsCollection;
};

type DragState = {
  active: boolean;
  pointerId: number | null;
  startX: number;
  deltaX: number;
};

const MOBILE_GRID_QUERY = "(max-width: 720px)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
const GRID_PAGE_SIZE = 8;
const GRID_AUTOPLAY_MS = 6000;
const GRID_SWIPE_THRESHOLD = 48;
const MARQUEE_SPEED = 40;

const skillIcons: Record<SkillIconKey, IconType> = {
  csharp: TbBrandCSharp,
  javascript: SiJavascript,
  typescript: SiTypescript,
  java: BiLogoJava,
  dotnet: SiDotnet,
  sqlServer: DiMsqlServer,
  redis: SiRedis,
  angular: SiAngular,
  nextjs: SiNextdotjs,
  bootstrap: SiBootstrap,
  docker: SiDocker,
  postman: SiPostman,
  git: SiGit,
  github: SiGithub,
  jira: SiJira,
  mysql: SiMysql,
  mongodb: SiMongodb,
  html: SiHtml5,
  css: SiCss,
  minimalApi: TbApi,
  signalr: TbPlugConnected,
  unitTesting: TbTestPipe2,
  oop: TbCirclesRelation,
  dsa: TbBinaryTree2,
};

function chunkSkills(skills: Skill[], pageSize: number) {
  const pages: Array<Array<Skill | null>> = [];

  for (let index = 0; index < skills.length; index += pageSize) {
    const page: Array<Skill | null> = skills.slice(index, index + pageSize);

    while (page.length < pageSize) {
      page.push(null);
    }

    pages.push(page);
  }

  return pages;
}

function normalizeLoopOffset(offset: number, loopWidth: number) {
  if (loopWidth <= 0) {
    return 0;
  }

  let normalized = offset % loopWidth;

  if (normalized > 0) {
    normalized -= loopWidth;
  }

  return normalized;
}

export function SkillsSection({ intro, skills }: SkillsSectionProps) {
  const mobileSkillPages = chunkSkills(skills.grid, GRID_PAGE_SIZE);
  const marqueeSkills = [...skills.slider, ...skills.slider];
  const [isMobileGrid, setIsMobileGrid] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const [gridDragOffset, setGridDragOffset] = useState(0);
  const [isGridDragging, setIsGridDragging] = useState(false);
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);
  const [isMarqueeDragging, setIsMarqueeDragging] = useState(false);
  const marqueeTrackRef = useRef<HTMLDivElement | null>(null);
  const gridDragRef = useRef<DragState>({
    active: false,
    pointerId: null,
    startX: 0,
    deltaX: 0,
  });
  const marqueeDragRef = useRef<DragState>({
    active: false,
    pointerId: null,
    startX: 0,
    deltaX: 0,
  });
  const marqueePositionRef = useRef(0);
  const marqueeHoverRef = useRef(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_GRID_QUERY);
    const syncMobileState = (matches: boolean) => {
      setIsMobileGrid(matches);
    };

    syncMobileState(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      syncMobileState(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY);
    const syncReducedMotionState = (matches: boolean) => {
      setPrefersReducedMotion(matches);
    };

    syncReducedMotionState(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      syncReducedMotionState(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    setActivePage((currentPage) => {
      if (mobileSkillPages.length === 0) {
        return 0;
      }

      return currentPage % mobileSkillPages.length;
    });
  }, [mobileSkillPages.length]);

  useEffect(() => {
    if (!isMobileGrid || prefersReducedMotion || mobileSkillPages.length <= 1 || isGridDragging) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActivePage((currentPage) => (currentPage + 1) % mobileSkillPages.length);
    }, GRID_AUTOPLAY_MS);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isGridDragging, isMobileGrid, mobileSkillPages.length, prefersReducedMotion]);

  useEffect(() => {
    const track = marqueeTrackRef.current;

    if (!track) {
      return undefined;
    }

    let animationFrameId = 0;
    let lastTimestamp = performance.now();

    const applyTrackTransform = () => {
      track.style.transform = `translateX(${marqueePositionRef.current}px)`;
    };

    const handleResize = () => {
      const loopWidth = track.scrollWidth / 2;
      marqueePositionRef.current = normalizeLoopOffset(marqueePositionRef.current, loopWidth);
      applyTrackTransform();
    };

    const tick = (timestamp: number) => {
      const loopWidth = track.scrollWidth / 2;
      const shouldMove = !prefersReducedMotion && !marqueeHoverRef.current && !marqueeDragRef.current.active;

      if (loopWidth > 0 && shouldMove) {
        const deltaSeconds = (timestamp - lastTimestamp) / 1000;
        marqueePositionRef.current = normalizeLoopOffset(
          marqueePositionRef.current - deltaSeconds * MARQUEE_SPEED,
          loopWidth,
        );
        applyTrackTransform();
      }

      lastTimestamp = timestamp;
      animationFrameId = window.requestAnimationFrame(tick);
    };

    applyTrackTransform();
    window.addEventListener("resize", handleResize);
    animationFrameId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [prefersReducedMotion]);

  const goToPage = (nextPage: number) => {
    if (mobileSkillPages.length === 0) {
      return;
    }

    const normalizedPage = (nextPage + mobileSkillPages.length) % mobileSkillPages.length;
    setActivePage(normalizedPage);
    setGridDragOffset(0);
  };

  const handleGridPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!isMobileGrid || mobileSkillPages.length <= 1) {
      return;
    }

    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    gridDragRef.current = {
      active: true,
      pointerId: event.pointerId,
      startX: event.clientX,
      deltaX: 0,
    };
    setIsGridDragging(true);
    setGridDragOffset(0);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handleGridPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!gridDragRef.current.active || gridDragRef.current.pointerId !== event.pointerId) {
      return;
    }

    const deltaX = event.clientX - gridDragRef.current.startX;
    gridDragRef.current.deltaX = deltaX;
    setGridDragOffset(deltaX);
  };

  const endGridDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!gridDragRef.current.active || gridDragRef.current.pointerId !== event.pointerId) {
      return;
    }

    const deltaX = gridDragRef.current.deltaX;

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    gridDragRef.current = {
      active: false,
      pointerId: null,
      startX: 0,
      deltaX: 0,
    };
    setIsGridDragging(false);
    setGridDragOffset(0);

    if (Math.abs(deltaX) < GRID_SWIPE_THRESHOLD) {
      return;
    }

    if (deltaX < 0) {
      goToPage(activePage + 1);
      return;
    }

    goToPage(activePage - 1);
  };

  const syncMarqueePauseState = () => {
    setIsMarqueePaused(marqueeHoverRef.current || marqueeDragRef.current.active);
  };

  const handleMarqueePointerEnter = () => {
    marqueeHoverRef.current = true;
    syncMarqueePauseState();
  };

  const handleMarqueePointerLeave = () => {
    marqueeHoverRef.current = false;
    syncMarqueePauseState();
  };

  const handleMarqueePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    marqueeDragRef.current = {
      active: true,
      pointerId: event.pointerId,
      startX: event.clientX,
      deltaX: 0,
    };
    setIsMarqueeDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
    syncMarqueePauseState();
  };

  const handleMarqueePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!marqueeDragRef.current.active || marqueeDragRef.current.pointerId !== event.pointerId) {
      return;
    }

    const track = marqueeTrackRef.current;

    if (!track) {
      return;
    }

    const loopWidth = track.scrollWidth / 2;
    const deltaX = event.clientX - marqueeDragRef.current.startX;
    marqueeDragRef.current.deltaX = deltaX;
    marqueeDragRef.current.startX = event.clientX;
    marqueePositionRef.current = normalizeLoopOffset(marqueePositionRef.current + deltaX, loopWidth);
    track.style.transform = `translateX(${marqueePositionRef.current}px)`;
  };

  const endMarqueeDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!marqueeDragRef.current.active || marqueeDragRef.current.pointerId !== event.pointerId) {
      return;
    }

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    marqueeDragRef.current = {
      active: false,
      pointerId: null,
      startX: 0,
      deltaX: 0,
    };
    setIsMarqueeDragging(false);
    syncMarqueePauseState();
  };

  return (
    <section id="skills" className="section section-muted">
      <div className="layout-frame">
        <SectionHeading eyebrow={intro.eyebrow} title={intro.title} />

        <div className="skills-layout">
          <div className="skills-panel skills-panel--primary">
            <div className="skills-panel__header">
              <p className="skills-panel__label">Primary Stack</p>
            </div>

            <div className="skills-grid skills-grid--desktop">
              {skills.grid.map((skill) => {
                const Icon = skillIcons[skill.icon];

                return (
                  <article key={skill.name} className="skill-card">
                    <span className="skill-card__icon-shell" aria-hidden="true">
                      <Icon className="skill-icon" aria-hidden="true" focusable="false" />
                    </span>
                    <span className="skill-name">{skill.name}</span>
                  </article>
                );
              })}
            </div>

            <div
              className="skills-carousel"
              aria-label="Primary skills carousel"
              aria-roledescription="carousel"
            >
              <div
                className="skills-carousel__viewport"
                onPointerDown={handleGridPointerDown}
                onPointerMove={handleGridPointerMove}
                onPointerUp={endGridDrag}
                onPointerCancel={endGridDrag}
              >
                <div
                  className={`skills-carousel__track${isGridDragging ? " is-dragging" : ""}`}
                  style={{ transform: `translateX(calc(${-activePage * 100}% + ${gridDragOffset}px))` }}
                >
                  {mobileSkillPages.map((page, pageIndex) => (
                    <div
                      key={`skills-page-${pageIndex}`}
                      className="skills-carousel__slide"
                      aria-label={`Slide ${pageIndex + 1} of ${mobileSkillPages.length}`}
                      aria-roledescription="slide"
                      role="group"
                    >
                      {page.map((skill, skillIndex) => {
                        if (!skill) {
                          return (
                            <span
                              key={`placeholder-${pageIndex}-${skillIndex}`}
                              className="skill-card skill-card--placeholder"
                              aria-hidden="true"
                            />
                          );
                        }

                        const Icon = skillIcons[skill.icon];

                        return (
                          <article key={skill.name} className="skill-card skill-card--mobile">
                            <span className="skill-card__icon-shell" aria-hidden="true">
                              <Icon className="skill-icon" aria-hidden="true" focusable="false" />
                            </span>
                            <span className="skill-name">{skill.name}</span>
                          </article>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>

              {mobileSkillPages.length > 1 ? (
                <div className="skills-carousel__controls">
                  <div className="skills-carousel__buttons" aria-label="Carousel navigation">
                    <button
                      type="button"
                      className="skills-carousel__nav"
                      aria-label="Previous skill slide"
                      onClick={() => goToPage(activePage - 1)}
                    >
                      <TbChevronLeft aria-hidden="true" focusable="false" />
                    </button>
                    <button
                      type="button"
                      className="skills-carousel__nav"
                      aria-label="Next skill slide"
                      onClick={() => goToPage(activePage + 1)}
                    >
                      <TbChevronRight aria-hidden="true" focusable="false" />
                    </button>
                  </div>

                  <div className="skills-carousel__dots">
                    {mobileSkillPages.map((_, pageIndex) => (
                      <button
                        key={`skills-dot-${pageIndex}`}
                        type="button"
                        className={`skills-carousel__dot${pageIndex === activePage ? " is-active" : ""}`}
                        aria-label={`Go to skill slide ${pageIndex + 1}`}
                        aria-pressed={pageIndex === activePage}
                        onClick={() => goToPage(pageIndex)}
                      />
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          <div className="skills-panel skills-panel--marquee">
            <div className="skills-panel__header">
              <p className="skills-panel__label">Additional Skills</p>
            </div>

            <div
              className={`skills-marquee${isMarqueePaused ? " is-paused" : ""}${isMarqueeDragging ? " is-dragging" : ""}`}
              aria-label="Additional skills"
              onPointerDown={handleMarqueePointerDown}
              onPointerEnter={handleMarqueePointerEnter}
              onPointerLeave={handleMarqueePointerLeave}
              onPointerMove={handleMarqueePointerMove}
              onPointerUp={endMarqueeDrag}
              onPointerCancel={endMarqueeDrag}
            >
              <div ref={marqueeTrackRef} className="skills-marquee__track">
                {marqueeSkills.map((skill, index) => {
                  const Icon = skillIcons[skill.icon];
                  const isClone = index >= skills.slider.length;

                  return (
                    <article
                      key={`${skill.name}-${index}`}
                      className="skill-pill"
                      aria-hidden={isClone}
                    >
                      <span className="skill-pill__icon-shell" aria-hidden="true">
                        <Icon className="skill-pill__icon" aria-hidden="true" focusable="false" />
                      </span>
                      <span className="skill-pill__name">{skill.name}</span>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

