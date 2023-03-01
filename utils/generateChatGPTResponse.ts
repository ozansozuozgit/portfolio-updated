export default async function generateChatGPTResponse(
  prompt: string,
  onDataReceived?: (chunk: string) => void
): Promise<void> {
  const response = await fetch('/api/generate-answer', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt,
    }),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = response.body;
  if (!data) {
    return;
  }

  const reader = data.getReader();
  const decoder = new TextDecoder();
  let done = false;
  while (!done) {
    const { value, done: doneReading } = await reader.read();
    done = doneReading;
    const chunkValue = decoder.decode(value);
    if (onDataReceived) {
      onDataReceived(chunkValue);
    }
  }
}
