'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import type { BlogQuizConfig, BlogQuizResultKey } from '@/lib/blog-quiz-types';

const RESULT_ORDER: BlogQuizResultKey[] = [
  'bottleFree',
  'countertop',
  'fiveGallon',
  'commercialIce',
];

function winningKey(totals: Record<BlogQuizResultKey, number>): BlogQuizResultKey {
  let best: BlogQuizResultKey = 'bottleFree';
  let bestScore = -1;
  for (const key of RESULT_ORDER) {
    const s = totals[key];
    if (s > bestScore) {
      bestScore = s;
      best = key;
    }
  }
  return best;
}

export default function BlogQuiz({ config }: { config: BlogQuizConfig }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(() =>
    config.questions.map(() => null),
  );

  const totals = useMemo(() => {
    const base: Record<BlogQuizResultKey, number> = {
      bottleFree: 0,
      countertop: 0,
      fiveGallon: 0,
      commercialIce: 0,
    };
    answers.forEach((choice, qi) => {
      if (choice === null) return;
      const opt = config.questions[qi]?.options[choice];
      if (!opt) return;
      (Object.entries(opt.weights) as [BlogQuizResultKey, number][]).forEach(([k, v]) => {
        base[k] += v;
      });
    });
    return base;
  }, [answers, config.questions]);

  const allAnswered = answers.every((a) => a !== null);
  const showResults = allAnswered;
  const winner = showResults ? winningKey(totals) : null;
  const resultCopy = winner ? config.results[winner] : null;

  const selectOption = (optionIndex: number) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[step] = optionIndex;
      return next;
    });
  };

  const goNext = () => {
    if (step < config.questions.length - 1) setStep((s) => s + 1);
  };

  const goBack = () => {
    if (step > 0) setStep((s) => s - 1);
  };

  const restart = () => {
    setStep(0);
    setAnswers(config.questions.map(() => null));
  };

  if (showResults && resultCopy) {
    return (
      <div className="space-y-6">
        <div className="rounded-lg border border-primary/20 bg-primary/5 p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Your match
          </p>
          <h2 className="mt-2 text-2xl font-bold text-gray-900">{resultCopy.headline}</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">{resultCopy.body}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <Link href={resultCopy.ctaHref}>{resultCopy.ctaLabel}</Link>
            </Button>
            <Button type="button" variant="outline" onClick={restart}>
              Retake quiz
            </Button>
          </div>
        </div>
        <p className="text-sm text-gray-600">
          Scores are a starting point only. If you are between two setups,{' '}
          <Link href="/quote" className="text-primary font-medium hover:underline">
            request a quote
          </Link>{' '}
          and we will help you choose from real floor plans and usage.
        </p>
      </div>
    );
  }

  const q = config.questions[step];
  const selected = answers[step];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>
          Question {step + 1} of {config.questions.length}
        </span>
        <span>{Math.round(((step + (selected !== null ? 1 : 0)) / config.questions.length) * 100)}%</span>
      </div>
      <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-300"
          style={{
            width: `${((step + (selected !== null ? 1 : 0)) / config.questions.length) * 100}%`,
          }}
        />
      </div>
      <h2 className="text-xl font-semibold text-gray-900">{q.prompt}</h2>
      <ul className="space-y-3">
        {q.options.map((opt, i) => {
          const active = selected === i;
          return (
            <li key={i}>
              <button
                type="button"
                onClick={() => selectOption(i)}
                className={`w-full text-left rounded-lg border px-4 py-3 transition-colors ${
                  active
                    ? 'border-primary bg-primary/10 text-gray-900'
                    : 'border-gray-200 hover:border-primary/40 hover:bg-gray-50'
                }`}
              >
                {opt.text}
              </button>
            </li>
          );
        })}
      </ul>
      <div className="flex flex-wrap gap-3 pt-2">
        <Button type="button" variant="outline" onClick={goBack} disabled={step === 0}>
          Back
        </Button>
        {step < config.questions.length - 1 ? (
          <Button type="button" onClick={goNext} disabled={selected === null}>
            Next
          </Button>
        ) : (
          <p className="text-sm text-gray-600 self-center">
            Choose an answer above to see your personalized recommendation.
          </p>
        )}
      </div>
    </div>
  );
}
