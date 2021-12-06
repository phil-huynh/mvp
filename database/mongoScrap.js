const mongoose = require('mongoose');



let scalesSchema = mongooseSchema({

  tonic: String,

  major: {
    scale: [String],
    chords: {
      oneChord: {
        chordQuality: String,
        seventhQuality: String,
        triadName: String,
        triadLabel: String,
        seventhName: String,
        seventhLabel: String,
        root: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        third: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        fifth: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        seventh: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        tensions: {
          nine: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          },
          eleven: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          },
          thirteen: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          }
        }
      },
      twoChord: {
        chordQuality: String,
        seventhQuality: String,
        triadName: String,
        triadLabel: String,
        seventhName: String,
        seventhLabel: String,
        root: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        third: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        fifth: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        seventh: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        tensions: {
          nine: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          },
          eleven: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          },
          thirteen: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          }
        }
      },
      threeChord: {
        chordQuality: String,
        seventhQuality: String,
        triadName: String,
        triadLabel: String,
        seventhName: String,
        seventhLabel: String,
        root: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        third: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        fifth: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        seventh: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        tensions: {
          nine: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          },
          eleven: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          },
          thirteen: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          }
        }
      },
      fourChord: {
        chordQuality: String,
        seventhQuality: String,
        triadName: String,
        triadLabel: String,
        seventhName: String,
        seventhLabel: String,
        root: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        third: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        fifth: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        seventh: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        tensions: {
          nine: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          },
          eleven: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          },
          thirteen: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          }
        }
      },
      fiveChord: {
        chordQuality: String,
        seventhQuality: String,
        triadName: String,
        triadLabel: String,
        seventhName: String,
        seventhLabel: String,
        root: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        third: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        fifth: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        seventh: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        tensions: {
          nine: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          },
          eleven: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          },
          thirteen: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          }
        }
      },
      sixChord: {
        chordQuality: String,
        seventhQuality: String,
        triadName: String,
        triadLabel: String,
        seventhName: String,
        seventhLabel: String,
        root: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        third: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        fifth: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        seventh: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        tensions: {
          nine: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          },
          eleven: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          },
          thirteen: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          }
        }
      },
      sevenChord: {
        chordQuality: String,
        seventhQuality: String,
        triadName: String,
        triadLabel: String,
        seventhName: String,
        seventhLabel: String,
        root: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        third: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        fifth: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        seventh: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        tensions: {
          nine: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          },
          eleven: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          },
          thirteen: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          }
        }
      },
    }
  },
  naturalMinor: {
    scale: [String],
    chords: {
      oneChord: {
        chordQuality: String,
        seventhQuality: String,
        triadName: String,
        triadLabel: String,
        seventhName: String,
        seventhLabel: String,
        root: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        third: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        fifth: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        seventh: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        tensions: {
          nine: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          },
          eleven: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          },
          thirteen: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          }
        }
      },
      twoChord: {
        chordQuality: String,
        seventhQuality: String,
        triadName: String,
        triadLabel: String,
        seventhName: String,
        seventhLabel: String,
        root: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        third: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        fifth: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        seventh: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        tensions: {
          nine: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          },
          eleven: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          },
          thirteen: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          }
        }
      },
      threeChord: {
        chordQuality: String,
        seventhQuality: String,
        triadName: String,
        triadLabel: String,
        seventhName: String,
        seventhLabel: String,
        root: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        third: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        fifth: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        seventh: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        tensions: {
          nine: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          },
          eleven: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          },
          thirteen: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          }
        }
      },
      fourChord: {
        chordQuality: String,
        seventhQuality: String,
        triadName: String,
        triadLabel: String,
        seventhName: String,
        seventhLabel: String,
        root: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        third: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        fifth: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        seventh: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        tensions: {
          nine: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          },
          eleven: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          },
          thirteen: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          }
        }
      },
      fiveChord: {
        chordQuality: String,
        seventhQuality: String,
        triadName: String,
        triadLabel: String,
        seventhName: String,
        seventhLabel: String,
        root: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        third: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        fifth: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        seventh: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        tensions: {
          nine: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          },
          eleven: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          },
          thirteen: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          }
        }
      },
      sixChord: {
        chordQuality: String,
        seventhQuality: String,
        triadName: String,
        triadLabel: String,
        seventhName: String,
        seventhLabel: String,
        root: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        third: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        fifth: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        seventh: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        tensions: {
          nine: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          },
          eleven: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          },
          thirteen: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          }
        }
      },
      sevenChord: {
        chordQuality: String,
        seventhQuality: String,
        triadName: String,
        triadLabel: String,
        seventhName: String,
        seventhLabel: String,
        root: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        third: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        fifth: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        seventh: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        tensions: {
          nine: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          },
          eleven: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          },
          thirteen: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          }
        }
      },
    }
  },
  harmonicMinor: {
    scale: [String],
    chords: {
      oneChord: {
        chordQuality: String,
        seventhQuality: String,
        triadName: String,
        triadLabel: String,
        seventhName: String,
        seventhLabel: String,
        root: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        third: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        fifth: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        seventh: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        tensions: {
          nine: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          },
          eleven: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          },
          thirteen: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          }
        }
      },
      twoChord: {
        chordQuality: String,
        seventhQuality: String,
        triadName: String,
        triadLabel: String,
        seventhName: String,
        seventhLabel: String,
        root: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        third: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        fifth: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        seventh: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        tensions: {
          nine: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          },
          eleven: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          },
          thirteen: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          }
        }
      },
      threeChord: {
        chordQuality: String,
        seventhQuality: String,
        triadName: String,
        triadLabel: String,
        seventhName: String,
        seventhLabel: String,
        root: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        third: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        fifth: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        seventh: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        tensions: {
          nine: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          },
          eleven: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          },
          thirteen: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          }
        }
      },
      fourChord: {
        chordQuality: String,
        seventhQuality: String,
        triadName: String,
        triadLabel: String,
        seventhName: String,
        seventhLabel: String,
        root: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        third: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        fifth: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        seventh: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        tensions: {
          nine: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          },
          eleven: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          },
          thirteen: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          }
        }
      },
      fiveChord: {
        chordQuality: String,
        seventhQuality: String,
        triadName: String,
        triadLabel: String,
        seventhName: String,
        seventhLabel: String,
        root: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        third: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        fifth: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        seventh: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        tensions: {
          nine: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          },
          eleven: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          },
          thirteen: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          }
        }
      },
      sixChord: {
        chordQuality: String,
        seventhQuality: String,
        triadName: String,
        triadLabel: String,
        seventhName: String,
        seventhLabel: String,
        root: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        third: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        fifth: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        seventh: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        tensions: {
          nine: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          },
          eleven: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          },
          thirteen: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          }
        }
      },
      sevenChord: {
        chordQuality: String,
        seventhQuality: String,
        triadName: String,
        triadLabel: String,
        seventhName: String,
        seventhLabel: String,
        root: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        third: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        fifth: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        seventh: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        tensions: {
          nine: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          },
          eleven: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          },
          thirteen: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          }
        }
      },
    }
  },
  melodicMinor: {
    scale: [String],
    chords: {
      oneChord: {
        chordQuality: String,
        seventhQuality: String,
        triadName: String,
        triadLabel: String,
        seventhName: String,
        seventhLabel: String,
        root: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        third: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        fifth: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        seventh: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        tensions: {
          nine: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          },
          eleven: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          },
          thirteen: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          }
        }
      },
      twoChord: {
        chordQuality: String,
        seventhQuality: String,
        triadName: String,
        triadLabel: String,
        seventhName: String,
        seventhLabel: String,
        root: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        third: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        fifth: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        seventh: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        tensions: {
          nine: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          },
          eleven: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          },
          thirteen: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          }
        }
      },
      threeChord: {
        chordQuality: String,
        seventhQuality: String,
        triadName: String,
        triadLabel: String,
        seventhName: String,
        seventhLabel: String,
        root: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        third: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        fifth: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        seventh: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        tensions: {
          nine: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          },
          eleven: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          },
          thirteen: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          }
        }
      },
      fourChord: {
        chordQuality: String,
        seventhQuality: String,
        triadName: String,
        triadLabel: String,
        seventhName: String,
        seventhLabel: String,
        root: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        third: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        fifth: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        seventh: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        tensions: {
          nine: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          },
          eleven: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          },
          thirteen: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          }
        }
      },
      fiveChord: {
        chordQuality: String,
        seventhQuality: String,
        triadName: String,
        triadLabel: String,
        seventhName: String,
        seventhLabel: String,
        root: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        third: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        fifth: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        seventh: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        tensions: {
          nine: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          },
          eleven: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          },
          thirteen: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          }
        }
      },
      sixChord: {
        chordQuality: String,
        seventhQuality: String,
        triadName: String,
        triadLabel: String,
        seventhName: String,
        seventhLabel: String,
        root: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        third: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        fifth: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        seventh: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        tensions: {
          nine: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          },
          eleven: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          },
          thirteen: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          }
        }
      },
      sevenChord: {
        chordQuality: String,
        seventhQuality: String,
        triadName: String,
        triadLabel: String,
        seventhName: String,
        seventhLabel: String,
        root: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        third: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        fifth: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        seventh: {
          chordDegree: String,
          note: String,
          scaleDegree: String,
          solfege: String
        },
        tensions: {
          nine: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          },
          eleven: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          },
          thirteen: {
            note: String,
            chordDegree: String,
            scaleDegree: String,
            solfege: String,
            avoid: Boolean
          }
        }
      },
    }
  },

})