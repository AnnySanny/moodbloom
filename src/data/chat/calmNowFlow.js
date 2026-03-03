export const calmNowFlow = {
  start: {
    en: {
      text: "Let’s slow things down together. Ready for a short calming exercise?",
      options: [
        { key: "prepare", label: { en: "Yes", ua: "Так" } },
        { key: "later", label: { en: "Not now", ua: "Не зараз" } }
      ]
    },
    ua: {
      text: "Давайте трохи сповільнимося разом. Готові до короткої вправи на заспокоєння?",
      options: [
        { key: "prepare", label: { en: "Yes", ua: "Так" } },
        { key: "later", label: { en: "Not now", ua: "Не зараз" } }
      ]
    }
  },

  prepare: {
    en: {
      text: "Sit comfortably. Place your feet on the floor. Relax your shoulders. Ready to begin?",
      options: [
        { key: "breathing", label: { en: "Start", ua: "Почати" } }
      ]
    },
    ua: {
      text: "Сядьте зручно. Поставте ноги на підлогу. Розслабте плечі. Готові почати?",
      options: [
        { key: "breathing", label: { en: "Start", ua: "Почати" } }
      ]
    }
  },

  breathing: {
    en: {
      text: "Inhale 4 — hold 4 — exhale 6. Let the exhale be slower than the inhale. Repeat 5 times.",
      options: [
        { key: "grounding", label: { en: "Done", ua: "Готово" } }
      ]
    },
    ua: {
      text: "Вдих 4 — пауза 4 — видих 6. Нехай видих буде довший за вдих. Повторіть 5 разів.",
      options: [
        { key: "grounding", label: { en: "Done", ua: "Готово" } }
      ]
    }
  },

  grounding: {
    en: {
      text: "Now gently notice 3 things you can see and 2 things you can feel physically.",
      options: [
        { key: "reflect", label: { en: "Okay", ua: "Добре" } }
      ]
    },
    ua: {
      text: "Тепер спокійно назвіть 3 речі, які ви бачите, і 2 відчуття у тілі.",
      options: [
        { key: "reflect", label: { en: "Добре", ua: "Добре" } }
      ]
    }
  },

  reflect: {
    en: {
      text: "Even a small shift toward calm is progress. Your body is capable of settling.",
      options: [
        { key: "end_support", label: { en: "Thank you", ua: "Дякую" } },
        { key: "breathing", label: { en: "Repeat exercise", ua: "Повторити вправу" } }
      ]
    },
    ua: {
      text: "Навіть невелике зниження напруги — це вже прогрес. Ваше тіло вміє заспокоюватися.",
      options: [
        { key: "end_support", label: { en: "Дякую", ua: "Дякую" } },
        { key: "breathing", label: { en: "Повторити вправу", ua: "Повторити вправу" } }
      ]
    }
  },

  later: {
    en: {
      text: "That’s okay. You can return whenever you feel ready. I’m here.",
      options: [
        { key: "start", label: { en: "Start now", ua: "Почати зараз" } }
      ]
    },
    ua: {
      text: "Добре. Ви можете повернутися, коли будете готові. Я поруч.",
      options: [
        { key: "start", label: { en: "Почати зараз", ua: "Почати зараз" } }
      ]
    }
  },

end_support: {
  en: {
    text: "I’m glad you took this moment to calm down. Even a small pause can make a difference.",
    options: null
  },
  ua: {
    text: "Я радий, що ви дали собі цей момент заспокоїтися. Навіть невелика пауза має значення.",
    options: null
  }
}
};