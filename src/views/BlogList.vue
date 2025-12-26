<template>
  <div class="blog-list">
    <!-- 页面标题 -->
    <div class="page-header">
      <h1>旅行博客</h1>
      <p>记录每一次旅行的感动，分享每一个精彩瞬间</p>
    </div>

    <!-- 分类过滤 -->
    <div class="filter-section">
      <div class="filter-buttons">
        <button 
          v-for="category in categories" 
          :key="category"
          @click="selectedCategory = category"
          :class="['filter-btn', { active: selectedCategory === category }]"
        >
          {{ category }}
        </button>
      </div>
    </div>

    <!-- 搜索栏 -->
    <div class="search-section">
      <div class="search-box">
        <input 
          type="text" 
          v-model="searchQuery" 
          placeholder="搜索旅行目的地、标题或内容..."
          class="search-input"
        >
        <button class="search-btn">🔍</button>
      </div>
    </div>

    <!-- 博客文章网格 -->
    <div class="blog-grid">
      <article 
        v-for="post in filteredPosts" 
        :key="post.id" 
        class="blog-card card"
        @click="goToPost(post.id)"
      >
        <div class="blog-image">
          <img :src="post.image" :alt="post.title">
          <div class="blog-overlay">
            <span class="blog-category">{{ post.category }}</span>
          </div>
        </div>
        
        <div class="blog-content">
          <div class="blog-meta">
            <span class="blog-date">📅 {{ post.date }}</span>
            <span class="blog-location">📍 {{ post.location }}</span>
          </div>
          
          <h2 class="blog-title">{{ post.title }}</h2>
          
          <p class="blog-excerpt">{{ post.excerpt }}</p>
          
          <div class="blog-tags">
            <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
          
          <div class="blog-footer">
            <div class="blog-stats">
              <span class="read-time">⏱️ {{ post.readTime }}</span>
              <span class="likes">❤️ {{ post.likes }}</span>
              <span class="comments">💬 {{ post.comments }}</span>
            </div>
            <div class="blog-author">
              <img :src="post.author.avatar" :alt="post.author.name" class="author-avatar">
              <span class="author-name">{{ post.author.name }}</span>
            </div>
          </div>
        </div>
      </article>
    </div>

    <!-- 加载更多 -->
    <div class="load-more-section" v-if="hasMorePosts">
      <button @click="loadMore" class="btn btn-large">加载更多文章</button>
    </div>

    <!-- 空状态 -->
    <div v-if="filteredPosts.length === 0" class="empty-state">
      <div class="empty-icon">🌍</div>
      <h3>没有找到相关文章</h3>
      <p>试试其他搜索词或分类</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogList',
  data() {
    return {
      searchQuery: '',
      selectedCategory: '全部',
      categories: ['全部', '亚洲', '欧洲', '北美洲', '南美洲', '非洲', '大洋洲', '北欧'],
      posts: [
        {
          id: 1,
          title: '巴黎的浪漫时光',
          excerpt: '漫步在塞纳河畔，感受埃菲尔铁塔下的浪漫气息。这座光之城总是能给人带来无限的惊喜和感动。从卢浮宫的艺术珍品到蒙马特高地的波西米亚风情，巴黎的每一个角落都充满了故事...',
          image: '/img/塞纳河畔.jpeg',
          category: '欧洲',
          location: '法国巴黎',
          date: '2024-12-10',
          readTime: '5分钟',
          likes: 234,
          comments: 18,
          tags: ['巴黎', '浪漫', '艺术', '美食'],
          author: {
            name: '坤坤',
            avatar: '/img/头像.jpeg'
          }
        },
        {
          id: 2,
          title: '京都的秋叶物语',
          excerpt: '红叶满山的京都，古寺与秋色交相辉映。在清水寺的石阶上，感受日本传统文化的魅力。金阁寺的倒影在湖水中闪耀，伏见稻荷大社的千本鸟居延伸向远方...',
          image: '/img/清水寺.jpeg',
          category: '亚洲',
          location: '日本京都',
          date: '2024-12-08',
          readTime: '8分钟',
          likes: 189,
          comments: 12,
          tags: ['京都', '秋叶', '古寺', '文化'],
          author: {
            name: '坤坤',
            avatar: '/img/头像.jpeg'
          }
        },
        {
          id: 3,
          title: '冰岛极光之夜',
          excerpt: '在世界的尽头追逐极光，那绿色的光带在天空中舞动，仿佛大自然最绚烂的表演。从雷克雅未克出发，沿着黄金圈行驶，间歇泉、瀑布、黑沙滩，每一处都是大自然的杰作...',
          image: '/img/冰岛.jpeg',
          category: '北欧',
          location: '冰岛',
          date: '2024-12-05',
          readTime: '6分钟',
          likes: 312,
          comments: 25,
          tags: ['极光', '自然', '摄影', '探险'],
          author: {
            name: '坤坤',
            avatar: '/img/头像.jpeg'
          }
        },
        {
          id: 4,
          title: '巴厘岛的慢时光',
          excerpt: '在德格拉朗梯田漫步，感受稻田的波浪；在乌布的艺术市场淘宝，体验当地的手工艺文化；在海神庙看日落，听海浪拍打礁石的声音。巴厘岛总是能让人慢下来，享受生活的美好...',
          image: '/img/巴厘岛.jpeg',
          category: '亚洲',
          location: '印度尼西亚巴厘岛',
          date: '2024-12-03',
          readTime: '7分钟',
          likes: 156,
          comments: 9,
          tags: ['巴厘岛', '海滩', '文化', '放松'],
          author: {
            name: '坤坤',
            avatar: '/img/头像.jpeg'
          }
        },
        {
          id: 5,
          title: '纽约的都市交响曲',
          excerpt: '站在帝国大厦的观景台，俯瞰这座不夜城。从时代广场的霓虹灯到中央公园的绿意，从百老汇的音乐剧到大都会博物馆的艺术珍品，纽约是一个充满活力和梦想的城市...',
          image: '/img/纽约.jpeg',
          category: '北美洲',
          location: '美国纽约',
          date: '2024-12-01',
          readTime: '9分钟',
          likes: 278,
          comments: 21,
          tags: ['纽约', '都市', '文化', '美食'],
          author: {
            name: '坤坤',
            avatar: '/img/头像.jpeg'
          }
        },
        {
          id: 6,
          title: '圣托里尼的蓝白梦境',
          excerpt: '白色的小房子依山而建，蓝顶教堂在阳光下闪闪发光。在伊亚小镇看世界最美的日落，在红沙滩游泳，在葡萄酒庄品尝当地美酒。圣托里尼是爱琴海最璀璨的明珠...',
          image: '/img/圣托里尼.jpeg',
          category: '欧洲',
          location: '希腊圣托里尼',
          date: '2024-11-28',
          readTime: '6分钟',
          likes: 425,
          comments: 32,
          tags: ['圣托里尼', '海岛', '日落', '浪漫'],
          author: {
            name: '坤坤',
            avatar: '/img/头像.jpeg'
          }
        }
      ],
      hasMorePosts: true
    }
  },
  computed: {
    filteredPosts() {
      let filtered = this.posts

      // 按分类过滤
      if (this.selectedCategory !== '全部') {
        filtered = filtered.filter(post => post.category === this.selectedCategory)
      }

      // 按搜索词过滤
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase()
        filtered = filtered.filter(post => 
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.location.toLowerCase().includes(query) ||
          post.tags.some(tag => tag.toLowerCase().includes(query))
        )
      }

      return filtered
    }
  },
  methods: {
    goToPost(id) {
      this.$router.push(`/blog/${id}`)
    },
    loadMore() {
      // 模拟加载更多文章
      this.hasMorePosts = false
    }
  }
}
</script>

<style scoped>
.blog-list {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* 页面标题 */
.page-header {
  text-align: center;
  margin-bottom: 40px;
}

.page-header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 10px;
}

.page-header p {
  font-size: 1.1rem;
  color: #666;
}

/* 过滤区域 */
.filter-section {
  margin-bottom: 30px;
}

.filter-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.filter-btn {
  padding: 8px 20px;
  border: 2px solid #e0e0e0;
  background: white;
  color: #666;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.filter-btn:hover {
  border-color: #667eea;
  color: #667eea;
}

.filter-btn.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-color: transparent;
}

/* 搜索区域 */
.search-section {
  margin-bottom: 40px;
}

.search-box {
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  background: white;
  border-radius: 25px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  overflow: hidden;
}

.search-input {
  flex: 1;
  padding: 15px 20px;
  border: none;
  outline: none;
  font-size: 1rem;
}

.search-btn {
  padding: 15px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
}

/* 博客网格 */
.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
}

.blog-card {
  cursor: pointer;
  transition: all 0.3s ease;
}

.blog-card:hover {
  transform: translateY(-5px);
}

.blog-image {
  position: relative;
  overflow: hidden;
}

.blog-image img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.blog-card:hover .blog-image img {
  transform: scale(1.05);
}

.blog-overlay {
  position: absolute;
  top: 20px;
  right: 20px;
}

.blog-category {
  background: rgba(102, 126, 234, 0.9);
  color: white;
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
}

.blog-content {
  padding: 25px;
}

.blog-meta {
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  font-size: 0.9rem;
  color: #666;
}

.blog-title {
  font-size: 1.4rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
  line-height: 1.3;
}

.blog-excerpt {
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
}

.blog-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.tag {
  background: #f0f0f0;
  color: #666;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.8rem;
}

.blog-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  border-top: 1px solid #eee;
}

.blog-stats {
  display: flex;
  gap: 15px;
  font-size: 0.9rem;
  color: #999;
}

.blog-author {
  display: flex;
  align-items: center;
  gap: 8px;
}

.author-avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
}

.author-name {
  font-size: 0.9rem;
  color: #666;
}

/* 加载更多 */
.load-more-section {
  text-align: center;
  margin-top: 40px;
}

/* 空状态 */
.empty-state {
  text-align: center;
  padding: 60px 20px;
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 20px;
}

.empty-state h3 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
}

.empty-state p {
  color: #666;
}

/* 响应式设计 */
@media (max-width: 968px) {
  .blog-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
  }
  
  .filter-buttons {
    justify-content: flex-start;
  }
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
  
  .blog-grid {
    grid-template-columns: 1fr;
  }
  
  .blog-meta {
    flex-direction: column;
    gap: 5px;
  }
  
  .blog-footer {
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
  }
}

@media (max-width: 480px) {
  .search-box {
    margin: 0 20px;
  }
  
  .blog-content {
    padding: 20px;
  }
}
</style>