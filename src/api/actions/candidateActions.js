export function postCandidateAction({
  offerId,
  firstName,
  lastName,
  message,
  cvFilePath,
}) {
  return {
    method: "POST",
    endpoint: "/candidates",
    body: {
      offer_id: offerId,
      first_name: firstName,
      last_name: lastName,
      message,
      cv_file_path: cvFilePath,
    },
  };
}

export function postCvAction(formData) {
  return {
    method: "POST",
    endpoint: "/candidates/upload-cv",
    body: formData,
  };
}
