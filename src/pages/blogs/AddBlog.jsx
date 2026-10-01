import React, { useEffect, useState } from 'react'
import { Button, Select, TextInput, Textarea } from '@mantine/core'
import { GetRequest, PostRequest } from '../../services/http'

const AddBlog = () => {
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [bodyText, setBodyText] = useState('')
  const [users, setUsers] = useState([])
  const [author, setAuthor] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchUsers = async () => {
    try {
      const res = await GetRequest('user/getAll')
      setUsers(res.data)
    } catch (err) {
      alert('Error while fetching users')
    }
  }

  const handleSubmit = async () => {
    if (!title.trim()) {
      alert('Please enter blog title')
      return
    }

    if (!author) {
      alert('Please select an author')
      return
    }

   

    try {
      setLoading(true)

    //   const blogData = {
    //     title,
    //     author,
    //     body: bodyText || 'This is body from frontend',
    //     likes: 100,
    //     category: 'postapi',
    //     image,
    //     status: false,
    //   }

      const formData = new FormData()
      formData.append("title",title),
      formData.append("author",author),
      formData.append("body",bodyText),
      formData.append("likes",100),
      formData.append("category","tech"),
      formData.append("status",false),
      formData.append("image",image)


      const response = await PostRequest('blog/create', formData)

      console.log(response)

      // Clear form
      setTitle('')
      setImage('')
      setBodyText('')
      setAuthor(null)
    } catch (err) {
      console.error(err)
      alert('Error while creating blog')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const authorOptions = users.map((item) => ({
    label: item.fullName,
    value: item._id,
  }))

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 md:px-10">
      <div className="mx-auto max-w-3xl">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Create New Blog
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Add a new blog post with title, author, image and content.
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">

          <div className="space-y-6">

            {/* Title */}
            <TextInput
              label="Blog Title"
              placeholder="Enter your blog title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              size="md"
              withAsterisk
            />

            {/* Author */}
            <Select
              label="Author"
              placeholder="Select an author"
              searchable
              clearable
              value={author}
              onChange={setAuthor}
              data={authorOptions}
              size="md"
              withAsterisk
              nothingFoundMessage="No users found"
            />

            {/* Image URL */}
            <input
            type='file'
              label="Image URL"
              placeholder="https://example.com/image.jpg"
              onChange={(e) => setImage(e.target.files[0])}
            
            />

            {/* Image Preview */}
            {image && (
              <div className="overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
                <p className="border-b border-gray-200 px-4 py-2 text-sm font-medium text-gray-600">
                  Image Preview
                </p>

                <div className="p-4">
                  <img
                    src={image}
                    alt="Blog preview"
                    className="h-64 w-full rounded-lg object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                </div>
              </div>
            )}

            {/* Body */}
            <Textarea
              label="Blog Content"
              placeholder="Write your blog content..."
              value={bodyText}
              onChange={(e) => setBodyText(e.target.value)}
              minRows={6}
              autosize
              size="md"
            />

            {/* Category */}
            <TextInput
              label="Category"
              placeholder="Enter category"
              defaultValue="postapi"
              size="md"
            />

            {/* Submit */}
            <div className="flex justify-end border-t border-gray-100 pt-6">
              <Button
                onClick={handleSubmit}
                loading={loading}
                size="md"
                className="w-full sm:w-auto"
              >
                Create Blog
              </Button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default AddBlog
