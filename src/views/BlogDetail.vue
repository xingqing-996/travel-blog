<template>
  <div class="blog-detail" v-if="post">
    <!-- 文章头部 -->
    <header class="article-header">
      <div class="header-container">
        <div class="article-meta">
          <span class="article-category">{{ post.category }}</span>
          <span class="article-date">{{ post.date }}</span>
          <span class="article-location">📍 {{ post.location }}</span>
        </div>
        
        <h1 class="article-title">{{ post.title }}</h1>
        

        <div class="article-stats">
          <span class="stat">⏱️ {{ post.readTime }}</span>
          <span class="stat">❤️ {{ post.likes }}</span>
          <span class="stat">💬 {{ post.comments }}</span>
          <span class="stat">👁️ {{ post.views }}</span>
        </div>
      </div>
    </header>

    <!-- 文章封面图片 -->
    <div class="article-hero">
      <img :src="post.heroImage" :alt="post.title" class="hero-image">
      <div class="image-caption">{{ post.imageCaption }}</div>
    </div>

    <!-- 文章内容 -->
    <div class="article-content">
      <div class="content-container">
        <!-- 文章摘要 -->
        <div class="article-excerpt">
          <p>{{ post.excerpt }}</p>
        </div>

        <!-- 文章正文 -->
        <div class="article-body">
          <div v-for="section in post.sections" :key="section.id" class="content-section">
            <h2>{{ section.title }}</h2>
            <div v-html="section.content"></div>
            
            <!-- 章节图片 -->
            <div v-if="section.image" class="section-image">
              <img :src="section.image" :alt="section.title">
              <p class="image-caption">{{ section.imageCaption }}</p>
            </div>
          </div>
        </div>

        <!-- 文章标签 -->
        <div class="article-tags">
          <h3>相关标签</h3>
          <div class="tags-list">
            <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </div>

        <!-- 分享按钮 -->
        <div class="share-section">
          <h3>分享这篇文章</h3>
          <div class="share-buttons">
            <button class="share-btn wechat">微信</button>
            <button class="share-btn weibo">微博</button>
            <button class="share-btn twitter">Twitter</button>
            <button class="share-btn facebook">Facebook</button>
          </div>
        </div>



        <!-- 评论区 -->
        <div class="comments-section">
          <h3>评论 ({{ post.comments }})</h3>
          
          <!-- 评论表单 -->
          <div class="comment-form">
            <h4>发表评论</h4>
            <div class="form-group">
              <input type="text" placeholder="您的名字" v-model="commentForm.name" class="form-input">
              <input type="email" placeholder="邮箱地址" v-model="commentForm.email" class="form-input">
            </div>
            <textarea 
              placeholder="分享您的想法..." 
              v-model="commentForm.content" 
              class="form-textarea"
              rows="4"
            ></textarea>
            <button @click="submitComment" class="btn">发表评论</button>
          </div>

          <!-- 评论列表 -->
          <div class="comments-list">
            <div v-for="comment in post.commentsList" :key="comment.id" class="comment">
              <img :src="comment.avatar" :alt="comment.name" class="comment-avatar">
              <div class="comment-content">
                <div class="comment-header">
                  <span class="comment-name">{{ comment.name }}</span>
                  <span class="comment-date">{{ comment.date }}</span>
                </div>
                <p class="comment-text">{{ comment.content }}</p>
                <div class="comment-actions">
                  <button class="comment-action">👍 {{ comment.likes }}</button>
                  <button class="comment-action">回复</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 相关文章 -->
        <div class="related-posts">
          <h3>相关文章</h3>
          <div class="related-grid">
            <article 
              v-for="relatedPost in relatedPosts" 
              :key="relatedPost.id" 
              class="related-card"
              @click="goToPost(relatedPost.id)"
            >
              <img :src="relatedPost.image" :alt="relatedPost.title" class="related-image">
              <div class="related-content">
                <h4>{{ relatedPost.title }}</h4>
                <p>{{ relatedPost.excerpt }}</p>
                <span class="related-category">{{ relatedPost.category }}</span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- 文章不存在 -->
  <div v-else class="not-found">
    <div class="not-found-content">
      <div class="not-found-icon">🌍</div>
      <h2>文章未找到</h2>
      <p>抱歉，您访问的文章不存在或已被删除。</p>
      <router-link to="/blogs" class="btn">返回博客列表</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogDetail',
  props: ['id'],
  data() {
    return {
      post: null,
      commentForm: {
        name: '',
        email: '',
        content: ''
      },
      relatedPosts: []
    }
  },
  created() {
    this.loadPost()
    this.loadRelatedPosts()
  },
  watch: {
    '$route'(to, from) {
      if (to.params.id !== from.params.id) {
        this.loadPost()
        window.scrollTo(0, 0)
      }
    }
  },
  methods: {
    loadPost() {
      // 模拟文章数据
      const posts = {
        1: {
          id: 1,
          title: '巴黎的浪漫时光',
          excerpt: '漫步在塞纳河畔，感受埃菲尔铁塔下的浪漫气息。这座光之城总是能给人带来无限的惊喜和感动。从卢浮宫的艺术珍品到蒙马特高地的波西米亚风情，巴黎的每一个角落都充满了故事。',
          category: '欧洲',
          location: '法国巴黎',
          date: '2024-12-10',
          readTime: '5分钟',
          likes: 234,
          comments: 18,
          views: 1520,
          heroImage: '/img/埃菲尔铁塔.jpeg',
          imageCaption: '埃菲尔铁塔下的黄昏时分',
          tags: ['巴黎', '浪漫', '艺术', '美食', '建筑'],
          author: {
            name: '旅行作家',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80',
            bio: '热爱旅行和摄影的自由撰稿人，足迹遍布世界各地'
          },
          sections: [
            {
              id: 1,
              title: '初遇巴黎',
              content: `<p>第一次踏上巴黎的土地，是在一个阳光明媚的春天。走出戴高乐机场，清新的空气中混合着咖啡和面包的香气，这就是巴黎给我的第一印象。</p>
                       <p>从机场到市区的路上，沿途的风景渐渐变得迷人起来。古老的建筑、时尚的行人、路边的小咖啡馆，每一帧都像是电影中的画面。</p>`,
              image: '/img/塞纳河畔.jpeg',
              imageCaption: '塞纳河畔的午后时光'
            },
            {
              id: 2,
              title: '埃菲尔铁塔的浪漫',
              content: `<p>埃菲尔铁塔是巴黎的象征，也是每个来巴黎的人必去的地方。白天，它雄伟壮观；夜晚，它璀璨夺目。</p>
                       <p>我最喜欢的是黄昏时分登上铁塔，看着太阳慢慢落下，整个巴黎城在暮色中变得温柔。华灯初上时，铁塔每小时都会闪烁五分钟，那是一种无法用言语形容的美。</p>
                       <p>在铁塔下的战神广场草坪上，经常能看到浪漫的情侣、嬉戏的孩子，还有像我一样的旅行者，大家都在用自己的方式感受着巴黎的浪漫。</p>`,
              image: '/img/埃菲尔铁塔.jpeg',
              imageCaption: '夜晚闪烁的埃菲尔铁塔'
            },
            {
              id: 3,
              title: '卢浮宫的艺术盛宴',
              content: `<p>卢浮宫是世界上最大的艺术博物馆，收藏了从古代文明到19世纪中叶的艺术品。</p>
                       <p>蒙娜丽莎的微笑神秘而迷人，维纳斯的雕像优雅而完美，胜利女神像庄严而神圣。每一件艺术品都有着它独特的故事。</p>
                       <p>我花了一整天的时间在卢浮宫里，但仍然感觉只是走马观花。这个巨大的艺术宝库，值得反复参观。</p>`,
              image: '/img/卢浮宫.jpeg',
              imageCaption: '卢浮宫玻璃金字塔'
            },
            {
              id: 4,
              title: '蒙马特高地的艺术气息',
              content: `<p>蒙马特高地是巴黎的艺术区，这里曾经居住过许多著名的艺术家。</p>
                       <p>在圣心大教堂前的台阶上，可以俯瞰整个巴黎市区。小丘广场上，画家们正在为游客作画，每一幅作品都是独一无二的。</p>
                       <p>这里的小巷蜿蜒曲折，每转一个弯都可能遇到惊喜。从古老的面包店到现代的画廊，从传统的小酒馆到时尚的精品店，蒙马特总能给人带来新的发现。</p>`
            }
          ],
          commentsList: [
            {
              id: 1,
              name: '游客',
              avatar: '/img/游客.jpg',
              date: '2024-12-11',
              content: '写得真好！让我想起了去年去巴黎的美好回忆。',
              likes: 12
            },
            {
              id: 2,
              name: '游客',
              avatar: '/img/游客.jpg',
              date: '2024-12-11',
              content: '巴黎的咖啡馆真的是必体验！推荐左岸的几家老字号咖啡馆。',
              likes: 8
            }
          ]
        },
        2: {
          id: 2,
          title: '京都的秋叶物语',
          excerpt: '红叶满山的京都，古寺与秋色交相辉映。在清水寺的石阶上，感受日本传统文化的魅力。金阁寺的倒影在湖水中闪耀，伏见稻荷大社的千本鸟居延伸向远方...',
          category: '亚洲',
          location: '日本京都',
          date: '2024-12-08',
          readTime: '8分钟',
          likes: 189,
          comments: 12,
          views: 980,
          heroImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
          imageCaption: '清水寺秋色',
          tags: ['京都', '秋叶', '古寺', '文化', '日本'],
          author: {
            name: '文化探索者',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80',
            bio: '专注于亚洲文化和传统艺术的深度旅行者'
          },
          sections: [
            {
              id: 1,
              title: '清水寺的枫叶',
              content: `<p>清水寺是京都最古老的寺庙之一，也是赏枫的最佳地点。从音羽瀑布俯瞰整个京都市区，满山红叶如火如荼。</p>
                       <p>站在清水舞台，脚下是层层叠叠的红叶，远处是京都的城市天际线。这种古今交融的景象，只有在京都才能看到。</p>`
            }
          ],
          commentsList: []
        },
        3: {
          id: 3,
          title: '冰岛极光之夜',
          excerpt: '在世界的尽头追逐极光，那绿色的光带在天空中舞动，仿佛大自然最绚烂的表演。从雷克雅未克出发，沿着黄金圈行驶，间歇泉、瀑布、黑沙滩，每一处都是大自然的杰作...',
          category: '北欧',
          location: '冰岛',
          date: '2024-12-05',
          readTime: '6分钟',
          likes: 312,
          comments: 25,
          views: 1250,
          heroImage: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
          imageCaption: '冰岛夜空中的极光',
          tags: ['极光', '自然', '摄影', '探险', '冰岛'],
          author: {
            name: '极地探险家',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80',
            bio: '专门拍摄极地风光和自然奇观的摄影师'
          },
          sections: [
            {
              id: 1,
              title: '追逐极光',
              content: `<p>极光是自然界最壮观的现象之一。在冰岛的冬夜，当绿色的光带在天空中舞动时，那种震撼是无法用言语形容的。</p>
                       <p>我们驱车来到远离城市光污染的地方，在寒冷中等待。当极光出现的那一刻，所有的等待都值得了。</p>`
            }
          ],
          commentsList: []
        }
      }
      
      this.post = posts[this.id] || null
    },
    loadRelatedPosts() {
      // 模拟相关文章数据
      this.relatedPosts = [
        {
          id: 2,
          title: '京都的秋叶物语',
          excerpt: '红叶满山的京都，古寺与秋色交相辉映...',
          image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          category: '亚洲'
        },
        {
          id: 3,
          title: '冰岛极光之夜',
          excerpt: '在世界的尽头追逐极光，那绿色的光带在天空中舞动...',
          image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          category: '北欧'
        }
      ]
    },
    goToPost(id) {
      this.$router.push(`/blog/${id}`)
      window.scrollTo(0, 0)
    },
    submitComment() {
      // 模拟提交评论
      if (this.commentForm.name && this.commentForm.content) {
        const newComment = {
          id: Date.now(),
          name: this.commentForm.name,
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80',
          date: new Date().toISOString().split('T')[0],
          content: this.commentForm.content,
          likes: 0
        }
        this.post.commentsList.push(newComment)
        this.post.comments++
        
        // 清空表单
        this.commentForm = {
          name: '',
          email: '',
          content: ''
        }
      }
    }
  }
}
</script>

<style scoped>
.blog-detail {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px 40px;
}

/* 文章头部 */
.article-header {
  background: white;
  padding: 40px 0;
  margin-bottom: 30px;
  border-radius: 15px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.header-container {
  max-width: 700px;
  margin: 0 auto;
  padding: 0 30px;
}

.article-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 20px;
}

.article-category {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

.article-date,
.article-location {
  color: #666;
  font-size: 0.9rem;
}

.article-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  line-height: 1.2;
  margin-bottom: 25px;
}

.article-author {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

.author-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.author-info {
  flex: 1;
}

.author-name {
  font-weight: 600;
  color: #333;
  margin-bottom: 3px;
}

.author-bio {
  color: #666;
  font-size: 0.9rem;
}

.article-stats {
  display: flex;
  gap: 20px;
  font-size: 0.9rem;
  color: #666;
}

/* 文章封面 */
.article-hero {
  margin-bottom: 40px;
  position: relative;
}

.hero-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
}

.image-caption {
  text-align: center;
  color: #666;
  font-size: 0.9rem;
  margin-top: 10px;
  font-style: italic;
}

/* 文章内容 */
.article-content {
  background: white;
  border-radius: 15px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  overflow: hidden;
}

.content-container {
  padding: 40px;
}

.article-excerpt {
  background: linear-gradient(135deg, #f8f9ff 0%, #f0f2ff 100%);
  padding: 25px;
  border-radius: 10px;
  margin-bottom: 40px;
  border-left: 4px solid #667eea;
}

.article-excerpt p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333;
  font-style: italic;
}

/* 内容章节 */
.content-section {
  margin-bottom: 50px;
}

.content-section h2 {
  font-size: 1.8rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #f0f0f0;
}

.content-section p {
  line-height: 1.8;
  color: #444;
  margin-bottom: 15px;
}

.section-image {
  margin: 30px 0;
}

.section-image img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 3px 15px rgba(0,0,0,0.1);
}

/* 标签 */
.article-tags {
  margin-bottom: 40px;
  padding-top: 30px;
  border-top: 1px solid #eee;
}

.article-tags h3 {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: #333;
}

.tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tag {
  background: #f0f0f0;
  color: #666;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.tag:hover {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

/* 分享 */
.share-section {
  margin-bottom: 40px;
  padding: 30px 0;
  border-top: 1px solid #eee;
}

.share-section h3 {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: #333;
}

.share-buttons {
  display: flex;
  gap: 15px;
}

.share-btn {
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.share-btn.wechat {
  background: #07c160;
  color: white;
}

.share-btn.weibo {
  background: #e6162d;
  color: white;
}

.share-btn.twitter {
  background: #1da1f2;
  color: white;
}

.share-btn.facebook {
  background: #4267b2;
  color: white;
}

.share-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

/* 作者信息 */
.author-section {
  margin-bottom: 40px;
}

.author-card {
  display: flex;
  gap: 20px;
  padding: 30px;
  background: linear-gradient(135deg, #f8f9ff 0%, #f0f2ff 100%);
  border-radius: 15px;
  align-items: center;
}

.author-large-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
}

.author-details h3 {
  font-size: 1.2rem;
  margin-bottom: 8px;
  color: #333;
}

.author-details p {
  color: #666;
  margin-bottom: 15px;
}

.author-social {
  display: flex;
  gap: 15px;
}

.social-link {
  color: #667eea;
  cursor: pointer;
  transition: color 0.3s ease;
}

.social-link:hover {
  color: #764ba2;
}

/* 评论区 */
.comments-section {
  margin-bottom: 40px;
}

.comments-section h3 {
  font-size: 1.5rem;
  margin-bottom: 25px;
  color: #333;
}

.comment-form {
  background: #f8f9fa;
  padding: 25px;
  border-radius: 10px;
  margin-bottom: 30px;
}

.comment-form h4 {
  margin-bottom: 15px;
  color: #333;
}

.form-group {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-bottom: 15px;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #667eea;
}

.form-textarea {
  resize: vertical;
  min-height: 100px;
}

.comments-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.comment {
  display: flex;
  gap: 15px;
  padding: 20px;
  background: white;
  border: 1px solid #eee;
  border-radius: 10px;
}

.comment-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.comment-content {
  flex: 1;
}

.comment-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.comment-name {
  font-weight: 600;
  color: #333;
}

.comment-date {
  color: #999;
  font-size: 0.9rem;
}

.comment-text {
  color: #444;
  line-height: 1.6;
  margin-bottom: 10px;
}

.comment-actions {
  display: flex;
  gap: 15px;
}

.comment-action {
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.comment-action:hover {
  color: #667eea;
}

/* 相关文章 */
.related-posts {
  margin-top: 40px;
  padding-top: 40px;
  border-top: 2px solid #eee;
}

.related-posts h3 {
  font-size: 1.5rem;
  margin-bottom: 25px;
  color: #333;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
}

.related-card {
  cursor: pointer;
  transition: transform 0.3s ease;
}

.related-card:hover {
  transform: translateY(-3px);
}

.related-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 15px;
}

.related-content h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  line-height: 1.3;
}

.related-content p {
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 10px;
}

.related-category {
  background: #f0f0f0;
  color: #666;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.8rem;
}

/* 404页面 */
.not-found {
  text-align: center;
  padding: 60px 20px;
}

.not-found-icon {
  font-size: 5rem;
  margin-bottom: 20px;
}

.not-found h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 10px;
}

.not-found p {
  color: #666;
  margin-bottom: 30px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .article-title {
    font-size: 2rem;
  }
  
  .hero-image {
    height: 250px;
  }
  
  .content-container {
    padding: 25px;
  }
  
  .form-group {
    grid-template-columns: 1fr;
  }
  
  .share-buttons {
    flex-wrap: wrap;
  }
  
  .author-card {
    flex-direction: column;
    text-align: center;
  }
  
  .related-grid {
    grid-template-columns: 1fr;
  }
}
</style>