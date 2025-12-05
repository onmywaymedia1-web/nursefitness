import { Section } from './types';

export const FORM_SECTIONS: Section[] = [
  {
    id: 'section-1',
    title: 'Section 1 – You & Your Work',
    questions: [
      {
        id: 'role',
        label: "What’s your current role?",
        type: 'radio',
        options: [
          { label: 'RN', value: 'RN' },
          { label: 'LPN', value: 'LPN' },
          { label: 'Student nurse', value: 'Student nurse' },
          { label: 'Other (healthcare staff)', value: 'Other' },
        ],
        required: true,
      },
      {
        id: 'weeklyHours',
        label: "How many hours a week do you usually work?",
        type: 'radio',
        options: [
          { label: '24–32', value: '24–32' },
          { label: '32–40', value: '32–40' },
          { label: '40+', value: '40+' },
          { label: 'It changes a lot week to week', value: 'Changes' },
        ],
        required: true,
      },
      {
        id: 'startDate',
        label: "Which Date works best to start your 6 week fitness challenge?",
        subtext: "Jan spots almost full",
        type: 'radio',
        options: [
          { label: 'Dec 15th', value: 'Dec 15th' },
          { label: 'Jan 5th', value: 'Jan 5th' },
        ],
        required: true,
      },
      {
        id: 'scheduleType',
        label: "What does your schedule look like?",
        type: 'radio',
        options: [
          { label: 'Mostly day shifts', value: 'Days' },
          { label: 'Mostly nights', value: 'Nights' },
          { label: 'Rotating days/nights', value: 'Rotating' },
          { label: 'It’s all over the place', value: 'Random' },
        ],
        required: true,
      },
      {
        id: 'energyLevel',
        label: "On a scale of 1–10, how drained do you feel after a typical shift?",
        type: 'radio',
        options: [
          { label: '1–3: Not bad', value: '1-3' },
          { label: '4–6: Tired but functional', value: '4-6' },
          { label: '7–8: Very drained most days', value: '7-8' },
          { label: '9–10: Completely wiped out', value: '9-10' },
        ],
        required: true,
      },
    ],
  },
  {
    id: 'section-2',
    title: 'Section 2 – Training Preferences',
    questions: [
      {
        id: 'workoutLocation',
        label: "Where do you prefer to work out?",
        type: 'radio',
        options: [
          { label: 'Commercial gym', value: 'Gym' },
          { label: 'Home/outside – minimal equipment', value: 'Home Minimal' },
          { label: 'Home – decent setup (dumbbells, bands, etc.)', value: 'Home Setup' },
          { label: 'Spin bike / Peloton', value: 'Spin' },
          { label: 'No preference / open to anything', value: 'No Preference' },
        ],
        required: true,
      },
      {
        id: 'workoutTime',
        label: "When do you prefer to work out?",
        type: 'radio',
        options: [
          { label: 'Before work', value: 'Before work' },
          { label: 'After work', value: 'After work' },
          { label: 'Only on off days', value: 'Off days' },
          { label: 'Depends on the week / shift pattern', value: 'Variable' },
        ],
        required: true,
      },
      {
        id: 'workoutDays',
        label: "Real talk – how many days per week can you commit to training right now?",
        type: 'radio',
        options: [
          { label: '2 days', value: '2' },
          { label: '3 days', value: '3' },
          { label: '4 days', value: '4' },
          { label: '5+ days (if it’s short sessions)', value: '5+' },
        ],
        required: true,
      },
      {
        id: 'workoutDuration',
        label: "On work days, could you realistically commit 20–60 minutes if the workout was planned for you?",
        type: 'radio',
        options: [
          { label: 'Yes, on most work days', value: 'Most days' },
          { label: 'Only on some work days', value: 'Some days' },
          { label: 'Only on off days', value: 'Off days' },
        ],
        required: true,
      },
      {
        id: 'movementTypes',
        label: "What types of movement do you already enjoy (if any)?",
        type: 'checkbox',
        options: [
          { label: 'Walking', value: 'Walking' },
          { label: 'Running/jogging', value: 'Running' },
          { label: 'Spin classes / cycling', value: 'Cycling' },
          { label: 'Sports (rec league, etc.)', value: 'Sports' },
          { label: 'Yoga / stretching', value: 'Yoga' },
          { label: 'Lifting weights', value: 'Weights' },
          { label: 'None right now', value: 'None' },
        ],
        required: true,
      },
    ],
  },
  {
    id: 'section-2b',
    title: 'Section 2B – Food & Meal Plan',
    questions: [
      {
        id: 'mealPlanImportance',
        label: "How important is having a simple meal plan (not just workouts) for you right now?",
        type: 'radio',
        options: [
          { label: '10/10 – I NEED a meal plan', value: '10' },
          { label: '8–9/10 – Very important', value: '8-9' },
          { label: '5–7/10 – Would be helpful', value: '5-7' },
          { label: '1–4/10 – I’m mostly focused on workouts', value: '1-4' },
        ],
        required: true,
      },
      {
        id: 'currentDiet',
        label: "On a typical work shift, what does your eating look like right now?",
        subtext: "Snacks, meals, coffee, etc.",
        type: 'textarea',
        placeholder: "e.g., Coffee for breakfast, cafeteria food for lunch...",
        required: true,
      },
      {
        id: 'mealPrep',
        label: "How many meals/snacks are you willing to prep ahead of time in a week if it helped your energy and fat loss?",
        type: 'radio',
        options: [
          { label: '0 – I really hate meal prep', value: '0' },
          { label: '2–4 meals/snacks', value: '2-4' },
          { label: '5–8 meals/snacks', value: '5-8' },
          { label: '9+ meals/snacks (I’m down to batch cook)', value: '9+' },
        ],
        required: true,
      },
    ],
  },
  {
    id: 'section-3',
    title: 'Section 3 – Goals & Struggles',
    questions: [
      {
        id: 'mainGoal',
        label: "What’s your #1 goal for the next 6 weeks?",
        type: 'radio',
        options: [
          { label: 'Lose body fat / weight', value: 'Fat loss' },
          { label: 'Get stronger & more toned', value: 'Strength' },
          { label: 'Have more energy and feel less “dead” after shifts', value: 'Energy' },
          { label: 'Feel confident in clothes/scrubs', value: 'Confidence' },
          { label: 'Other', value: 'Other' },
        ],
        required: true,
      },
      {
        id: 'goalImportance',
        label: "How important is it to you to hit this goal over the next 12–16 weeks (3–4 months)?",
        type: 'radio',
        options: [
          { label: '10/10 – This HAS to change', value: '10' },
          { label: '8–9/10 – It’s very important', value: '8-9' },
          { label: '5–7/10 – Important, but life is busy', value: '5-7' },
          { label: '1–4/10 – Nice to have, not urgent', value: '1-4' },
        ],
        required: true,
      },
      {
        id: 'biggestStruggle',
        label: "What do you feel is your biggest struggle right now?",
        subtext: "Choose up to 3",
        type: 'checkbox',
        options: [
          { label: 'No consistent routine with my shifts', value: 'No routine' },
          { label: 'Eating whatever is around at work', value: 'Work eating' },
          { label: 'Too tired to train', value: 'Fatigue' },
          { label: 'Stress / emotional eating', value: 'Stress' },
          { label: 'I start programs but fall off after 1–2 weeks', value: 'Consistency' },
          { label: 'I honestly don’t know what I should be doing', value: 'Knowledge' },
        ],
        required: true,
      },
      {
        id: 'pastAttempts',
        label: "Have you tried anything before to fix this? If yes, what happened?",
        type: 'textarea',
        placeholder: "Tried Keto, Gym membership...",
        required: true,
      },
      {
        id: 'bigWin',
        label: "If we worked together, what would a “big win” look like for you in 3 months?",
        type: 'textarea',
        placeholder: "Fitting into my old scrubs, running a 5k...",
        required: true,
      },
    ],
  },
  {
    id: 'section-4',
    title: 'Section 4 – Readiness & Contact',
    questions: [
      {
        id: 'seriousness',
        label: "How serious are you about changing this in the next 12–16 weeks?",
        type: 'radio',
        options: [
          { label: '10/10 – I’m ready now', value: '10' },
          { label: '8–9/10 – I really want to, I just need the right guidance', value: '8-9' },
          { label: '5–7/10 – I’m interested, but not sure if the timing is right', value: '5-7' },
          { label: '1–4/10 – Just browsing', value: '1-4' },
        ],
        required: true,
      },
      {
        id: 'commitment',
        label: "If we put you into a 6-week challenge that fits your shifts, are you willing to follow it at least 80% of the time?",
        type: 'radio',
        options: [
          { label: 'Yes – I can commit to that', value: 'Yes' },
          { label: 'Maybe – I want to, but I’m nervous', value: 'Maybe' },
          { label: 'Honestly, I’m not sure I’ll stick to anything right now', value: 'No' },
        ],
        required: true,
      },
      {
        id: 'needs',
        label: "What do you feel you need most right now?",
        type: 'radio',
        options: [
          { label: 'Just a clear workout + meal plan I can follow on my own', value: 'Plan only' },
          { label: 'A plan + some accountability/check-ins so I don’t fall off', value: 'Plan + Accountability' },
          { label: 'Full coaching – someone in my corner for 12–16 weeks', value: 'Full Coaching' },
        ],
        required: true,
      },
      {
        id: 'paidCoachingInterest',
        label: "If we feel we can actually help, are you open to a 12–16 week paid coaching program if it feels like a good fit?",
        type: 'radio',
        options: [
          { label: 'Yes, if the plan makes sense', value: 'Yes' },
          { label: 'Maybe – depends on the details', value: 'Maybe' },
          { label: 'No – I’m only looking for free info', value: 'No' },
        ],
        required: true,
      },
      {
        id: 'name',
        label: "What’s your name?",
        type: 'text',
        placeholder: "Jane Doe",
        required: true,
      },
      {
        id: 'email',
        label: "Best email to send your 6-week challenge outline to?",
        type: 'text',
        placeholder: "jane@example.com",
        required: true,
      },
      {
        id: 'city',
        label: "What city/time zone are you in?",
        type: 'text',
        placeholder: "New York, EST",
        required: true,
      },
      {
        id: 'contactMethod',
        label: "Best way to contact you if we have questions or want to invite you to a free consult?",
        type: 'radio',
        options: [
          { label: 'Text', value: 'Text' },
          { label: 'WhatsApp', value: 'WhatsApp' },
          { label: 'Instagram DM', value: 'Instagram DM' },
          { label: 'Email only', value: 'Email only' },
        ],
        required: true,
      },
      // Conditional Fields
      {
        id: 'phoneNumber',
        label: "Drop your number:",
        type: 'text',
        placeholder: "+1 (555) 000-0000",
        required: true,
        conditional: {
            field: 'contactMethod',
            value: ['Text', 'WhatsApp']
        }
      },
      {
        id: 'instagramHandle',
        label: "Drop your @handle:",
        type: 'text',
        placeholder: "@nurse.jane",
        required: true,
        conditional: {
            field: 'contactMethod',
            value: ['Instagram DM']
        }
      }
    ],
  },
];