export const overthinkingFlow = {
  start: {
    en: {
      text: "What kind of thoughts repeat most?",
      options: [
        { key: "future_intro", label: { en: "Future worries", ua: "Майбутнє" } },
        { key: "past_intro", label: { en: "Past mistakes", ua: "Минуле" } },
        { key: "selfDoubt_intro", label: { en: "Self-doubt", ua: "Сумніви в собі" } }
      ]
    },
    ua: {
      text: "Які думки повторюються найчастіше?",
      options: [
        { key: "future_intro", label: { en: "Future worries", ua: "Майбутнє" } },
        { key: "past_intro", label: { en: "Past mistakes", ua: "Минуле" } },
        { key: "selfDoubt_intro", label: { en: "Self-doubt", ua: "Сумніви в собі" } }
      ]
    }
  },

  // FUTURE WORRIES

  future_intro: {
    en: {
      text: "Future-focused overthinking usually comes from uncertainty and desire for control.",
      options: [
        { key: "future_steps", label: { en: "What can I do?", ua: "Що робити?" } }
      ]
    },
    ua: {
      text: "Нав’язливі думки про майбутнє часто виникають через невизначеність і потребу в контролі.",
      options: [
        { key: "future_steps", label: { en: "Що робити?", ua: "Що робити?" } }
      ]
    }
  },

  future_steps: {
    en: {
      text: "Write down one concrete action you can take today. Action reduces uncertainty more than thinking.",
      options: [
        { key: "end_support", label: { en: "I’ll take one step", ua: "Зроблю один крок" } }
      ]
    },
    ua: {
      text: "Запишіть одну конкретну дію, яку можете зробити сьогодні. Дія зменшує невизначеність краще, ніж роздуми.",
      options: [
        { key: "end_support", label: { en: "Зроблю один крок", ua: "Зроблю один крок" } }
      ]
    }
  },

  // PAST MISTAKES

  past_intro: {
    en: {
      text: "Overthinking the past often tries to prevent repeating mistakes.",
      options: [
        { key: "past_steps", label: { en: "How to reframe?", ua: "Як переосмислити?" } }
      ]
    },
    ua: {
      text: "Нав’язливі думки про минуле часто намагаються запобігти повторенню помилки.",
      options: [
        { key: "past_steps", label: { en: "Як переосмислити?", ua: "Як переосмислити?" } }
      ]
    }
  },

  past_steps: {
    en: {
      text: "Ask: What did this experience teach me? Extract the lesson and release the rest.",
      options: [
        { key: "end_support", label: { en: "That helps", ua: "Це допомагає" } }
      ]
    },
    ua: {
      text: "Запитайте себе: чому мене навчила ця ситуація? Візьміть урок і відпустіть інше.",
      options: [
        { key: "end_support", label: { en: "Це допомагає", ua: "Це допомагає" } }
      ]
    }
  },

  // SELF DOUBT

  selfDoubt_intro: {
    en: {
      text: "Self-doubt often focuses only on negative evidence.",
      options: [
        { key: "selfDoubt_steps", label: { en: "How to balance it?", ua: "Як збалансувати?" } }
      ]
    },
    ua: {
      text: "Сумніви в собі зазвичай концентруються лише на негативних доказах.",
      options: [
        { key: "selfDoubt_steps", label: { en: "Як збалансувати?", ua: "Як збалансувати?" } }
      ]
    }
  },

  selfDoubt_steps: {
    en: {
      text: "List three facts that contradict your doubt. Facts are stronger than feelings.",
      options: [
        { key: "end_support", label: { en: "I’ll write them down", ua: "Запишу їх" } }
      ]
    },
    ua: {
      text: "Запишіть три факти, які суперечать вашим сумнівам. Факти сильніші за емоції.",
      options: [
        { key: "end_support", label: { en: "Запишу їх", ua: "Запишу їх" } }
      ]
    }
  },

  // FINAL

  end_support: {
    en: {
      text: "Thinking is useful. Repeating the same thought is not. Redirect gently.",
      options: null
    },
    ua: {
      text: "Думати корисно. Повторювати одну й ту ж думку — ні. М’яко перенаправляйте увагу.",
      options: null
    }
  }
};