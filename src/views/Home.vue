<template>        <!-- 姓名：毛俊斐，学号：25230810076，日期：2015.12.15 -->
  <div class="home">
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">探索世界的美好</h1>
        <p class="hero-subtitle">记录每一次旅行的感动，分享每一个精彩瞬间</p>
        <router-link to="/blogs" class="btn btn-large">开始探索</router-link>
      </div>
      <div class="hero-image">
        <img src="/img/首页.jpeg" alt="旅行风景">
      </div>
    </section>

    <!-- 最新文章 -->
    <section class="latest-posts">
      <h2 class="section-title">最新文章</h2>
      <div class="posts-grid">
        <article v-for="post in latestPosts" :key="post.id" class="post-card card" @click="goToPost(post.id)">
          <div class="post-image">
            <img :src="post.image" :alt="post.title">
          </div>
          <div class="post-content">
            <div class="post-meta">
              <span class="post-date">{{ post.date }}</span>
              <span class="post-category">{{ post.category }}</span>
            </div>
            <h3 class="post-title">{{ post.title }}</h3>
            <p class="post-excerpt">{{ post.excerpt }}</p>
            <div class="post-footer">
              <span class="read-time">📖 {{ post.readTime }}</span>
              <span class="likes">❤️ {{ post.likes }}</span>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- 旅游统计 -->
    <section class="travel-stats">
      <div class="stats-container">
        <div class="stat-item">
          <div class="stat-number">15</div>
          <div class="stat-label">访问国家</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">42</div>
          <div class="stat-label">城市足迹</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">128</div>
          <div class="stat-label">精彩故事</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">1000+</div>
          <div class="stat-label">美照片</div>
        </div>
      </div>
    </section>

    <!-- 精选目的地 -->
    <section class="featured-destinations">
      <h2 class="section-title">精选目的地</h2>
      <div class="destinations-grid">
        <div v-for="destination in destinations" :key="destination.name" class="destination-card card">
          <div class="destination-image">
            <img :src="destination.image" :alt="destination.name">
            <div class="destination-overlay">
              <h3>{{ destination.name }}</h3>
              <p>{{ destination.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      latestPosts: [
        {
          id: 1,
          title: '巴黎的浪漫时光',
          excerpt: '漫步在塞纳河畔，感受埃菲尔铁塔下的浪漫气息。这座光之城总是能给人带来无限的惊喜和感动...',
          image: '/img/埃菲尔铁塔.jpeg',
          date: '2025-12-10',
          category: '欧洲',
          readTime: '5分钟',
          likes: 234
        },
        {
          id: 2,
          title: '京都的秋叶物语',
          excerpt: '红叶满山的京都，古寺与秋色交相辉映。在清水寺的石阶上，感受日本传统文化的魅力...',
          image: '/img/清水寺.jpeg',
          date: '2025-12-08',
          category: '亚洲',
          readTime: '8分钟',
          likes: 189
        },
        {
          id: 3,
          title: '冰岛极光之夜',
          excerpt: '在世界的尽头追逐极光，那绿色的光带在天空中舞动，仿佛大自然最绚烂的表演...',
          image: '/img/冰岛.jpeg',
          date: '2025-12-05',
          category: '北欧',
          readTime: '6分钟',
          likes: 312
        }
      ],
      destinations: [
        {
          name: '瑞士阿尔卑斯山',
          description: '壮丽的山峰与纯净的湖泊',
          image: '/img/阿尔卑斯山.jpeg'
        },
        {
          name: '马尔代夫',
          description: '印度洋上的天堂岛国',
          image: '/img/马尔代夫.jpeg'
        },
        {
          name: '新西兰南岛',
          description: '中土世界的真实写照',
          image: '/img/新西兰.jpeg'
        }
      ]
    }
  },
  methods: {
    goToPost(id) {
      this.$router.push(`/blog/${id}`)
    }
  }
}
</script>

<style scoped>
.home {
  min-height: 100vh;
}

/* 英雄区域 */
.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  margin-bottom: 60px;
  background: white;
  padding: 60px 40px;
  border-radius: 20px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
}

.hero-content h1 {
  font-size: 3rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 30px;
  line-height: 1.6;
}

.btn-large {
  padding: 15px 30px;
  font-size: 1.1rem;
}

.hero-image img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

/* 最新文章 */
.latest-posts {
  margin-bottom: 60px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
  color: #333;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.post-card {
  cursor: pointer;
  transition: all 0.3s ease;
}

.post-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.post-content {
  padding: 20px;
}

.post-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  font-size: 0.9rem;
}

.post-date {
  color: #666;
}

.post-category {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2px 10px;
  border-radius: 12px;
  font-size: 0.8rem;
}

.post-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: #333;
}

.post-excerpt {
  color: #666;
  line-height: 1.6;
  margin-bottom: 15px;
}

.post-footer {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: #999;
}

/* 旅游统计 */
.travel-stats {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 60px 40px;
  border-radius: 20px;
  margin-bottom: 60px;
  text-align: center;
}

.stats-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 30px;
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 10px;
}

.stat-label {
  font-size: 1.1rem;
  opacity: 0.9;
}

/* 精选目的地 */
.featured-destinations {
  margin-bottom: 60px;
}

.destinations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.destination-card {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.destination-image img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.destination-card:hover .destination-image img {
  transform: scale(1.1);
}

.destination-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  color: white;
  padding: 30px 20px 20px;
  transform: translateY(20px);
  transition: transform 0.3s ease;
}

.destination-card:hover .destination-overlay {
  transform: translateY(0);
}

.destination-overlay h3 {
  font-size: 1.3rem;
  margin-bottom: 8px;
}

.destination-overlay p {
  opacity: 0.9;
  font-size: 0.9rem;
}

/* 响应式设计 */
@media (max-width: 968px) {
  .hero {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 40px 20px;
  }
  
  .hero-content h1 {
    font-size: 2.5rem;
  }
  
  .hero-image img {
    height: 300px;
  }
  
  .posts-grid {
    grid-template-columns: 1fr;
  }
  
  .stats-container {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .destinations-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .hero-content h1 {
    font-size: 2rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .stats-container {
    grid-template-columns: 1fr;
  }
}
</style>