const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://new-beginning-admin.alnitak.app/api/v1'

// Authentication Service
export class AuthService {
  static async signUp(data: {
    email: string
    password: string
    password_confirmation: string
    name?: string
  }) {
    const response = await fetch(`${API_BASE_URL}/auth/sign_up`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include', // Important for cookies
      body: JSON.stringify({ user: data })
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error || error.errors?.join(', ') || 'Registration failed')
    }

    return response.json()
  }

  static async signIn(email: string, password: string) {
    const response = await fetch(`${API_BASE_URL}/auth/sign_in`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include', // Important for cookies
      body: JSON.stringify({ email, password })
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error || 'Invalid email or password')
    }

    return response.json()
  }

  static async signOut() {
    const response = await fetch(`${API_BASE_URL}/auth/sign_out`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include'
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error || 'Sign out failed')
    }

    return response.json()
  }

  static async confirmEmail(confirmationToken: string) {
    const response = await fetch(`${API_BASE_URL}/auth/confirm?confirmation_token=${encodeURIComponent(confirmationToken)}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include'
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error || 'Email confirmation failed')
    }

    return response.json()
  }

  static async resendConfirmation(email: string) {
    const response = await fetch(`${API_BASE_URL}/auth/resend_confirmation`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ email })
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error || 'Failed to resend confirmation email')
    }

    return response.json()
  }

  static async getCurrentUser() {
    const response = await fetch(`${API_BASE_URL}/auth/me`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include'
    })

    if (!response.ok) {
      return null
    }

    return response.json()
  }
}

export interface User {
  id: number
  email: string
  first_name?: string
  last_name?: string
  phone?: string
  created_at: string
  updated_at: string
  confirmed_at?: string

  // Computed properties
  full_name?: string
  display_name?: string
}

export interface DoctorProfile {
  id: number
  name: string
  title: string
  specialization: string
  bio: string
  credentials: string[]
  profile_image: string
  contact_info: {
    email: string
    phone: string
    address: string
  }
  social_links: {
    linkedin: string
    twitter: string
    instagram: string
  }
  services_count: number
  articles_count: number
  testimonials_count: number
}

export interface Service {
  id: number
  user_id: number
  en_name: string
  ar_name?: string
  en_description: string
  ar_description?: string
  category: string
  duration: number // Duration in minutes
  is_active: boolean
  created_at: string
  updated_at: string

  // Computed properties from server
  display_name: string
  display_description: string
  duration_text: string

  // Additional frontend properties
  service_type?: 'menopause_coaching' | 'arabic_teaching' | 'quran_teaching'
  pricing?: {
    consultation?: string
    package?: string
    follow_up?: string
    individual?: string
    group?: string
    intensive?: string
    tajweed?: string
    tafseer?: string
    memorization?: string
  }
  features?: string[]
  testimonials_count?: number
  image?: string
  detailed_description?: string
  what_to_expect?: string[]
  faqs?: Array<{
    question: string
    answer: string
  }>
}

export interface WorkingHour {
  id: number
  schedule_id: number
  day: 'sunday' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday'
  start_time: string // Time format "HH:MM:SS"
  end_time: string // Time format "HH:MM:SS"
  break_start?: string // Time format "HH:MM:SS"
  break_end?: string // Time format "HH:MM:SS"
  is_available: boolean
  created_at: string
  updated_at: string

  // Computed properties from server
  day_name: string
  formatted_start_time: string
  formatted_end_time: string
  break_duration: number // in minutes
  has_break: boolean
  working_duration: number // in minutes
}

export interface Schedule {
  id: number
  user_id: number
  created_at: string
  updated_at: string

  // Computed properties from server
  available_dates: string[] // Array of available dates
  working_hours: WorkingHour[]

  // Methods available on server
  available_on?: (date: string) => boolean
  working_hours_for_day?: (day: number) => WorkingHour | null
  next_available_slot?: (service: Service, date: string) => string | null
}

export interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  featured_image: string
  published_at: string
  updated_at: string
  status: 'draft' | 'published' | 'archived'
  article_type: 'health_tips' | 'arabic_learning' | 'quran_insights' | 'patient_story' | 'spiritual_guidance' | 'menopause_support'
  reading_time: string
  tags: BlogTag[]
  author_info: {
    id: number
    name: string
    title: string
    avatar: string
    bio: string
  }
  category: BlogCategory
  views: number
  likes: number
  comments_count: number
  is_featured: boolean
  seo_title?: string
  seo_description?: string
  related_posts?: BlogPost[]
}

export interface BlogCategory {
  id: number
  name: string
  slug: string
  description: string
  color: string
  posts_count: number
  created_at: string
}

export interface BlogTag {
  id: number
  name: string
  slug: string
  posts_count: number
}

export interface BlogComment {
  id: number
  post_id: number
  author_name: string
  author_email: string
  content: string
  status: 'pending' | 'approved' | 'rejected'
  created_at: string
  updated_at: string
  replies?: BlogComment[]
}

export interface Article {
  id: number
  title: string
  excerpt?: string
  content: string
  featured_image?: string
  published_at: string
  article_type?: 'health_tips' | 'arabic_learning' | 'quran_insights' | 'patient_story' | 'spiritual_guidance' | 'menopause_support'
  reading_time?: string
  tags?: string[]
  author_info?: {
    name: string
    title: string
    avatar?: string
  }
  category?: {
    id: number
    name: string
    slug: string
  }
  views?: number
  likes?: number
  comments_count?: number
  related_articles?: Article[]
  slug?: string
}

export interface BlogSearchParams {
  query?: string
  category?: string
  tag?: string
  type?: string
  author?: string
  featured?: boolean
  limit?: number
  offset?: number
  sort_by?: 'published_at' | 'views' | 'likes' | 'title'
  sort_order?: 'asc' | 'desc'
  date_from?: string
  date_to?: string
}

export interface BlogStats {
  total_posts: number
  total_categories: number
  total_tags: number
  total_comments: number
  total_views: number
  posts_by_category: { category: string; count: number }[]
  posts_by_month: { month: string; count: number }[]
  popular_tags: { tag: string; count: number }[]
}

export interface Testimonial {
  id: number
  client_name: string
  client_title: string
  service_type: string
  rating: number
  testimonial: string
  image: string
  created_at: string
  verified: boolean
}

export interface Appointment {
  id: number
  service_id: number
  schedule_id: number
  user_id?: number // Client ID if user is signed in
  start_time: string // ISO datetime string
  client_name: string
  client_email: string
  client_phone: string
  notes?: string
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled' | 'no_show'
  created_at: string
  updated_at: string

  // Computed properties from server
  end_time: string // Calculated from start_time + service.duration
  duration: number // From service
  duration_text: string
  service_name: string
  formatted_start_time: string
  formatted_date: string
  formatted_time: string
  is_upcoming: boolean
  is_past: boolean
  is_today: boolean
  can_cancel: boolean

  // Related objects
  service?: Service
  schedule?: Schedule
  client?: User

  // Legacy fields for backward compatibility
  appointment_type?: 'consultation' | 'lesson' | 'follow_up'
  scheduled_at?: string // Alias for start_time
}

export class BlogAPI {
  // Blog Posts
  static async getBlogPosts(params?: BlogSearchParams): Promise<{ posts: BlogPost[]; total: number; page: number; limit: number }> {
    const query = new URLSearchParams()

    if (params?.query) query.append('q', params.query)
    if (params?.category) query.append('category', params.category)
    if (params?.tag) query.append('tag', params.tag)
    if (params?.type) query.append('type', params.type)
    if (params?.author) query.append('author', params.author)
    if (params?.featured) query.append('featured', 'true')
    if (params?.limit) query.append('limit', params.limit.toString())
    if (params?.offset) query.append('offset', params.offset.toString())
    if (params?.sort_by) query.append('sort_by', params.sort_by)
    if (params?.sort_order) query.append('sort_order', params.sort_order)
    if (params?.date_from) query.append('date_from', params.date_from)
    if (params?.date_to) query.append('date_to', params.date_to)

    const response = await fetch(`${API_BASE_URL}/blog/posts?${query}`)
    if (!response.ok) {
      throw new Error('Failed to fetch blog posts')
    }
    return response.json()
  }

  static async getBlogPost(id: number | string): Promise<BlogPost> {
    const response = await fetch(`${API_BASE_URL}/blog/posts/${id}`)
    if (!response.ok) {
      throw new Error('Failed to fetch blog post')
    }
    return response.json()
  }

  static async getBlogPostBySlug(slug: string): Promise<BlogPost> {
    const response = await fetch(`${API_BASE_URL}/blog/posts/slug/${slug}`)
    if (!response.ok) {
      throw new Error('Failed to fetch blog post')
    }
    return response.json()
  }

  static async getFeaturedPosts(limit: number = 3): Promise<BlogPost[]> {
    const response = await fetch(`${API_BASE_URL}/blog/posts/featured?limit=${limit}`)
    if (!response.ok) {
      throw new Error('Failed to fetch featured posts')
    }
    return response.json()
  }

  static async getRelatedPosts(postId: number, limit: number = 3): Promise<BlogPost[]> {
    const response = await fetch(`${API_BASE_URL}/blog/posts/${postId}/related?limit=${limit}`)
    if (!response.ok) {
      throw new Error('Failed to fetch related posts')
    }
    return response.json()
  }

  static async incrementPostViews(postId: number): Promise<void> {
    await fetch(`${API_BASE_URL}/blog/posts/${postId}/views`, {
      method: 'POST'
    })
  }

  static async likePost(postId: number): Promise<{ likes: number }> {
    const response = await fetch(`${API_BASE_URL}/blog/posts/${postId}/like`, {
      method: 'POST'
    })
    if (!response.ok) {
      throw new Error('Failed to like post')
    }
    return response.json()
  }

  // Blog Categories
  static async getBlogCategories(): Promise<BlogCategory[]> {
    const response = await fetch(`${API_BASE_URL}/blog/categories`)
    if (!response.ok) {
      throw new Error('Failed to fetch blog categories')
    }
    return response.json()
  }

  static async getBlogCategory(id: number | string): Promise<BlogCategory> {
    const response = await fetch(`${API_BASE_URL}/blog/categories/${id}`)
    if (!response.ok) {
      throw new Error('Failed to fetch blog category')
    }
    return response.json()
  }

  static async getBlogCategoryBySlug(slug: string): Promise<BlogCategory> {
    const response = await fetch(`${API_BASE_URL}/blog/categories/slug/${slug}`)
    if (!response.ok) {
      throw new Error('Failed to fetch blog category')
    }
    return response.json()
  }

  // Blog Tags
  static async getBlogTags(): Promise<BlogTag[]> {
    const response = await fetch(`${API_BASE_URL}/blog/tags`)
    if (!response.ok) {
      throw new Error('Failed to fetch blog tags')
    }
    return response.json()
  }

  static async getBlogTag(id: number | string): Promise<BlogTag> {
    const response = await fetch(`${API_BASE_URL}/blog/tags/${id}`)
    if (!response.ok) {
      throw new Error('Failed to fetch blog tag')
    }
    return response.json()
  }

  static async getBlogTagBySlug(slug: string): Promise<BlogTag> {
    const response = await fetch(`${API_BASE_URL}/blog/tags/slug/${slug}`)
    if (!response.ok) {
      throw new Error('Failed to fetch blog tag')
    }
    return response.json()
  }

  // Blog Comments
  static async getBlogComments(postId: number): Promise<BlogComment[]> {
    const response = await fetch(`${API_BASE_URL}/blog/posts/${postId}/comments`)
    if (!response.ok) {
      throw new Error('Failed to fetch blog comments')
    }
    return response.json()
  }

  static async createBlogComment(postId: number, data: {
    author_name: string
    author_email: string
    content: string
    parent_id?: number
  }): Promise<BlogComment> {
    const response = await fetch(`${API_BASE_URL}/blog/posts/${postId}/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    if (!response.ok) {
      throw new Error('Failed to create blog comment')
    }
    return response.json()
  }

  // Blog Search
  static async searchBlogPosts(query: string, params?: {
    category?: string
    tag?: string
    type?: string
    limit?: number
    offset?: number
  }): Promise<{ posts: BlogPost[]; total: number }> {
    const searchParams = new URLSearchParams()
    searchParams.append('q', query)

    if (params?.category) searchParams.append('category', params.category)
    if (params?.tag) searchParams.append('tag', params.tag)
    if (params?.type) searchParams.append('type', params.type)
    if (params?.limit) searchParams.append('limit', params.limit.toString())
    if (params?.offset) searchParams.append('offset', params.offset.toString())

    const response = await fetch(`${API_BASE_URL}/blog/search?${searchParams}`)
    if (!response.ok) {
      throw new Error('Failed to search blog posts')
    }
    return response.json()
  }

  // Blog Statistics
  static async getBlogStats(): Promise<BlogStats> {
    const response = await fetch(`${API_BASE_URL}/blog/stats`)
    if (!response.ok) {
      throw new Error('Failed to fetch blog statistics')
    }
    return response.json()
  }

  // Blog Archive
  static async getBlogArchive(): Promise<{ year: number; months: { month: number; count: number }[] }[]> {
    const response = await fetch(`${API_BASE_URL}/blog/archive`)
    if (!response.ok) {
      throw new Error('Failed to fetch blog archive')
    }
    return response.json()
  }

  static async getBlogPostsByDate(year: number, month: number, params?: {
    limit?: number
    offset?: number
  }): Promise<{ posts: BlogPost[]; total: number }> {
    const query = new URLSearchParams()
    if (params?.limit) query.append('limit', params.limit.toString())
    if (params?.offset) query.append('offset', params.offset.toString())

    const response = await fetch(`${API_BASE_URL}/blog/archive/${year}/${month}?${query}`)
    if (!response.ok) {
      throw new Error('Failed to fetch blog posts by date')
    }
    return response.json()
  }
}

export class DoctorBlogAPI {
  // Doctor Profile
  static async getDoctorProfile(): Promise<DoctorProfile> {
    const response = await fetch(`${API_BASE_URL}/doctor_profile`)
    if (!response.ok) {
      throw new Error('Failed to fetch doctor profile')
    }
    return response.json()
  }

  static async updateDoctorProfile(data: Partial<DoctorProfile>): Promise<DoctorProfile> {
    const response = await fetch(`${API_BASE_URL}/doctor_profile`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    if (!response.ok) {
      throw new Error('Failed to update doctor profile')
    }
    return response.json()
  }

  // Services
  static async getServices(): Promise<Service[]> {
    const response = await fetch(`${API_BASE_URL}/services`)
    if (!response.ok) {
      throw new Error('Failed to fetch services')
    }
    return response.json()
  }

  static async getService(id: number): Promise<Service> {
    const response = await fetch(`${API_BASE_URL}/services/${id}`)
    if (!response.ok) {
      throw new Error('Failed to fetch service')
    }
    return response.json()
  }

  static async getActiveServices(): Promise<Service[]> {
    const response = await fetch(`${API_BASE_URL}/services?active=true`)
    if (!response.ok) {
      throw new Error('Failed to fetch active services')
    }
    return response.json()
  }

  static async getServicesByCategory(category: string): Promise<Service[]> {
    const response = await fetch(`${API_BASE_URL}/services?category=${category}`)
    if (!response.ok) {
      throw new Error('Failed to fetch services by category')
    }
    return response.json()
  }

  // Working Hours & Schedule
  static async getSchedule(userId?: number): Promise<Schedule> {
    const url = userId ? `${API_BASE_URL}/schedules/${userId}` : `${API_BASE_URL}/schedule`
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Failed to fetch schedule')
    }
    return response.json()
  }

  static async getWorkingHours(scheduleId: number): Promise<WorkingHour[]> {
    const response = await fetch(`${API_BASE_URL}/schedules/${scheduleId}/working_hours`)
    if (!response.ok) {
      throw new Error('Failed to fetch working hours')
    }
    return response.json()
  }

  static async getWorkingHoursForDay(scheduleId: number, day: number): Promise<WorkingHour | null> {
    const response = await fetch(`${API_BASE_URL}/schedules/${scheduleId}/working_hours?day=${day}`)
    if (!response.ok) {
      throw new Error('Failed to fetch working hours for day')
    }
    const hours = await response.json()
    return hours.length > 0 ? hours[0] : null
  }

  static async getAvailableDates(scheduleId: number, startDate?: string, endDate?: string): Promise<string[]> {
    const query = new URLSearchParams()
    if (startDate) query.append('start_date', startDate)
    if (endDate) query.append('end_date', endDate)

    const response = await fetch(`${API_BASE_URL}/schedules/${scheduleId}/available_dates?${query}`)
    if (!response.ok) {
      throw new Error('Failed to fetch available dates')
    }
    return response.json()
  }

  // Free Appointments & Time Slots
  static async getFreeAppointments(serviceId: number, date: string): Promise<string[]> {
    const response = await fetch(`${API_BASE_URL}/services/${serviceId}/free_appointments?date=${date}`)
    if (!response.ok) {
      throw new Error('Failed to fetch free appointments')
    }
    return response.json()
  }

  static async getAvailableTimeSlots(serviceId: number, date: string): Promise<{
    time_slots: string[]
    working_hours: WorkingHour | null
    service: Service
  }> {
    const response = await fetch(`${API_BASE_URL}/services/${serviceId}/available_slots?date=${date}`)
    if (!response.ok) {
      throw new Error('Failed to fetch available time slots')
    }
    return response.json()
  }

  static async checkSlotAvailability(serviceId: number, startTime: string): Promise<{
    available: boolean
    conflict_reason?: string
  }> {
    const response = await fetch(`${API_BASE_URL}/services/${serviceId}/check_availability`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ start_time: startTime })
    })
    if (!response.ok) {
      throw new Error('Failed to check slot availability')
    }
    return response.json()
  }

  // Articles
  static async getArticles(params?: {
    category?: string
    type?: string
    limit?: number
    featured?: boolean
  }): Promise<Article[]> {
    const query = new URLSearchParams()
    if (params?.category) query.append('category', params.category)
    if (params?.type) query.append('type', params.type)
    if (params?.limit) query.append('limit', params.limit.toString())
    if (params?.featured) query.append('featured', 'true')

    const response = await fetch(`${API_BASE_URL}/articles?${query}`)
    if (!response.ok) {
      throw new Error('Failed to fetch articles')
    }
    return response.json()
  }

  static async getArticle(idOrSlug: number | string): Promise<Article> {
    const response = await fetch(`${API_BASE_URL}/articles/${idOrSlug}`)
    if (!response.ok) {
      throw new Error('Failed to fetch article')
    }
    return response.json()
  }

  static async getArticleBySlug(slug: string): Promise<Article> {
    return this.getArticle(slug)
  }

  static async getArticleComments(articleIdOrSlug: number | string): Promise<Array<{
    id: number
    author_name: string
    author_email: string
    content: string
    created_at: string
  }>> {
    const response = await fetch(`${API_BASE_URL}/articles/${articleIdOrSlug}/comments`)
    if (!response.ok) {
      throw new Error('Failed to fetch article comments')
    }
    return response.json()
  }

  static async createArticleComment(articleIdOrSlug: number | string, data: {
    content: string
    author_name: string
    author_email: string
  }): Promise<{
    id: number
    author_name: string
    author_email: string
    content: string
    created_at: string
  }> {
    const response = await fetch(`${API_BASE_URL}/articles/${articleIdOrSlug}/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    if (!response.ok) {
      throw new Error('Failed to create article comment')
    }
    return response.json()
  }

  // Categories
  static async getCategories(): Promise<Array<{
    id: number
    name: string
    slug: string
    description?: string
    posts_count: number
  }>> {
    const response = await fetch(`${API_BASE_URL}/categories`)
    if (!response.ok) {
      throw new Error('Failed to fetch categories')
    }
    return response.json()
  }

  static async getCategory(idOrSlug: number | string): Promise<{
    id: number
    name: string
    slug: string
    description?: string
    posts_count: number
  }> {
    const response = await fetch(`${API_BASE_URL}/categories/${idOrSlug}`)
    if (!response.ok) {
      throw new Error('Failed to fetch category')
    }
    return response.json()
  }

  // Testimonials
  static async getTestimonials(params?: { service_type?: string }): Promise<Testimonial[]> {
    const query = new URLSearchParams()
    if (params?.service_type) query.append('service_type', params.service_type)

    const response = await fetch(`${API_BASE_URL}/testimonials?${query}`)
    if (!response.ok) {
      throw new Error('Failed to fetch testimonials')
    }
    return response.json()
  }

  static async createTestimonial(data: {
    client_name: string
    client_title: string
    service_type: string
    rating: number
    testimonial: string
  }): Promise<Testimonial> {
    const response = await fetch(`${API_BASE_URL}/testimonials`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    if (!response.ok) {
      throw new Error('Failed to create testimonial')
    }
    return response.json()
  }

  // Appointments
  static async getAppointments(params?: {
    user_id?: number
    service_id?: number
    status?: string
    upcoming?: boolean
    past?: boolean
    today?: boolean
    date_from?: string
    date_to?: string
  }): Promise<Appointment[]> {
    const query = new URLSearchParams()
    if (params?.user_id) query.append('user_id', params.user_id.toString())
    if (params?.service_id) query.append('service_id', params.service_id.toString())
    if (params?.status) query.append('status', params.status)
    if (params?.upcoming) query.append('upcoming', 'true')
    if (params?.past) query.append('past', 'true')
    if (params?.today) query.append('today', 'true')
    if (params?.date_from) query.append('date_from', params.date_from)
    if (params?.date_to) query.append('date_to', params.date_to)

    const response = await fetch(`${API_BASE_URL}/appointments?${query}`)
    if (!response.ok) {
      throw new Error('Failed to fetch appointments')
    }
    return response.json()
  }

  static async getAppointment(id: number): Promise<Appointment> {
    const response = await fetch(`${API_BASE_URL}/appointments/${id}`)
    if (!response.ok) {
      throw new Error('Failed to fetch appointment')
    }
    return response.json()
  }

  static async createAppointment(data: {
    service_id: number
    start_time: string
    client_name: string
    client_email: string
    client_phone: string
    notes?: string
    user_id?: number
  }): Promise<Appointment> {
    const response = await fetch(`${API_BASE_URL}/appointments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    if (!response.ok) {
      throw new Error('Failed to create appointment')
    }
    return response.json()
  }

  static async updateAppointment(id: number, data: Partial<Appointment>): Promise<Appointment> {
    const response = await fetch(`${API_BASE_URL}/appointments/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    if (!response.ok) {
      throw new Error('Failed to update appointment')
    }
    return response.json()
  }

  static async cancelAppointment(id: number): Promise<Appointment> {
    const response = await fetch(`${API_BASE_URL}/appointments/${id}/cancel`, {
      method: 'PATCH'
    })
    if (!response.ok) {
      throw new Error('Failed to cancel appointment')
    }
    return response.json()
  }

  static async getUpcomingAppointments(userId?: number): Promise<Appointment[]> {
    const query = userId ? `?user_id=${userId}` : ''
    const response = await fetch(`${API_BASE_URL}/appointments/upcoming${query}`)
    if (!response.ok) {
      throw new Error('Failed to fetch upcoming appointments')
    }
    return response.json()
  }

  static async getPastAppointments(userId?: number): Promise<Appointment[]> {
    const query = userId ? `?user_id=${userId}` : ''
    const response = await fetch(`${API_BASE_URL}/appointments/past${query}`)
    if (!response.ok) {
      throw new Error('Failed to fetch past appointments')
    }
    return response.json()
  }

  // Contact Messages
  static async sendContactMessage(data: {
    name: string
    email: string
    phone: string
    subject: string
    message: string
    service_type?: string
  }): Promise<{ message: string }> {
    const response = await fetch(`${API_BASE_URL}/contact_messages`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    if (!response.ok) {
      throw new Error('Failed to send contact message')
    }
    return response.json()
  }
}
