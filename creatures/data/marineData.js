const marineData = [
    {
        "id": 1,
        "name": "Seaweed",
        "location": "Ocean",
        "shadow_size": "Large",
        "Swimming_pattern": "Stationary",
        "price": 600,
        "times": {
            "array": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            "text": "All Day"
        },
        "months": {
            "northern": {
                "array": [1, 2, 3, 4, 5, 6, 7, 10, 11, 12],
                "text": "October - July"
            },
            "southern": {
                "array": [1, 4, 5, 6, 7, 10, 11, 12],
                "text": "April - January"
            }
            
        }
    },
    {
        "id": 2,
        "name": "Sea grapes",
        "location": "Ocean",
        "shadow_size": "Small",
        "Swimming_pattern": "Stationary",
        "price": 900,
        "times": {
            "array": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            "text": "All Day"
        },
        "months": {
            "northern": {
                "array": [6, 7, 8, 9],
                "text": "June - September"
            },
            "southern": {
                "array": [1, 2, 3, 12],
                "text": "December - March"
            }
            
        }
    },
    {
        "id": 3,
        "name": "Sea cucumber",
        "location": "Ocean",
        "shadow_size": "Medium",
        "Swimming_pattern": "Slow consistent movement",
        "price": 500,
        "times": {
            "array": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            "text": "All Day"
        },
        "months": {
            "northern": {
                "array": [1, 2, 3, 4, 11, 12],
                "text": "November - April"
            },
            "southern": {
                "array": [5, 6, 7, 8, 9, 10],
                "text": "May - October"
            }
            
        }
    },
    {
        "id": 4,
        "name": "Sea pig",
        "location": "Ocean",
        "shadow_size": "Small",
        "Swimming_pattern": "Quick long lunges",
        "price": 10000,
        "times": {
            "array": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 16, 17, 18, 19, 20, 21, 22, 23],
            "text": "4pm - 9am"
        },
        "months": {
            "northern": {
                "array": [1, 2, 11, 12],
                "text": "November - February"
            },
            "southern": {
                "array": [5, 6, 7, 8],
                "text": "May - August"
            }
            
        }
    },
    {
        "id": 5,
        "name": "Sea star",
        "location": "Ocean",
        "shadow_size": "Small",
        "Swimming_pattern": "Slow short lunges",
        "price": 500,
        "times": {
            "array": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            "text": "All Day"
        },
        "months": {
            "northern": {
                "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                "text": "All Year"
            },
            "southern": {
                "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                "text": "All Year"
            }
            
        }
    },
    {
        "id": 6,
        "name": "Sea urchin",
        "location": "Ocean",
        "shadow_size": "Small",
        "Swimming_pattern": "Slow consistent movement",
        "price": 1700,
        "times": {
            "array": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            "text": "All Day"
        },
        "months": {
            "northern": {
                "array": [5, 6, 7, 8, 9],
                "text": "May - September"
            },
            "southern": {
                "array": [1, 2, 3, 11, 12],
                "text": "November - March"
            }
            
        }
    },
    {
        "id": 7,
        "name": "Slate pencil urchin",
        "location": "Ocean",
        "shadow_size": "Medium",
        "Swimming_pattern": "Moderate consistent movement",
        "price": 2000,
        "times": {
            "array": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 16, 17, 18, 19, 20, 21, 22, 23],
            "text": "4pm - 9am"
        },
        "months": {
            "northern": {
                "array": [5, 6, 7, 8, 9],
                "text": "May - September"
            },
            "southern": {
                "array": [1, 2, 3, 11, 12],
                "text": "November - March"
            }
            
        }
    },
    {
        "id": 8,
        "name": "Sea anemone",
        "location": "Ocean",
        "shadow_size": "Large",
        "Swimming_pattern": "Stationary",
        "price": 500,
        "times": {
            "array": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            "text": "All Day"
        },
        "months": {
            "northern": {
                "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                "text": "All Year"
            },
            "southern": {
                "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                "text": "All Year"
            }
            
        }
    },
    {
        "id": 9,
        "name": "Moon jellyfish",
        "location": "Ocean",
        "shadow_size": "Small",
        "Swimming_pattern": "Slow consistent movement",
        "price": 600,
        "times": {
            "array": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            "text": "All Day"
        },
        "months": {
            "northern": {
                "array": [7, 8, 9],
                "text": "July - September"
            },
            "southern": {
                "array": [1, 2, 3],
                "text": "January - March"
            }
            
        }
    },
    {
        "id": 10,
        "name": "Sea slug",
        "location": "Ocean",
        "shadow_size": "Tiny",
        "Swimming_pattern": "Slow consistent movement",
        "price": 600,
        "times": {
            "array": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            "text": "All Day"
        },
        "months": {
            "northern": {
                "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                "text": "All Year"
            },
            "southern": {
                "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                "text": "All Year"
            }
            
        }
    },

    {
        "id": 11,
        "name": "Pearl oyster",
        "location": "Ocean",
        "shadow_size": "Small",
        "Swimming_pattern": "Moderate long lunges",
        "price": 2800,
        "times": {
            "array": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            "text": "All Day"
        },
        "months": {
            "northern": {
                "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                "text": "All Year"
            },
            "southern": {
                "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                "text": "All Year"
            }
            
        }
    },
    {
        "id": 12,
        "name": "Mussel",
        "location": "Ocean",
        "shadow_size": "Small",
        "Swimming_pattern": "Slow consistent movement",
        "price": 1500,
        "times": {
            "array": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            "text": "All Day"
        },
        "months": {
            "northern": {
                "array": [6, 7, 8, 9, 10, 11, 12],
                "text": "June - December"
            },
            "southern": {
                "array": [1, 2, 3, 4, 5, 6, 12],
                "text": "December - June"
            }
            
        }
    },
    {
        "id": 13,
        "name": "Oyster",
        "location": "Ocean",
        "shadow_size": "Small",
        "Swimming_pattern": "Moderate long lunges",
        "price": 1100,
        "times": {
            "array": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            "text": "All Day"
        },
        "months": {
            "northern": {
                "array": [1, 2, 9, 10, 11, 12],
                "text": "September - February"
            },
            "southern": {
                "array": [3, 4, 5, 6, 7, 8],
                "text": "March - August"
            }
            
        }
    },
    {
        "id": 14,
        "name": "Scallop",
        "location": "Ocean",
        "shadow_size": "Medium",
        "Swimming_pattern": "Slow long lunges",
        "price": 1200,
        "times": {
            "array": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            "text": "All Day"
        },
        "months": {
            "northern": {
                "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                "text": "All Year"
            },
            "southern": {
                "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                "text": "All Year"
            }
            
        }
    },
    {
        "id": 15,
        "name": "Whelk",
        "location": "Ocean",
        "shadow_size": "Small",
        "Swimming_pattern": "Slow consistent movement",
        "price": 1000,
        "times": {
            "array": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            "text": "All Day"
        },
        "months": {
            "northern": {
                "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                "text": "All Year"
            },
            "southern": {
                "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                "text": "All Year"
            }
            
        }
    },
    {
        "id": 16,
        "name": "Turban shell",
        "location": "Ocean",
        "shadow_size": "Small",
        "Swimming_pattern": "Slow",
        "price": 1000,
        "times": {
            "array": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            "text": "All Day"
        },
        "months": {
            "northern": {
                "array": [3, 4, 5, 9, 10, 11, 12],
                "text": "March - May, September - December"
            },
            "southern": {
                "array": [3, 4, 5, 6, 9, 10, 11],
                "text": "March - June, September - November"
            }
            
        }
    },
    {
        "id": 17,
        "name": "Abalone",
        "location": "Ocean",
        "shadow_size": "Medium",
        "Swimming_pattern": "Moderate consistent movement",
        "price": 2000,
        "times": {
            "array": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 16, 17, 18, 19, 20, 21, 22, 23],
            "text": "4pm - 9am"
        },
        "months": {
            "northern": {
                "array": [1, 6, 7, 8, 9, 10, 11, 12],
                "text": "June - January"
            },
            "southern": {
                "array": [1, 2, 3, 4, 5, 6, 7, 12],
                "text": "December - July"
            }
            
        }
    },
    {
        "id": 18,
        "name": "Gigas giant clam",
        "location": "Ocean",
        "shadow_size": "Huge",
        "Swimming_pattern": "Quick long lunges",
        "price": 15000,
        "times": {
            "array": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            "text": "All Day"
        },
        "months": {
            "northern": {
                "array": [5, 6, 7, 8, 9],
                "text": "May - September"
            },
            "southern": {
                "array": [1, 2, 3, 11, 12],
                "text": "November - March"
            }
            
        }
    },
    {
        "id": 19,
        "name": "Chambered nautilus",
        "location": "Ocean",
        "shadow_size": "Medium",
        "Swimming_pattern": "Slow",
        "price": 1800,
        "times": {
            "array": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 16, 17, 18, 19, 20, 21, 22, 23],
            "text": "4pm - 9am"
        },
        "months": {
            "northern": {
                "array": [3, 4, 5, 6, 9, 10, 11],
                "text": "March - June, September - November"
            },
            "southern": {
                "array": [3, 4, 5, 9, 10, 11],
                "text": "March - May, September - November"
            }
            
        }
    },
    {
        "id": 20,
        "name": "Octopus",
        "location": "Ocean",
        "shadow_size": "Medium",
        "Swimming_pattern": "Moderate long lunges",
        "price": 1200,
        "times": {
            "array": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            "text": "All Day"
        },
        "months": {
            "northern": {
                "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                "text": "All Year"
            },
            "southern": {
                "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                "text": "All Year"
            }
            
        }
    },

    {
        "id": 21,
        "name": "Umbrella octopus",
        "location": "Ocean",
        "shadow_size": "Small",
        "Swimming_pattern": "Quick long lunges",
        "price": 6000,
        "times": {
            "array": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            "text": "All Day"
        },
        "months": {
            "northern": {
                "array": [3, 4, 5, 9, 10, 11],
                "text": "March - May, September - November"
            },
            "southern": {
                "array": [3, 4, 5, 9, 10, 11],
                "text": "March - May, September - November"
            }
            
        }
    },
    {
        "id": 22,
        "name": "Vampire squid",
        "location": "Ocean",
        "shadow_size": "Medium",
        "Swimming_pattern": "Quick long lunges",
        "price": 10000,
        "times": {
            "array": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 16, 17, 18, 19, 20, 21, 22, 23],
            "text": "4pm - 9am"
        },
        "months": {
            "northern": {
                "array": [5, 6, 7, 8],
                "text": "May - August"
            },
            "southern": {
                "array": [1, 2, 11, 12],
                "text": "November - February"
            }
            
        }
        
    },
    {
        "id": 23,
        "name": "Firefly squid",
        "location": "Ocean",
        "shadow_size": "Tiny",
        "Swimming_pattern": "Slow",
        "price": 1400,
        "times": {
            "array": [0, 1, 2, 3, 4, 21, 22, 23],
            "text": "9pm - 4am"
        },
        "months": {
            "northern": {
                "array": [3, 4, 5, 6],
                "text": "March - June"
            },
            "southern": {
                "array": [9, 10, 11, 12],
                "text": "September - December"
            }
            
        }
    },
    {
        "id": 24,
        "name": "Gazami crab",
        "location": "Ocean",
        "shadow_size": "Medium",
        "Swimming_pattern": "Moderate long lunges",
        "price": 2200,
        "times": {
            "array": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            "text": "All Day"
        },
        "months": {
            "northern": {
                "array": [6, 7, 8, 9, 10, 11],
                "text": "June - November"
            },
            "southern": {
                "array": [1, 2, 3, 4, 5, 12],
                "text": "December - May"
            }
            
        }
    },
    {
        "id": 25,
        "name": "Dungeness crab",
        "location": "Ocean",
        "shadow_size": "Medium",
        "Swimming_pattern": "Moderate consistent movement",
        "price": 1900,
        "times": {
            "array": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            "text": "All Day"
        },
        "months": {
            "northern": {
                "array": [1, 2, 3, 4, 5, 11, 12],
                "text": "November - May"
            },
            "southern": {
                "array": [1, 2, 3, 4, 5, 11, 12],
                "text": "November - May"
            }
            
        }
    },
    {
        "id": 26,
        "name": "Snow crab",
        "location": "Ocean",
        "shadow_size": "Large",
        "Swimming_pattern": "Quick short lunges",
        "price": 6000,
        "times": {
            "array": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            "text": "All Day"
        },
        "months": {
            "northern": {
                "array": [1, 2, 3, 4, 11, 12],
                "text": "November - April"
            },
            "southern": {
                "array": [5, 6, 7, 8, 9, 10],
                "text": "May - October"
            }
            
        }
    },
    {
        "id": 27,
        "name": "Red king crab",
        "location": "Ocean",
        "shadow_size": "Large",
        "Swimming_pattern": "Quick",
        "price": 8000,
        "times": {
            "array": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            "text": "All Day"
        },
        "months": {
            "northern": {
                "array": [1, 2, 3, 11, 12],
                "text": "November - March"
            },
            "southern": {
                "array": [5, 6, 7, 8, 9],
                "text": "May - September"
            }
            
        }
    },
    {
        "id": 28,
        "name": "Acorn barnacle",
        "location": "Ocean",
        "shadow_size": "Tiny",
        "Swimming_pattern": "Stationary",
        "price": 600,
        "times": {
            "array": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            "text": "All Day"
        },
        "months": {
            "northern": {
                "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                "text": "All Year"
            },
            "southern": {
                "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                "text": "All Year"
            }
            
        }
    },
    {
        "id": 29,
        "name": "Spider crab",
        "location": "Ocean",
        "shadow_size": "Huge",
        "Swimming_pattern": "Quick",
        "price": 12000,
        "times": {
            "array": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            "text": "All Day"
        },
        "months": {
            "northern": {
                "array": [3, 4],
                "text": "March - April"
            },
            "southern": {
                "array": [9, 10],
                "text": "September - October"
            }
            
        }
    },
    {
        "id": 30,
        "name": "Tiger prawn",
        "location": "Ocean",
        "shadow_size": "Small",
        "Swimming_pattern": "Moderate consistent movement",
        "price": 3000,
        "times": {
            "array": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 16, 17, 18, 19, 20, 21, 22, 23],
            "text": "4pm - 9am"
        },
        "months": {
            "northern": {
                "array": [6, 7, 8, 9],
                "text": "June - September"
            },
            "southern": {
                "array": [1, 2, 3, 12],
                "text": "December - March"
            }
            
        }
    },

    {
        "id": 31,
        "name": "Sweet shrimp",
        "location": "Ocean",
        "shadow_size": "Small",
        "Swimming_pattern": "Slow movement",
        "price": 1400,
        "times": {
            "array": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 16, 17, 18, 19, 20, 21, 22, 23],
            "text": "4pm - 9am"
        },
        "months": {
            "northern": {
                "array": [1, 2, 9, 10, 11, 12],
                "text": "September - February"
            },
            "southern": {
                "array": [3, 4, 5, 6, 7, 8],
                "text": "March - August"
            }
            
        }
    },
    {
        "id": 32,
        "name": "Mantis shrimp",
        "location": "Ocean",
        "shadow_size": "Small",
        "Swimming_pattern": "Quick short lunges",
        "price": 2500,
        "times": {
            "array": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 16, 17, 18, 19, 20, 21, 22, 23],
            "text": "4pm - 9am"
        },
        "months": {
            "northern": {
                "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                "text": "All Year"
            },
            "southern": {
                "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                "text": "All Year"
            }
            
        }
    },
    {
        "id": 33,
        "name": "Spiny lobster",
        "location": "Ocean",
        "shadow_size": "Large",
        "Swimming_pattern": "Fast",
        "price": 5000,
        "times": {
            "array": [0, 1, 2, 3, 4, 21, 22, 23],
            "text": "9pm - 4am"
        },
        "months": {
            "northern": {
                "array": [10, 11, 12],
                "text": "October - December"
            },
            "southern": {
                "array": [4, 5, 6],
                "text": "April - June"
            }
            
        }
    },
    {
        "id": 34,
        "name": "Lobster",
        "location": "Ocean",
        "shadow_size": "Large",
        "Swimming_pattern": "Quick",
        "price": 4500,
        "times": {
            "array": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            "text": "All Day"
        },
        "months": {
            "northern": {
                "array": [1, 4, 5, 6, 12],
                "text": "December - January, April - June"
            },
            "southern": {
                "array": [6, 7, 10, 11, 12],
                "text": "June - July, October - December"
            }
            
        }
    },
    {
        "id": 35,
        "name": "Giant isopod",
        "location": "Ocean",
        "shadow_size": "Medium",
        "Swimming_pattern": "Quick long lunges",
        "price": 12000,
        "times": {
            "array": [0, 1, 2, 3, 4, 9, 10, 11, 12, 13, 14, 15, 16, 21, 22, 23],
            "text": "9am - 4pm, 9pm - 4am"
        },
        "months": {
            "northern": {
                "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                "text": "July - October"
            },
            "southern": {
                "array": [1, 2, 3, 4],
                "text": "January - April"
            }
            
        }
    },
    {
        "id": 36,
        "name": "Horseshoe crab",
        "location": "Ocean",
        "shadow_size": "Medium",
        "Swimming_pattern": "Quick short lunges",
        "price": 2500,
        "times": {
            "array": [0, 1, 2, 3, 4, 21, 22, 23],
            "text": "9pm - 4am"
        },
        "months": {
            "northern": {
                "array": [7, 8, 9],
                "text": "July - September"
            },
            "southern": {
                "array": [1, 2, 3],
                "text": "January - March"
            }
            
        }
    },
    {
        "id": 37,
        "name": "Sea pineapple",
        "location": "Ocean",
        "shadow_size": "Small",
        "Swimming_pattern": "Slow long lunges",
        "price": 1500,
        "times": {
            "array": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            "text": "All Day"
        },
        "months": {
            "northern": {
                "array": [4, 5, 6, 7, 8],
                "text": "Avril - August"
            },
            "southern": {
                "array": [1, 2, 10, 11, 12],
                "text": "October - February"
            }
            
        }
    },
    {
        "id": 38,
        "name": "Spotted garden eel",
        "location": "Ocean",
        "shadow_size": "Small",
        "Swimming_pattern": "Slow consistent movement",
        "price": 1100,
        "times": {
            "array": [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
            "text": "4am - 9pm"
        },
        "months": {
            "northern": {
                "array": [5, 6, 7, 8, 9, 10],
                "text": "May - October"
            },
            "southern": {
                "array": [1, 2, 3, 4, 11, 12],
                "text": "November - April"
            }
            
        }
    },
    {
        "id": 39,
        "name": "Flatworm",
        "location": "Ocean",
        "shadow_size": "Tiny",
        "Swimming_pattern": "Slow short movement",
        "price": 700,
        "times": {
            "array": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 16, 17, 18, 19, 20, 21, 22, 23],
            "text": "4pm - 9am"
        },
        "months": {
            "northern": {
                "array": [8, 9],
                "text": "August - September"
            },
            "southern": {
                "array": [2, 3],
                "text": "February - March"
            }
            
        }
    },
    {
        "id": 40,
        "name": "Venus flower basket",
        "location": "Ocean",
        "shadow_size": "Medium",
        "Swimming_pattern": "Quick long lunges",
        "price": 5000,
        "times": {
            "array": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            "text": "All Day"
        },
        "months": {
            "northern": {
                "array": [1, 2, 10, 11, 12],
                "text": "October - February"
            },
            "southern": {
                "array": [4, 5, 6, 7, 8],
                "text": "April - August"
            }
            
        }
    }
    
        
]