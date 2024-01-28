import style from "../styles/Mentee.module.css";
import DeleteButton from "./deleteButton";

const Formm = ({ inputFields, setInputFields }) => {
  const addSkills = () => {
    setInputFields((prevInputFields) => ({
      ...prevInputFields,
      skills: [...prevInputFields.skills, { skill: "", experience: "" }],
    }));
  };

  const addEducation = () => {
    setInputFields((prevInputFields) => ({
      ...prevInputFields,
      education: [...prevInputFields.education, { name: "", year: "" }],
    }));
  };
  const addfamily = () => {
    setInputFields((prevInputFields) => ({
      ...prevInputFields,
      family: [...prevInputFields.family, { fatherName: "", motherName: "" }],
    }));
  };
  const addObservation = () => {
    setInputFields((prevInputFields) => ({
      ...prevInputFields,
      observation: [...prevInputFields.observation, ""],
    }));
  };
  const addExperience = () => {
    setInputFields((prevInputFields) => ({
      ...prevInputFields,
      experience: [...prevInputFields.experience, ""],
    }));
  };

  const addRemarks = () => {
    setInputFields((prevInputFields) => ({
      ...prevInputFields,
      remarks: [...prevInputFields.remarks, ""],
    }));
  };

  const addSuggestions = () => {
    setInputFields((prevInputFields) => ({
      ...prevInputFields,
      suggestions: [...prevInputFields.suggestions, ""],
    }));
  };

  const addAspiration = () => {
    setInputFields((prevInputFields) => ({
      ...prevInputFields,
      aspiration: [...prevInputFields.aspiration, ""],
    }));
  };

  const addThoughtsAboutMentee = () => {
    setInputFields((prevInputFields) => ({
      ...prevInputFields,
      thoughtsAboutMentee: [...prevInputFields.thoughtsAboutMentee, ""],
    }));
  };

  const addWeakness = () => {
    setInputFields((prevInputFields) => ({
      ...prevInputFields,
      weakness: [...prevInputFields.weakness, ""],
    }));
  };

  const addStrength = () => {
    setInputFields((prevInputFields) => ({
      ...prevInputFields,
      strenght: [...prevInputFields.strenght, ""],
    }));
  };

  const addLocation = () => {
    setInputFields((prevInputFields) => ({
      ...prevInputFields,
      location: [...prevInputFields.location, { city: "", country: "" }],
    }));
  };

  const addInterview = () => {
    setInputFields((prevInputFields) => ({
      ...prevInputFields,
      interview: [
        ...prevInputFields.interview,
        { interview: "", year: "", location: "" },
      ],
    }));
  };
  const addSalary = () => {
    setInputFields((prevInputFields) => ({
      ...prevInputFields,
      salary: [...prevInputFields.salary, { year: 0, salary: 0 }],
    }));
  };

  const addGoal = () => {
    setInputFields((prevInputFields) => ({
      ...prevInputFields,
      goal: [...prevInputFields.goal, { goalName: "", year: 0 }],
    }));
  };
  const addDiscussion = () => {
    setInputFields((prevInputFields) => ({
      ...prevInputFields,
      discussion: [...prevInputFields.discussion, ""],
    }));
  };
  return (
    <>
      <div className={style.container}>
        <p className={style.name}> Skills</p>
        {inputFields.skills.map((skill, index) => {
          return (
            <div className={style.container1}>
              <input
                type="text"
                name="skill"
                placeholder="Skill"
                className={style.input}
                value={skill.skill}
                onChange={(e) => {
                  setInputFields((prevInputFields) => ({
                    ...prevInputFields,
                    skills: prevInputFields.skills.map((skill, skillIndex) =>
                      skillIndex === index
                        ? {
                            ...skill,
                            [event.target.name]: event.target.value,
                          }
                        : skill
                    ),
                  }));
                }}
              />
              <input
                type="text"
                name="experience"
                placeholder="experience"
                className={style.input}
                value={skill.experience}
                onChange={(e) => {
                  setInputFields((prevInputFields) => ({
                    ...prevInputFields,
                    skills: prevInputFields.skills.map((skill, skillIndex) =>
                      skillIndex === index
                        ? {
                            ...skill,
                            [event.target.name]: event.target.value,
                          }
                        : skill
                    ),
                  }));
                }}
              />
              <DeleteButton
                obj="skills"
                inputFields={inputFields}
                setInputFields={setInputFields}
                index={index}
              />
            </div>
          );
        })}
        <button onClick={addSkills} className={style.button}>
          Add Skills +{" "}
        </button>
      </div>
      {/* education */}
      <div className={style.container}>
        <p className={style.name}> Education</p>
        {inputFields.education.map((edu, index) => (
          <div key={index} className={style.container1}>
            <input
              type="text"
              name="name"
              placeholder="Education Name"
              className={style.input}
              value={edu.name}
              onChange={(e) => {
                setInputFields((prevInputFields) => ({
                  ...prevInputFields,
                  education: prevInputFields.education.map((eu, i) =>
                    i === index ? { ...eu, name: e.target.value } : eu
                  ),
                }));
              }}
            />
            <input
              type="number"
              name="year"
              placeholder="Year"
              className={style.input}
              value={edu.year}
              onChange={(e) => {
                setInputFields((prevInputFields) => ({
                  ...prevInputFields,
                  education: prevInputFields.education.map((eu, i) =>
                    i === index ? { ...eu, year: parseInt(e.target.value) } : eu
                  ),
                }));
              }}
            />
            <DeleteButton
              obj="education"
              inputFields={inputFields}
              setInputFields={setInputFields}
              index={index}
            />
          </div>
        ))}
        <button onClick={addEducation} className={style.button}>
          Add Education +
        </button>
      </div>
      {/* Location */}
      <div className={style.container}>
        <p className={style.name}> Location</p>
        {inputFields.location.map((location, index) => (
          <div key={index} className={style.container1}>
            <input
              type="text"
              name="city"
              placeholder="City"
              className={style.input}
              value={location.city}
              onChange={(e) => {
                setInputFields((prevInputFields) => ({
                  ...prevInputFields,
                  location: prevInputFields.location.map((l, i) =>
                    i === index ? { ...l, city: e.target.value } : l
                  ),
                }));
              }}
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              className={style.input}
              value={location.country}
              onChange={(e) => {
                setInputFields((prevInputFields) => ({
                  ...prevInputFields,
                  location: prevInputFields.location.map((l, i) =>
                    i === index ? { ...l, country: e.target.value } : l
                  ),
                }));
              }}
            />
            <DeleteButton
              obj="location"
              inputFields={inputFields}
              setInputFields={setInputFields}
              index={index}
            />
          </div>
        ))}
        <button onClick={addLocation} className={style.button}>
          Add Location +
        </button>
      </div>
      {/* Interview */}
      <div className={style.container}>
        <p className={style.name}> Interview</p>
        {inputFields.interview.map((interview, index) => (
          <div key={index} className={style.container1}>
            <input
              type="text"
              name="date"
              placeholder="Interview Date"
              className={style.input}
              value={interview.interview}
              onChange={(e) => {
                setInputFields((prevInputFields) => ({
                  ...prevInputFields,
                  interview: prevInputFields.interview.map((i, j) =>
                    j === index ? { ...i, interview: e.target.value } : i
                  ),
                }));
              }}
            />

            <input
              type="text"
              name="date"
              placeholder="Interview year"
              className={style.input}
              value={interview.year}
              onChange={(e) => {
                setInputFields((prevInputFields) => ({
                  ...prevInputFields,
                  interview: prevInputFields.interview.map((i, j) =>
                    j === index ? { ...i, year: e.target.value } : i
                  ),
                }));
              }}
            />
            <input
              type="text"
              name="time"
              placeholder="Interview Time"
              className={style.input}
              value={interview.location}
              onChange={(e) => {
                setInputFields((prevInputFields) => ({
                  ...prevInputFields,
                  interview: prevInputFields.interview.map((i, j) =>
                    j === index ? { ...i, location: e.target.value } : i
                  ),
                }));
              }}
            />
            <DeleteButton
              obj="interview"
              inputFields={inputFields}
              setInputFields={setInputFields}
              index={index}
            />
          </div>
        ))}
        <button onClick={addInterview} className={style.button}>
          Add Interview +
        </button>
      </div>
      {/* Salary */}
      <div className={style.container}>
        <p className={style.name}> Salary</p>
        {inputFields.salary.map((salary, index) => (
          <div key={index} className={style.container1}>
            <input
              type="number"
              name="year"
              placeholder="Year"
              className={style.input}
              value={salary.year}
              onChange={(e) => {
                setInputFields((prevInputFields) => ({
                  ...prevInputFields,
                  salary: prevInputFields.salary.map((s, i) =>
                    i === index ? { ...s, year: parseInt(e.target.value) } : s
                  ),
                }));
              }}
            />
            <input
              type="number"
              name="salary"
              placeholder="Salary"
              className={style.input}
              value={salary.salary}
              onChange={(e) => {
                setInputFields((prevInputFields) => ({
                  ...prevInputFields,
                  salary: prevInputFields.salary.map((s, i) =>
                    i === index ? { ...s, salary: parseInt(e.target.value) } : s
                  ),
                }));
              }}
            />
            <DeleteButton
              obj="salary"
              inputFields={inputFields}
              setInputFields={setInputFields}
              index={index}
            />
          </div>
        ))}
        <button onClick={addSalary} className={style.button}>
          Add Salary +
        </button>
      </div>
      {/* Goals */}
      <div className={style.container}>
        <p className={style.name}> Goals</p>
        {inputFields.goal.map((goal, index) => (
          <div key={index} className={style.container1}>
            <input
              type="text"
              name="goalName"
              placeholder="Goal Name"
              className={style.input}
              value={goal.goalName}
              onChange={(e) => {
                setInputFields((prevInputFields) => ({
                  ...prevInputFields,
                  goal: prevInputFields.goal.map((g, i) =>
                    i === index ? { ...g, goalName: e.target.value } : g
                  ),
                }));
              }}
            />
            <input
              type="number"
              name="year"
              placeholder="Year"
              className={style.input}
              value={goal.year}
              onChange={(e) => {
                setInputFields((prevInputFields) => ({
                  ...prevInputFields,
                  goal: prevInputFields.goal.map((g, i) =>
                    i === index ? { ...g, year: parseInt(e.target.value) } : g
                  ),
                }));
              }}
            />
            <DeleteButton
              obj="goal"
              inputFields={inputFields}
              setInputFields={setInputFields}
              index={index}
            />
          </div>
        ))}
        <button onClick={addGoal} className={style.button}>
          Add Goal +
        </button>
      </div>
      {/* Discussion */}
      <div className={style.container}>
        <p className={style.name}> Discussion</p>
        {inputFields.discussion.map((discussion, index) => (
          <div key={index} className={style.container1}>
            <input
              type="text"
              name="discussion"
              placeholder={`Discussion ${index + 1}`}
              value={discussion}
              className={style.input}
              onChange={(e) => {
                setInputFields((prevInputFields) => ({
                  ...prevInputFields,
                  discussion: prevInputFields.discussion.map((d, i) =>
                    i === index ? e.target.value : d
                  ),
                }));
              }}
            />
            <DeleteButton
              obj="discussion"
              inputFields={inputFields}
              setInputFields={setInputFields}
              index={index}
            />
          </div>
        ))}
        <button onClick={addDiscussion} className={style.button}>
          Add Discussion +
        </button>
      </div>
      {/* Strength */}
      <div className={style.container}>
        <p className={style.name}> Strength</p>
        {inputFields.strenght.map((item, index) => (
          <div key={index} className={style.container1}>
            <input
              type="text"
              name="strength"
              placeholder={`strenght ${index + 1}`}
              className={style.input}
              value={item}
              onChange={(e) => {
                setInputFields((prevInputFields) => ({
                  ...prevInputFields,
                  strenght: prevInputFields.strenght.map((s, i) =>
                    i === index ? e.target.value : s
                  ),
                }));
              }}
            />
            <DeleteButton
              obj="strenght"
              inputFields={inputFields}
              setInputFields={setInputFields}
              index={index}
            />
          </div>
        ))}
        <button onClick={addStrength} className={style.button}>
          Add Strength +
        </button>
      </div>
      {/* Weakness */}
      <div className={style.container}>
        <p className={style.name}> Weakness</p>
        {inputFields.weakness.map((item, index) => (
          <div key={index} className={style.container1}>
            <input
              type="text"
              name="weakness"
              placeholder={`Weakness ${index + 1}`}
              className={style.input}
              value={item}
              onChange={(e) => {
                setInputFields((prevInputFields) => ({
                  ...prevInputFields,
                  weakness: prevInputFields.weakness.map((w, i) =>
                    i === index ? e.target.value : w
                  ),
                }));
              }}
            />
            <DeleteButton
              obj="weakness"
              inputFields={inputFields}
              setInputFields={setInputFields}
              index={index}
            />
          </div>
        ))}
        <button onClick={addWeakness} className={style.button}>
          Add Weakness +
        </button>
      </div>
      {/* Thoughts About Mentee */}
      <div className={style.container}>
        <p className={style.name}> thoughts About Mentee</p>
        {inputFields.thoughtsAboutMentee.map((item, index) => (
          <div key={index} className={style.container1}>
            <input
              type="text"
              name="thoughtsAboutMentee"
              placeholder={`Thoughts About Mentee ${index + 1}`}
              className={style.input}
              value={item}
              onChange={(e) => {
                setInputFields((prevInputFields) => ({
                  ...prevInputFields,
                  thoughtsAboutMentee: prevInputFields.thoughtsAboutMentee.map(
                    (t, i) => (i === index ? e.target.value : t)
                  ),
                }));
              }}
            />
            <DeleteButton
              obj="thoughtsAboutMentee"
              inputFields={inputFields}
              setInputFields={setInputFields}
              index={index}
            />
          </div>
        ))}
        <button onClick={addThoughtsAboutMentee} className={style.button}>
          Add Thoughts About Mentee +
        </button>
      </div>
      {/* Aspiration */}
      <div className={style.container}>
        <p className={style.name}> Aspiration</p>
        {inputFields.aspiration.map((item, index) => (
          <div key={index} className={style.container1}>
            <input
              type="text"
              name="aspiration"
              placeholder={`Aspiration ${index + 1}`}
              className={style.input}
              value={item}
              onChange={(e) => {
                setInputFields((prevInputFields) => ({
                  ...prevInputFields,
                  aspiration: prevInputFields.aspiration.map((a, i) =>
                    i === index ? e.target.value : a
                  ),
                }));
              }}
            />
            <DeleteButton
              obj="aspiration"
              inputFields={inputFields}
              setInputFields={setInputFields}
              index={index}
            />
          </div>
        ))}
        <button onClick={addAspiration} className={style.button}>
          Add Aspiration +
        </button>
      </div>
      {/* Suggestions */}
      <div className={style.container}>
        <p className={style.name}> Suggestions</p>
        {inputFields.suggestions.map((item, index) => (
          <div key={index} className={style.container1}>
            <input
              type="text"
              name="suggestions"
              placeholder={`Suggestions ${index + 1}`}
              className={style.input}
              value={item}
              onChange={(e) => {
                setInputFields((prevInputFields) => ({
                  ...prevInputFields,
                  suggestions: prevInputFields.suggestions.map((s, i) =>
                    i === index ? e.target.value : s
                  ),
                }));
              }}
            />
            <DeleteButton
              obj="suggestions"
              inputFields={inputFields}
              setInputFields={setInputFields}
              index={index}
            />
          </div>
        ))}
        <button onClick={addSuggestions} className={style.button}>
          Add Suggestions +
        </button>
      </div>
      {/* Remarks */}
      <div className={style.container}>
        <p className={style.name}> Remarks</p>
        {inputFields.remarks.map((item, index) => (
          <div key={index} className={style.container1}>
            <input
              type="text"
              name="remarks"
              placeholder={`Remarks ${index + 1}`}
              className={style.input}
              value={item}
              onChange={(e) => {
                setInputFields((prevInputFields) => ({
                  ...prevInputFields,
                  remarks: prevInputFields.remarks.map((r, i) =>
                    i === index ? e.target.value : r
                  ),
                }));
              }}
            />
            <DeleteButton
              obj="remarks"
              inputFields={inputFields}
              setInputFields={setInputFields}
              index={index}
            />
          </div>
        ))}
        <button onClick={addRemarks} className={style.button}>
          Add Remarks +
        </button>
      </div>
      {/* Observation */}
      <div className={style.container}>
        <p className={style.name}> observation</p>
        {inputFields.observation.map((item, index) => (
          <div key={index} className={style.container1}>
            <input
              type="text"
              name="observation"
              placeholder={`Observation ${index + 1}`}
              className={style.input}
              value={item}
              onChange={(e) => {
                setInputFields((prevInputFields) => ({
                  ...prevInputFields,
                  observation: prevInputFields.observation.map((o, i) =>
                    i === index ? e.target.value : o
                  ),
                }));
              }}
            />
            <DeleteButton
              obj="observation"
              inputFields={inputFields}
              setInputFields={setInputFields}
              index={index}
            />
          </div>
        ))}
        <button onClick={addObservation} className={style.button}>
          Add Observation +
        </button>
      </div>

      {/* experience */}
      <div className={style.container}>
        <p className={style.name}> experience</p>
        {inputFields.experience.map((item, index) => (
          <div key={index} className={style.container1}>
            <input
              type="text"
              name="experience"
              placeholder={`experience ${index + 1}`}
              className={style.input}
              value={item}
              onChange={(e) => {
                setInputFields((prevInputFields) => ({
                  ...prevInputFields,
                  experience: prevInputFields.experience.map((o, i) =>
                    i === index ? e.target.value : o
                  ),
                }));
              }}
            />
            <DeleteButton
              obj="experience"
              inputFields={inputFields}
              setInputFields={setInputFields}
              index={index}
            />
          </div>
        ))}
        <button onClick={addExperience} className={style.button}>
          Add experience +
        </button>
      </div>
      {/* Family */}

      <div className={style.container}>
        <p className={style.name}> family</p>
        <div className="className={style.container1}">
          <input
            type="text"
            name="fatherName"
            placeholder="Father Name"
            className={style.input}
            value={inputFields.family.fatherName} //yaha pe parents ek ke liye he banya h
            onChange={(e) => {
              setInputFields((prevInputFields) => ({
                ...prevInputFields,
                family: {
                  ...prevInputFields.family,
                  fatherName: e.target.value,
                },
              }));
            }}
          />
          <input
            type="text"
            name="motherName"
            placeholder="Mother Name"
            className={style.input}
            value={inputFields.family.motherName}
            onChange={(e) => {
              setInputFields((prevInputFields) => ({
                ...prevInputFields,
                family: {
                  ...prevInputFields.family,
                  motherName: e.target.value,
                },
              }));
            }}
          />
        </div>
      </div>
    </>
  );
};
export default Formm;
