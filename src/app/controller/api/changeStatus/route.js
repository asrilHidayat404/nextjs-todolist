
export async function POST(request) {
    const {id, status} = await request.json()
    const res = await prisma.todo.update({
        where: {
          id: Number(id),
        },
        data: {
            done: !status
        }
    })
      
    if (res) {
        return Response.json({
            success: true,
            message: "Success updating todo"
        })
    }
}