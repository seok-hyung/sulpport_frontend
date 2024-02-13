export const postBlessingMent = async (formData) => {
  const res = await fetch(`https://sulpport-backend.site/recommendation/greetings`, {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'Content-type': 'application/json',
    },
  });
  if (!res.ok) {
    throw new Error('네트워크에 문제가 있습니다.');
  }
  const data = await res.json();

  return data;
};
