import * as Yup from "yup";
import { specificFormIds } from "./forms";

const stepOneValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  phoneNumber: Yup.string().required("Required"),
  email: Yup.string().email().required("Required"),
  zipCode: Yup.string().required("Required"),
  journeyStageId: Yup.number().required("Required").typeError("Required"),
  otherJourneyStage: Yup.string().when("journeyStageId", {
    is: (journeyStageId) => {
      return journeyStageId === specificFormIds.otherJourneyStageId;
    },
    then: Yup.string().required("Required"),
    otherwise: Yup.string().nullable().optional(),
  }),
  ttcDurationId: Yup.number().required("Required").typeError("Required"),
  activePhysicianIds: Yup.array()
    .min(1)
    .required("Required")
    .typeError("Required"),
  otherActivePhysician: Yup.string().when("activePhysicianIds", {
    is: (activePhysicianIds) => {
      const check = activePhysicianIds?.some((id) =>
        specificFormIds?.otherActivePhysicianIds?.some((value) => id === value)
      );

      if (check) {
        return true;
      }
    },
    then: Yup.string().required("Required"),
    otherwise: Yup.string().nullable().optional(),
  }),
  reCheckId: Yup.number().when("activePhysicianIds", {
    is: (activePhysicianIds) => {
      const check =
        activePhysicianIds?.some((id) =>
        specificFormIds?.reCheckActivePhysicianIds.some((value) => id === value)
        ) && activePhysicianIds?.every((id) => id !== specificFormIds?.clinicActivePhysicianIds);

      if (check) {
        return true;
      }
    },
    then: Yup.number().required("Required").typeError("Required"),
    otherwise: Yup.number().nullable().optional(),
  }),
  stoppedReReasonIds: Yup.array().when("reCheckId", {
    is: (reCheckId) => {
      return reCheckId === specificFormIds?.stoppedReCheckId;
    },
    then: Yup.array().min(1).required("Required"),
    otherwise: Yup.array(),
  }),
  otherStoppedReReason: Yup.string().when("stoppedReReasonIds", {
    is: (stoppedReReasonIds) => {
      const check = stoppedReReasonIds?.some((id) =>
      specificFormIds?.otherStoppedReReasonIds.some((value) => id === value)
      );

      if (check) {
        return true;
      }
    },
    then: Yup.string().required("Required"),
    otherwise: Yup.string().nullable().optional(),
  }),

  noReReasonIds: Yup.array().when("reCheckId", {
    is: (reCheckId) => {
      return reCheckId === specificFormIds?.noReResonReCheckId;
    },
    then: Yup.array().min(1).required("Required"),
    otherwise: Yup.array(),
  }),
  otherNoReReason: Yup.string().when("noReReasonIds", {
    is: (noReReasonIds) => {
      const check = noReReasonIds?.some((id) =>
      specificFormIds?.otherNoReReasonIds.some((value) => id === value)
      );

      if (check) {
        return true;
      }
    },
    then: Yup.string().required("Required"),
    otherwise: Yup.string().nullable().optional(),
  }),

  clinicAmountId: Yup.number().when("activePhysicianIds", {
    is: (activePhysicianIds) => {
      const check = activePhysicianIds?.some((id) =>
      specificFormIds?.clinicActivePhysicianIds.some((value) => id === value)
      );

      if (check) {
        return true;
      }
    },
    then: Yup.number().required("Required").typeError("Required"),
    otherwise: Yup.number().nullable().optional(),
  }),
  reDurationId: Yup.number().when("activePhysicianIds", {
    is: (activePhysicianIds) => {
      const check = activePhysicianIds?.some((id) =>
      specificFormIds?.clinicActivePhysicianIds.some((value) => id === value)
      );

      if (check) {
        return true;
      }
    },
    then: Yup.number().required("Required").typeError("Required"),
    otherwise: Yup.number().nullable().optional(),
  })
});

const stepTwoValidationSchema = Yup.object().shape({
    ethnicIdentityIds: Yup.array()
    .min(1)
    .required("Required")
    .typeError("Required"),
  genderIdentityId: Yup.number().required("Required").typeError("Required"),
  ageRangeId: Yup.number().required("Required").typeError("Required"),
  optinId: Yup.number().required("Required").typeError("Required"),
  tAndCId: Yup.number()
    .required("Required")
    .typeError("Required")
    .test("isAccepted", "Must accept", (val) => val === 1),
});

const validationSchema = [stepOneValidationSchema, stepTwoValidationSchema];

const validate = async (formResults, step) => {
  try {
    await validationSchema[step - 1].validate(formResults, {
      abortEarly: false,
    });
    return { error: null };
  } catch (error) {
    return { error: error.inner.map((err) => err.path) };
  }
};

export { validationSchema, validate };
