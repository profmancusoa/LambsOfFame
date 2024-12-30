const A="data:image/png;base64,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";export{A as default};