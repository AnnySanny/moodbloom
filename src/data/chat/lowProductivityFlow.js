export const lowProductivityFlow = {
  start: {
    en: {
      text: "What blocks your productivity most right now?",
      options: [
        { key: "distractions_intro", label: { en: "Distractions", ua: "Відволікання" } },
        { key: "perfectionism_intro", label: { en: "Perfectionism", ua: "Перфекціонізм" } },
        { key: "fatigue_intro", label: { en: "Fatigue", ua: "Втома" } }
      ]
    },
    ua: {
      text: "Що найбільше блокує вашу продуктивність зараз?",
      options: [
        { key: "distractions_intro", label: { en: "Distractions", ua: "Відволікання" } },
        { key: "perfectionism_intro", label: { en: "Perfectionism", ua: "Перфекціонізм" } },
        { key: "fatigue_intro", label: { en: "Fatigue", ua: "Втома" } }
      ]
    }
  },

  // DISTRACTIONS

  distractions_intro: {
    en: {
      text: "Frequent interruptions reduce deep focus and increase mental switching cost.",
      options: [
        { key: "distractions_steps", label: { en: "What can help?", ua: "Що допоможе?" } }
      ]
    },
    ua: {
      text: "Часті відволікання знижують глибину концентрації та збільшують втому від перемикання.",
      options: [
        { key: "distractions_steps", label: { en: "Що допоможе?", ua: "Що допоможе?" } }
      ]
    }
  },

  distractions_steps: {
    en: {
      text: "Try one 25-minute focus block. Silence notifications. Work on one task only.",
      options: [
        { key: "end_support", label: { en: "I’ll try it", ua: "Спробую" } }
      ]
    },
    ua: {
      text: "Спробуйте один 25-хвилинний блок фокусу. Вимкніть сповіщення. Працюйте лише над одним завданням.",
      options: [
        { key: "end_support", label: { en: "Спробую", ua: "Спробую" } }
      ]
    }
  },

  // PERFECTIONISM

  perfectionism_intro: {
    en: {
      text: "Perfectionism often delays starting because the standard feels too high.",
      options: [
        { key: "perfectionism_steps", label: { en: "What can help?", ua: "Що допоможе?" } }
      ]
    },
    ua: {
      text: "Перфекціонізм часто заважає почати, бо планка здається занадто високою.",
      options: [
        { key: "perfectionism_steps", label: { en: "Що допоможе?", ua: "Що допоможе?" } }
      ]
    }
  },

  perfectionism_steps: {
    en: {
      text: "Set a 'minimum viable version' of the task. Aim for 60% quality first. Improve later.",
      options: [
        { key: "end_support", label: { en: "I’ll lower the bar", ua: "Зменшу планку" } }
      ]
    },
    ua: {
      text: "Визначте мінімально прийнятну версію завдання. Зробіть на 60% якості, покращите пізніше.",
      options: [
        { key: "end_support", label: { en: "Зменшу планку", ua: "Зменшу планку" } }
      ]
    }
  },

  

  fatigue_intro: {
    en: {
      text: "Low energy reduces cognitive capacity. Pushing harder may worsen performance.",
      options: [
        { key: "fatigue_steps", label: { en: "What should I do?", ua: "Що робити?" } }
      ]
    },
    ua: {
      text: "Низький рівень енергії зменшує когнітивні ресурси. Перенапруження може знизити ефективність.",
      options: [
        { key: "fatigue_steps", label: { en: "Що робити?", ua: "Що робити?" } }
      ]
    }
  },

  fatigue_steps: {
    en: {
      text: "Take a 10–20 minute real break: move your body, drink water, step outside if possible.",
      options: [
        { key: "end_support", label: { en: "I’ll take a break", ua: "Зроблю паузу" } }
      ]
    },
    ua: {
      text: "Зробіть повноцінну паузу 10–20 хв: рух, вода, свіже повітря за можливості.",
      options: [
        { key: "end_support", label: { en: "Зроблю паузу", ua: "Зроблю паузу" } }
      ]
    }
  },

 

  end_support: {
    en: {
      text: "Small focused actions are more powerful than forcing productivity.",
      options: null
    },
    ua: {
      text: "Маленькі сфокусовані дії ефективніші, ніж примус до продуктивності.",
      options: null
    }
  }
};