console.log("------------------Someone is requesting for the course data.--------------------------");
var courseData = {
            // Course Starts
            "data":
            {
              "id": "1",
                "introduction" : "welcome.wav",
                "menu" : "level_selection.wav"
            },
            // Levels
            "children" :
            [
                // Level 1
                {
                    "data" :
                    {
                      "id": "2",
                        "introduction" : "level_1_intro.wav",
                        "menu" : "level_1_menu.wav",
                    },
                    //Chapters
                    "children" :
                    [
                        //Chapter 1
                        {
                            "data" :
                            {
                              "id": "3",
                                "introduction" : "level_1_chapter_1_intro.wav",
                                "menu" : "level_1_chapter_1_menu.wav",
                            },
                            //Lessons
                            "children" :
                            [
                                // Lesson 1
                                {
                                    "data" :
                                    {
                                      "id": "4",
                                        "lesson": "level_1_chapter_1_lesson_1.wav",
                                    },
                                    "children" :
                                    [
                                    ],
                                },
                                // Lesson 2
                                {
                                    "data" :
                                    {
                                      "id": "5",
                                        "lesson": "level_1_chapter_1_lesson_2.wav",
                                    },
                                    "children" :
                                    [
                                    ],
                                }
                            ]
                        },
                        // Chapter 2
                        {
                            "data" :
                            {
                              "id": "6",
                                "introduction" : "level_1_chapter_2_intro.wav",
                                "menu" : "level_1_chapter_2_menu.wav",
                            },
                            //Lessons
                            "children" :
                            [
                                // Lesson 1
                                {
                                    "data" :
                                    {
                                      "id": "7",
                                        "lesson": "level_1_chapter_2_lesson_1.wav",
                                    },
                                    "children" :
                                    [
                                    ],
                                },
                                // Lesson 2
                                {
                                    "data" :
                                    {
                                      "id": "8",
                                        "lesson": "level_1_chapter_2_lesson_2.wav",
                                    },
                                    "children" :
                                    [
                                    ],
                                }
                            ]
                        }
                    ]
                },
                // Level 2
                {
                    "data" :
                    {
                      "id": "9",
                        "introduction" : "level_2_intro.wav",
                        "menu" : "level_2_menu.wav",
                    },
                    //Chapters
                    "children" :
                    [
                        //Chapter 1
                        {
                            "data" :
                            {
                              "id": "10",
                                "introduction" : "level_2_chapter_1_intro.wav",
                                "menu" : "level_2_chapter_1_menu.wav",
                            },
                            //Lessons
                            "children" :
                            [
                                // Lesson 1
                                {
                                    "data" :
                                    {
                                      "id": "11",
                                        "lesson": "level_2_chapter_1_lesson_1.wav",
                                    },
                                    "children" :
                                    [
                                    ],
                                },
                                // Lesson 2
                                {
                                    "data" :
                                    {
                                      "id": "12",
                                        "lesson": "level_2_chapter_1_lesson_2.wav",
                                    },
                                    "children" :
                                    [
                                    ],
                                }
                            ]
                        },
                        // Chapter 2
                        {
                            "data" :
                            {
                              "id": "13",
                                "introduction" : "level_2_chapter_2_intro.wav",
                                "menu" : "level_2_chapter_2_menu.wav",
                            },
                            //Lessons
                            "children" :
                            [
                                // Lesson 1
                                {
                                    "data" :
                                    {
                                      "id": "14",
                                        "lesson": "level_2_chapter_2_lesson_1.wav",
                                    },
                                    "children" :
                                    [
                                    ],
                                },
                                // Lesson 2
                                {
                                    "data" :
                                    {
                                      "id": "15",
                                        "lesson": "level_2_chapter_2_lesson_2.wav",
                                    },
                                    "children" :
                                    [
                                    ],
                                }
                            ]
                        }
                    ]
                }
            ]
            //Course Ends
    }
