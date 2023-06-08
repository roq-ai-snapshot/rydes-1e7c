import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { travellingAllowanceValidationSchema } from 'validationSchema/travelling-allowances';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.travelling_allowance
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getTravellingAllowanceById();
    case 'PUT':
      return updateTravellingAllowanceById();
    case 'DELETE':
      return deleteTravellingAllowanceById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getTravellingAllowanceById() {
    const data = await prisma.travelling_allowance.findFirst(
      convertQueryToPrismaUtil(req.query, 'travelling_allowance'),
    );
    return res.status(200).json(data);
  }

  async function updateTravellingAllowanceById() {
    await travellingAllowanceValidationSchema.validate(req.body);
    const data = await prisma.travelling_allowance.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });
    return res.status(200).json(data);
  }
  async function deleteTravellingAllowanceById() {
    const data = await prisma.travelling_allowance.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
