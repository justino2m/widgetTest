const formContents = {
  stepOne: [
    {
      name: "firstName",
      label: "First Name",
      type: "text",
      required: true,
      operator: "update",
      placeholder: "",
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      required: true,
      operator: "update",
      placeholder: "",
    },
    {
      name: "phoneNumber",
      label: "Mobile Number",
      type: "text",
      required: true,
      operator: "update",
      placeholder: "",
    },
    {
      name: "zipCode",
      label: "ZIP Code",
      type: "text",
      required: true,
      operator: "update",
      placeholder: "",
    },
    {
      name: "journeyStageId",
      label: "My fertility journey looks like:",
      type: "singleSelect",
      required: true,
      operator: "update",
      options: [
        {
          value: 1,
          text: "Fertility preservation (egg, sperm, or embryo freezing for the future)",
        },
        {
          value: 2,
          text: "Trying to conceive as a single parent by choice (without partner)",
        },
        {
          value: 3,
          text: "Trying to conceive as a heterosexual couple",
        },
        {
          value: 4,
          text: "Trying to conceive as a same-sex couple",
        },
        {
          value: 5,
          text: "Trying to conceive as a queer, non-binary or transgender person in a couple",
        },
        {
          value: 6,
          text: "Being a friend, partner and/or support person",
        },
        {
          value: 7,
          text: "Not listed",
        },
      ],
    },
    {
      name: "otherJourneyStage",
      label: "Please specify what your fertility journey looks like:",
      type: "text",
      required: true,
      operator: "update",
      placeholder: "",
      hidden: true,
    },
    {
      name: "ttcDurationId",
      label: "How long have you been trying to conceive or grow your family?",
      type: "singleSelect",
      required: true,
      operator: "update",
      options: [
        {
          value: 1,
          text: "Less than 3 months",
        },
        {
          value: 2,
          text: "3-6 months",
        },
        {
          value: 3,
          text: "6-12 months",
        },
        {
          value: 4,
          text: "More than 12 months",
        },
        {
          value: 5,
          text: "N/A",
        },
      ],
    },
    {
      name: "activePhysicianIds",
      label: "Which of the following physicians do you have?",
      type: "multiSelect",
      required: true,
      operator: "push",
      options: [
        {
          value: 1,
          text: "Primary Care Physician",
        },
        {
          value: 2,
          text: "OBGYN (Doctor or Nurse)",
        },
        {
          value: 3,
          text: "Fertility Specialist or Reproductive Endocrinologist (RE)",
        },
        {
          value: 4,
          text: "Other",
        },
        {
          value: 5,
          text: "N/A",
        },
      ],
    },
    {
      name: "reCheckId",
      label: "Which of the following applies?",
      type: "radio",
      required: true,
      operator: "update",
      hidden: true,
      options: [
        {
          value: 1,
          text: "I was seeing a fertility specialist, but am no longer seeing them",
        },
        {
          value: 2,
          text: "I haven’t seen a fertility specialist yet",
        },
      ],
    },
    {
      name: "otherActivePhysician",
      label: "Please specify which type of physician you have:",
      type: "text",
      required: true,
      operator: "update",
      hidden: true,
    },
    {
      name: "stoppedReReasonIds",
      label:
        "If you’ve recently paused or stopped your fertility treatment, it was because of:",
      type: "multiSelect",
      required: true,
      operator: "push",
      hidden: true,
      options: [
        {
          value: 1,
          text: "Financial reasons",
        },
        {
          value: 2,
          text: "Lack of insurance coverage",
        },
        {
          value: 3,
          text: "Navigating doctors and specialists",
        },
        {
          value: 4,
          text: "Lack of care coordination",
        },
        {
          value: 5,
          text: "Geographic access to clinic",
        },
        {
          value: 6,
          text: "Awareness/knowledge of fertility options",
        },
        {
          value: 7,
          text: "Finding appropriate resources",
        },
        {
          value: 8,
          text: "Lack of emotional support",
        },
        {
          value: 9,
          text: "Taking a break from treatment",
        },
        {
          value: 10,
          text: "Timing and/or conflicts",
        },
        {
          value: 11,
          text: "Religious reasons",
        },
        {
          value: 12,
          text: "Pregnancy, transferred care to OBGYN",
        },
        {
          value: 13,
          text: "Transferred care to another fertility specialist",
        },
        {
          value: 14,
          text: "Other",
        },
      ],
    },
    {
      name: "otherStoppedReReason",
      label:
        "Please specify why you recently paused or stopped your fertility treatment:",
      type: "text",
      required: true,
      operator: "update",
      hidden: true,
    },
    {
      name: "noReReasonIds",
      label:
        "If you haven't seen a fertility specialist yet, it is because of:",
      type: "multiSelect",
      required: true,
      operator: "push",
      hidden: true,
      options: [
        {
          value: 1,
          text: "Continuing to try naturally",
        },
        {
          value: 2,
          text: "Financial reasons",
        },
        {
          value: 3,
          text: "Lack of insurance coverage",
        },
        {
          value: 4,
          text: "Lack of care coodination",
        },
        {
          value: 5,
          text: "Emotional burden, fear and/or anxiety",
        },
        {
          value: 6,
          text: "Lack of awareness/knowledge of fertility options",
        },
        {
          value: 7,
          text: "Navigating doctors and specialists",
        },
        {
          value: 8,
          text: "Geographic access to clinic",
        },
        {
          value: 9,
          text: "Religious reasons",
        },
        {
          value: 10,
          text: "Pregnancy, care provided by OBGYN",
        },
        {
          value: 11,
          text: "Other",
        },
      ],
    },
    {
      name: "otherNoReReason",
      label: "Please specify why you haven’t seen a fertility specialist yet:",
      type: "text",
      required: true,
      operator: "update",
      hidden: true,
    },
    {
      name: "reDurationId",
      label: "How long have you been seeing a fertility specialist?",
      type: "radio",
      required: true,
      operator: "update",
      hidden: true,
      options: [
        {
          value: 1,
          text: "Consultation only",
        },
        {
          value: 2,
          text: "Less than 3 months",
        },
        {
          value: 3,
          text: "3-6 months",
        },
        {
          value: 4,
          text: "6-12 months",
        },
        {
          value: 5,
          text: "More than 12 months",
        },
      ],
    },
    {
      name: "clinicAmountId",
      label: "How many clinics have you been to?",
      type: "radio",
      required: true,
      operator: "update",
      hidden: true,
      options: [
        {
          value: 1,
          text: "1",
        },
        {
          value: 2,
          text: "2",
        },
        {
          value: 3,
          text: "3+",
        },
      ],
    }
  ],
  stepTwo: [
    {
      name: "ageRangeId",
      label: "Age",
      type: "singleSelect",
      required: true,
      operator: "update",
      options: [
        {
          value: 1,
          text: "18-24 years old",
        },
        {
          value: 2,
          text: "25-29 years old",
        },
        {
          value: 3,
          text: "30-34 years old",
        },
        {
          value: 4,
          text: "35-39 years old",
        },
        {
          value: 5,
          text: "40-44 years old",
        },
        {
          value: 6,
          text: "Over 45 years old",
        }
      ],
    },
    {
      name: "ethnicIdentityId",
      label: "Ethnic Identity",
      type: "multiSelect",
      required: true,
      operator: "push",
      options: [
        {
          value: 1,
          text: "Asian",
        },
        {
          value: 2,
          text: "Hawaiian, Pacific Islander",
        },
        {
          value: 3,
          text: "Black, African American",
        },
        {
          value: 4,
          text: "Indigenous, Native American, Alaskan Native",
        },
        {
          value: 5,
          text: "Latino, Hispanic",
        },
        {
          value: 6,
          text: "White",
        },
        {
          value: 7,
          text: "Middle Eastern, North African",
        },
        {
          value: 8,
          text: "Prefer not to answer",
        },
      ],
    },
    {
      name: "genderIdentityId",
      label: "Gender Identity",
      type: "singleSelect",
      required: true,
      operator: "update",
      options: [
        {
          value: 1,
          text: "Female",
        },
        {
          value: 2,
          text: "Male",
        },
        {
          value: 3,
          text: "Transgender Male",
        },
        {
          value: 4,
          text: "Gender Variant/Non-Conforming",
        },
        {
          value: 5,
          text: "Not listed",
        }
      ],
    },
    {
      name: "optinId",
      label: "Would you like to receive updates and information via email?",
      type: "radio",
      required: true,
      operator: "update",
      options: [
        {
          value: 1,
          text: "Yes, please!",
        },
        {
          value: 2,
          text: "No, thank you.",
        },
      ],
    }
  ],
  stepThree: [
    {
      name: "acceptId",
      label: "",
      type: "radio",
      required: true,
      operator: "update",
      options: [
        {
          value: 1,
          text: "I accept",
        },
        {
          value: 2,
          text: "I don’t accept",
        },
      ],
    }
  ]
};

const specificFormIds = {
  otherJourneyStageId: 7,
  otherActivePhysicianIds: [4],
  reCheckActivePhysicianIds: [1, 2, 4, 5],
  clinicActivePhysicianIds: [3],
  otherNoReReasonIds: [11],
  otherStoppedReReasonIds: [14],
  stoppedReCheckId: 1,
  noReResonReCheckId: 2,
};

export { formContents, specificFormIds}