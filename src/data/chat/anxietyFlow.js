export const anxietyFlow = {
  start: {
    en: {
      text: "What exactly makes you anxious?",
      options: [
        { key: "work", label: { en: "Work", ua: "Робота" } },
        { key: "relationships", label: { en: "Relationships", ua: "Стосунки" } },
        { key: "future", label: { en: "Future", ua: "Майбутнє" } }
      ]
    },
    ua: {
      text: "Що саме викликає тривогу?",
      options: [
        { key: "work", label: { en: "Work", ua: "Робота" } },
        { key: "relationships", label: { en: "Relationships", ua: "Стосунки" } },
        { key: "future", label: { en: "Future", ua: "Майбутнє" } }
      ]
    }
  },


  work: {
    en: {
      text: "Work anxiety often comes from pressure and expectations. What feels hardest right now?",
      options: [
        { key: "work_deadlines", label: { en: "Deadlines", ua: "Дедлайни" } },
        { key: "work_conflict", label: { en: "Conflicts", ua: "Конфлікти" } },
        { key: "work_burnout", label: { en: "Burnout", ua: "Вигорання" } }
      ]
    },
    ua: {
      text: "Тривога через роботу часто пов’язана з тиском та очікуваннями. Що зараз найважче?",
      options: [
        { key: "work_deadlines", label: { en: "Deadlines", ua: "Дедлайни" } },
        { key: "work_conflict", label: { en: "Conflicts", ua: "Конфлікти" } },
        { key: "work_burnout", label: { en: "Burnout", ua: "Вигорання" } }
      ]
    }
  },

  work_deadlines: {
    en: {
      text: "Deadlines can create constant pressure. Maybe breaking tasks into smaller steps could help. Would you like a quick grounding exercise?",
      options: [
        { key: "grounding", label: { en: "Yes, please", ua: "Так, будь ласка" } },
        { key: "end_support", label: { en: "No, just needed to say it", ua: "Ні, просто хотів(ла) це сказати" } }
      ]
    },
    ua: {
      text: "Дедлайни створюють постійний тиск. Можливо, допоможе розбити задачі на менші кроки. Хочеш коротку вправу на заземлення?",
      options: [
        { key: "grounding", label: { en: "Yes, please", ua: "Так, будь ласка" } },
        { key: "end_support", label: { en: "No, just needed to say it", ua: "Ні, просто хотів(ла) це сказати" } }
      ]
    }
  },

  work_conflict: {
    en: {
      text: "Conflicts at work can feel exhausting. It might help to focus on what you can control in the situation.",
      options: [{ key: "end_support", label: { en: "Thank you", ua: "Дякую" } }]
    },
    ua: {
      text: "Конфлікти на роботі виснажують. Можливо, варто сфокусуватися на тому, що ти реально можеш контролювати.",
      options: [{ key: "end_support", label: { en: "Thank you", ua: "Дякую" } }]
    }
  },

  work_burnout: {
    en: {
      text: "Burnout is a signal your system needs rest. Even small pauses during the day matter.",
      options: [{ key: "end_support", label: { en: "I understand", ua: "Я розумію" } }]
    },
    ua: {
      text: "Вигорання — це сигнал, що системі потрібен відпочинок. Навіть маленькі паузи протягом дня мають значення.",
      options: [{ key: "end_support", label: { en: "Я розумію", ua: "Я розумію" } }]
    }
  },



  relationships: {
    en: {
      text: "Relationship anxiety often relates to uncertainty or fear of loss. What feels most intense?",
      options: [
        { key: "rel_rejection", label: { en: "Fear of rejection", ua: "Страх відторгнення" } },
        { key: "rel_conflict", label: { en: "Arguments", ua: "Сварки" } }
      ]
    },
    ua: {
      text: "Тривога у стосунках часто пов’язана з невизначеністю або страхом втрати. Що турбує найбільше?",
      options: [
        { key: "rel_rejection", label: { en: "Fear of rejection", ua: "Страх відторгнення" } },
        { key: "rel_conflict", label: { en: "Arguments", ua: "Сварки" } }
      ]
    }
  },

  rel_rejection: {
    en: {
      text: "Fear of rejection often comes from past experiences. You deserve stability and care.",
      options: [{ key: "end_support", label: { en: "Thank you", ua: "Дякую" } }]
    },
    ua: {
      text: "Страх відторгнення часто формується через попередній досвід. Ти заслуговуєш на стабільність і турботу.",
      options: [{ key: "end_support", label: { en: "Дякую", ua: "Дякую" } }]
    }
  },

  rel_conflict: {
    en: {
      text: "Arguments can activate anxiety quickly. Slowing down and breathing before reacting can help.",
      options: [{ key: "end_support", label: { en: "I will try", ua: "Спробую" } }]
    },
    ua: {
      text: "Сварки швидко активують тривогу. Якщо трохи сповільнитись і подихати перед реакцією — це може допомогти.",
      options: [{ key: "end_support", label: { en: "Спробую", ua: "Спробую" } }]
    }
  },



  future: {
    en: {
      text: "Fear of the future often comes from lack of control. What worries you most?",
      options: [
        { key: "future_uncertainty", label: { en: "Uncertainty", ua: "Невизначеність" } },
        { key: "future_failure", label: { en: "Fear of failure", ua: "Страх невдачі" } }
      ]
    },
    ua: {
      text: "Страх майбутнього часто пов’язаний із відсутністю контролю. Що турбує найбільше?",
      options: [
        { key: "future_uncertainty", label: { en: "Uncertainty", ua: "Невизначеність" } },
        { key: "future_failure", label: { en: "Fear of failure", ua: "Страх невдачі" } }
      ]
    }
  },

  future_uncertainty: {
    en: {
      text: "Uncertainty is uncomfortable, but it also means possibilities. Focusing on today can reduce overwhelm.",
      options: [{ key: "end_support", label: { en: "Makes sense", ua: "Має сенс" } }]
    },
    ua: {
      text: "Невизначеність неприємна, але вона також означає можливості. Фокус на сьогоднішньому дні зменшує перевантаження.",
      options: [{ key: "end_support", label: { en: "Має сенс", ua: "Має сенс" } }]
    }
  },

  future_failure: {
    en: {
      text: "Fear of failure often hides high expectations. Progress matters more than perfection.",
      options: [{ key: "end_support", label: { en: "I needed that", ua: "Мені це було потрібно" } }]
    },
    ua: {
      text: "Страх невдачі часто приховує високі очікування. Прогрес важливіший за ідеальність.",
      options: [{ key: "end_support", label: { en: "Мені це було потрібно", ua: "Мені це було потрібно" } }]
    }
  },

 

  grounding: {
    en: {
      text: "Try this: name 5 things you see, 4 you feel, 3 you hear, 2 you smell, 1 you taste. Slow breathing helps too.",
      options: [{ key: "end_support", label: { en: "Thank you", ua: "Дякую" } }]
    },
    ua: {
      text: "Спробуй: назви 5 речей, які бачиш, 4 які відчуваєш, 3 які чуєш, 2 які відчуваєш запахом, 1 смак. І повільне дихання.",
      options: [{ key: "end_support", label: { en: "Дякую", ua: "Дякую" } }]
    }
  },

end_support: {
  en: {
    text: "Thank you for sharing this. If you'd like, we can talk more. To continue, type a message or choose a quick topic above.",
    options: null
  },
  ua: {
    text: "Дякую, що поділилися цим. Якщо хочете, можемо поговорити ще. Для цього напишіть повідомлення або оберіть швидку тему вище.",
    options: null
  }
}
};