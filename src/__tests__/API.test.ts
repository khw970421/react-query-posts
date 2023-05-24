import HttpInstance from '../api/user'

HttpInstance.setUpInterceptors()

test('postId toBe Same', async () => {
  const postIdProp = 1
  const { data } = await HttpInstance.getComments(postIdProp)
  data.forEach(({ postId }: { postId: number }) => expect(postId).toBe(postIdProp))
});