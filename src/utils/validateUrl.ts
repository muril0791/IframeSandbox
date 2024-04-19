function validateUrl(url: string): boolean {
  const pattern = new RegExp('^(https?:\\/\\/)?' + // protocolo
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // nome de domínio
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OU ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // porta e caminho
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
  return !!pattern.test(url);
}

export default validateUrl;