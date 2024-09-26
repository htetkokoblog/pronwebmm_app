import type { VercelRequest, VercelResponse } from '@vercel/node'

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { video,title } = req.query
  return res.send(`
    <html>

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
</head>

<body>
<div class="bg-secondary border border-1 border-dark p-2 pt-0 mb-4 shadow">
      <video src="${video}" controls width="100%" height="300px" class="mb-0 mt-1"></video>
      <div class="text-light  p-3  rounded m-0">${title}</div>
</div>
</body>

</html>
  `)
}
