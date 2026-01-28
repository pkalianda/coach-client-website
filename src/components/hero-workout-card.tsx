"use client";

import { Pencil, Plus, Minus } from "lucide-react";

interface ExerciseSet {
  id: number;
  weight: string;
  reps: string;
}

interface Exercise {
  id: number;
  name: string;
  type: string;
  sets: ExerciseSet[];
}

const initialExercises: Exercise[] = [
  {
    id: 1,
    name: "Lat pulldowns",
    type: "Machine",
    sets: [
      { id: 1, weight: "", reps: "10" },
      { id: 2, weight: "", reps: "10" },
      { id: 3, weight: "", reps: "10" },
    ],
  },
  {
    id: 2,
    name: "Cable rows",
    type: "Machine",
    sets: [
      { id: 1, weight: "", reps: "10" },
      { id: 2, weight: "", reps: "10" },
      { id: 3, weight: "", reps: "10" },
    ],
  },
  {
    id: 3,
    name: "Supinated pull ups",
    type: "Body",
    sets: [
      { id: 1, weight: "", reps: "10" },
      { id: 2, weight: "", reps: "10" },
    ],
  },
  {
    id: 4,
    name: "Face pulls",
    type: "Cable",
    sets: [
      { id: 1, weight: "", reps: "15" },
      { id: 2, weight: "", reps: "15" },
      { id: 3, weight: "", reps: "15" },
    ],
  },
  {
    id: 5,
    name: "Bicep curls",
    type: "Dumbbell",
    sets: [
      { id: 1, weight: "", reps: "12" },
      { id: 2, weight: "", reps: "12" },
      { id: 3, weight: "", reps: "12" },
    ],
  },
];

function ExerciseIcon() {
  return (
    <div className="flex h-[30px] w-[30px] items-center justify-center rounded-md border border-border bg-neutral-50 px-0.5">
      <svg width="11" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.5 0L6.5 5H10L6 9L7.5 15L5.5 11L3.5 15L5 9L1 5H4.5L5.5 0Z" fill="#737373"/>
      </svg>
    </div>
  );
}

function SetRow({ setNumber, weight, reps }: { setNumber: number; weight: string; reps: string }) {
  return (
    <div className="flex w-full items-center gap-2">
      <span className="w-3 text-sm text-foreground">{setNumber}.</span>
      <div className="flex flex-1 items-center justify-end rounded-lg border border-border px-3 py-2.5">
        <span className="text-sm font-medium text-muted-foreground">lbs</span>
      </div>
      <div className="flex flex-1 items-center justify-between rounded-lg border border-border px-3 py-2.5">
        <span className="text-sm text-black">{reps || "10"}</span>
        <span className="text-sm font-medium text-muted-foreground">reps</span>
      </div>
      <button className="flex h-4 w-4 items-center justify-center text-red-400 hover:text-red-500">
        <Minus className="h-4 w-4" />
      </button>
    </div>
  );
}

function ExerciseBlock({ exercise }: { exercise: Exercise }) {
  return (
    <div className="flex w-full flex-col gap-3 border-b border-border py-7">
      <div className="flex items-center gap-2">
        <ExerciseIcon />
        <div className="flex flex-col">
          <span className="text-sm font-medium text-foreground">{exercise.name}</span>
          <span className="text-xs text-muted-foreground">{exercise.type}</span>
        </div>
      </div>
      {exercise.sets.map((set, index) => (
        <SetRow key={set.id} setNumber={index + 1} weight={set.weight} reps={set.reps} />
      ))}
      <button className="flex h-8 w-full items-center justify-center gap-2 rounded-full bg-secondary px-3 py-2 hover:bg-secondary/80">
        <Plus className="h-4 w-4 text-secondary-foreground" />
        <span className="text-xs font-medium text-secondary-foreground">Add set</span>
      </button>
    </div>
  );
}

export function HeroWorkoutCard() {
  return (
    <div
      className="flex h-[400px] w-[340px] flex-col overflow-hidden rounded-2xl border border-border md:h-[500px] md:w-[376px]"
      style={{
        background: "linear-gradient(to bottom, white 53%, rgba(255,255,255,0.8) 99%)",
      }}
    >
      {/* Header */}
      <div className="flex shrink-0 items-center justify-between border-b border-border p-5 pb-7">
        <div className="flex flex-col">
          <span className="text-base font-semibold text-foreground">Full body push</span>
          <span className="text-sm text-muted-foreground">5 exercises</span>
        </div>
        <button className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary hover:bg-secondary/80">
          <Pencil className="h-4 w-4 text-secondary-foreground" />
        </button>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-5">
        {initialExercises.map((exercise) => (
          <ExerciseBlock key={exercise.id} exercise={exercise} />
        ))}
      </div>
    </div>
  );
}
