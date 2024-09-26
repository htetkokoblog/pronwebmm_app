import type { VercelRequest, VercelResponse } from '@vercel/node'

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { video,title } = req.query
  return res.json({
    message: title,
  })
}
