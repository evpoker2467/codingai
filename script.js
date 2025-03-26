document.addEventListener('DOMContentLoaded', () => {
    const codeInput = document.getElementById('codeInput');
    const promptInput = document.getElementById('prompt');
    const submitBtn = document.getElementById('submitBtn');
    const loading = document.getElementById('loading');
    const response = document.getElementById('response');
    const responseContent = document.getElementById('responseContent');

    submitBtn.addEventListener('click', async () => {
        const code = codeInput.value.trim();
        const prompt = promptInput.value.trim();

        if (!prompt) {
            alert('Please enter a question about your code.');
            return;
        }

        // Show loading state
        loading.classList.remove('hidden');
        response.classList.add('hidden');
        submitBtn.disabled = true;

        try {
            const response = await fetch("/.netlify/functions/openrouter-proxy", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "model": "deepseek/deepseek-chat-v3-0324:free",
                    "messages": [
                        {
                            "role": "system",
                            "content": "You are a helpful coding assistant. Provide clear, concise, and accurate responses about code."
                        },
                        {
                            "role": "user",
                            "content": `Code:\n${code}\n\nQuestion: ${prompt}`
                        }
                    ]
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error?.message || 'API request failed');
            }

            const data = await response.json();
            const aiResponse = data.choices[0].message.content;

            // Display response
            responseContent.textContent = aiResponse;
            response.classList.remove('hidden');
        } catch (error) {
            console.error('Error:', error);
            responseContent.textContent = `Error: ${error.message}`;
            response.classList.remove('hidden');
        } finally {
            // Hide loading state
            loading.classList.add('hidden');
            submitBtn.disabled = false;
        }
    });
}); 