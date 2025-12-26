<template>
  <div class="about">
    <!-- 个人介绍区域 -->
    <section class="hero-section">
      <div class="hero-content">
        <div class="profile-section">
          <div class="profile-image">
            <img src="/img/头像.jpeg" alt="个人照片">
            <div class="profile-badge">✈️ 旅行博主</div>
          </div>
          
          <div class="profile-info">
            <h1 class="profile-name">坤坤</h1>
            <p class="profile-title">旅行摄影师 · 文化探索者 · 美食爱好者</p>
            <div class="profile-stats">
              <div class="stat-item">
                <span class="stat-number">15</span>
                <span class="stat-label">访问国家</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">42</span>
                <span class="stat-label">城市足迹</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">1000+</span>
                <span class="stat-label">摄影作品</span>
              </div>
            </div>
            
            <div class="social-links">
              <a href="#" class="social-link instagram">📷 Instagram</a>
              <a href="#" class="social-link twitter">🐦 Twitter</a>
              <a href="#" class="social-link youtube">📺 YouTube</a>
              <a href="#" class="social-link email">📧 Email</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 关于我的故事 -->
    <section class="story-section">
      <div class="container">
        <h2 class="section-title">我的旅行故事</h2>
        <div class="story-content">
          <div class="story-text">
            <h3>🌍 旅行的开始</h3>
            <p>
              我的故事开始于2015年的一次背包旅行。那是我第一次独自出国，目的地是泰国。
              站在曼谷的街头，看着不同肤色的人们说着不同的语言，我意识到世界是如此的广阔和多元。
              那一刻，我知道我的人生将不再局限于一个地方。
            </p>
            
            <h3>📸 摄影的热爱</h3>
            <p>
              旅行让我爱上了摄影。每一张照片都是一个故事，每一个瞬间都值得被记录。
              从最初用手机随手拍，到现在专业相机创作，摄影已经成为我旅行中不可或缺的一部分。
              我喜欢捕捉那些真实而动人的瞬间 - 当地人的微笑、孩子们的奔跑、老街的黄昏...
            </p>
            
            <h3>✍️ 写作的初心</h3>
            <p>
              创建这个博客的初衷，是希望分享我的旅行经历和感悟。每到一个新的地方，我都会深入了解当地的文化、
              品尝地道的美食、与当地人交流。这些经历让我成长，也让我对这个世界有了更深的理解。
              通过文字和图片，我希望能够带给你身临其境的感受，也许还能激发你踏上旅途的勇气。
            </p>
          </div>
          
          <div class="story-image">
            <img src="/img/清水寺.jpeg" alt="旅行照片">
            <div class="image-caption">在京都的古寺中寻找内心的平静</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 旅行理念 -->
    <section class="philosophy-section">
      <div class="container">
        <h2 class="section-title">我的旅行理念</h2>
        <div class="philosophy-grid">
          <div class="philosophy-card card">
            <div class="philosophy-icon">🤝</div>
            <h3>深度交流</h3>
            <p>不只是打卡景点，而是与当地人真诚交流，了解他们的生活和文化。每一次对话都是一次文化的碰撞和学习。</p>
          </div>
          
          <div class="philosophy-card card">
            <div class="philosophy-icon">🍽️</div>
            <h3>美食探索</h3>
            <p>美食是了解一个地方文化最直接的方式。从街头小摊到米其林餐厅，每一道菜都有它的故事。</p>
          </div>
          
          <div class="philosophy-card card">
            <div class="philosophy-icon">🌱</div>
            <h3>可持续旅行</h3>
            <p>尊重当地环境和文化，选择环保的旅行方式，支持当地经济，让旅行成为积极的力量。</p>
          </div>
          
          <div class="philosophy-card card">
            <div class="philosophy-icon">📚</div>
            <h3>持续学习</h3>
            <p>每次旅行都是一次学习的机会。学习历史、学习语言、学习不同的生活方式，让自己变得更加开放和包容。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 旅行足迹 -->
    <section class="timeline-section">
      <div class="container">
        <h2 class="section-title">旅行足迹</h2>
        <div class="timeline">
          <div class="timeline-item" v-for="(journey, index) in journeys" :key="index">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <div class="timeline-date">{{ journey.date }}</div>
              <h3 class="timeline-title">{{ journey.title }}</h3>
              <p class="timeline-description">{{ journey.description }}</p>
              <div class="timeline-image" v-if="journey.image">
                <img :src="journey.image" :alt="journey.title">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 装备推荐 -->
    <section class="gear-section">
      <div class="container">
        <h2 class="section-title">我的旅行装备</h2>
        <div class="gear-grid">
          <div class="gear-card card">
            <div class="gear-icon">📷</div>
            <h3>摄影装备</h3>
            <ul>
              <li>Sony A7R IV 相机</li>
              <li>24-70mm f/2.8 镜头</li>
              <li>DJI Mavic 3 无人机</li>
              <li>GoPro Hero 11 运动相机</li>
            </ul>
          </div>
          
          <div class="gear-card card">
            <div class="gear-icon">🎒</div>
            <h3>背包装备</h3>
            <ul>
              <li>Osprey Atmos AG 65 登山包</li>
              <li>Peak Design 相机包</li>
              <li>Pacsafe 安全背包</li>
              <li>旅行收纳套装</li>
            </ul>
          </div>
          
          <div class="gear-card card">
            <div class="gear-icon">🔌</div>
            <h3>电子设备</h3>
            <ul>
              <li>MacBook Pro 14寸</li>
              <li>iPad Pro + Apple Pencil</li>
              <li>Anker 充电宝套装</li>
              <li>通用转换插头</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 联系我 -->
    <section class="contact-section">
      <div class="container">
        <h2 class="section-title">联系我</h2>
        <div class="contact-content">
          <div class="contact-text">
            <p>如果你对我的旅行故事感兴趣，或者有任何旅行相关的问题想要交流，欢迎随时联系我！</p>
            <p>我也很乐意接受旅行写作、摄影合作等机会。</p>
            
            <div class="contact-info">
              <div class="contact-item">
                <span class="contact-icon">📧</span>
                <span>travel@example.com</span>
              </div>
              <div class="contact-item">
                <span class="contact-icon">📱</span>
                <span>微信: TravelExplorer</span>
              </div>
              <div class="contact-item">
                <span class="contact-icon">📍</span>
                <span>目前位置: 中国 · 上海</span>
              </div>
            </div>
          </div>
          
          <div class="contact-form">
            <h3>发送消息</h3>
            <form @submit.prevent="submitForm">
              <div class="form-group">
                <input 
                  type="text" 
                  v-model="form.name" 
                  placeholder="您的姓名" 
                  class="form-input"
                  required
                >
              </div>
              <div class="form-group">
                <input 
                  type="email" 
                  v-model="form.email" 
                  placeholder="邮箱地址" 
                  class="form-input"
                  required
                >
              </div>
              <div class="form-group">
                <textarea 
                  v-model="form.message" 
                  placeholder="您的消息..." 
                  class="form-textarea"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" class="btn btn-large">发送消息</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      journeys: [
        {
          date: '2024年12月',
          title: '冰岛极光之旅',
          description: '在冰岛的冬夜里，我终于看到了梦寐以求的极光。绿色的光带在天空中舞动，那一刻的震撼无法用言语形容。',
          image: 'img/冰岛.jpeg'
        },
        {
          date: '2024年10月',
          title: '巴黎塞纳河漫步',
          description: '沿着塞纳河畔悠闲散步，两岸的古老建筑诉说着这座浪漫之城的历史。从埃菲尔铁塔到卢浮宫，每一步都是一幅美丽的风景画。',
          image: 'img/塞纳河畔.jpeg'
        },
        {
          date: '2024年8月',
          title: '纽约都市探索',
          description: '漫步在曼哈顿的街头，感受这座不夜城的脉动。从时代广场的霓虹灯到中央公园的绿意，纽约总是能给人带来无限惊喜和灵感。',
          image: 'img/纽约.jpeg'
        },
        {
          date: '2024年5月',
          title: '日本樱花季',
          description: '从东京到京都，一路追逐樱花的脚步。在哲学之道漫步，在清水寺赏樱，这是关于美的一次深度体验。',
          image: 'img/清水寺.jpeg'
        },
        {
          date: '2024年2月',
          title: '北欧三国之旅',
          description: '在挪威的峡湾中航行，在瑞典的森林里徒步，在丹麦的小镇中品味生活。北欧的宁静与美丽深深打动了我。',
          image: 'img/圣托里尼.jpeg'
        }
      ],
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      // 模拟表单提交
      alert(`感谢您的消息，${this.form.name}！我会尽快回复您。`)
      this.form = {
        name: '',
        email: '',
        message: ''
      }
    }
  }
}
</script>

<style scoped>
.about {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 50px;
  color: #333;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 2px;
}

/* 个人介绍区域 */
.hero-section {
  background: linear-gradient(135deg, #f8f9ff 0%, #f0f2ff 100%);
  padding: 60px 0;
  margin-bottom: 60px;
  border-radius: 20px;
}

.profile-section {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 40px;
  align-items: start;
  max-width: 900px;
  margin: 0 auto;
}

.profile-image {
  position: relative;
}

.profile-image img {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  border: 6px solid white;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.profile-badge {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  box-shadow: 0 3px 10px rgba(0,0,0,0.2);
}

.profile-info {
  padding-top: 20px;
}

.profile-name {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 10px;
}

.profile-title {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 30px;
  line-height: 1.4;
}

.profile-stats {
  display: flex;
  gap: 40px;
  margin-bottom: 30px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 5px;
}

.stat-label {
  font-size: 0.9rem;
  color: #666;
}

.social-links {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.social-link {
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  background: white;
  color: #666;
  text-decoration: none;
  border-radius: 25px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.social-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.15);
  color: #667eea;
}

/* 故事区域 */
.story-section {
  margin-bottom: 60px;
}

.story-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
  align-items: start;
}

.story-text h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 15px;
  margin-top: 30px;
}

.story-text h3:first-child {
  margin-top: 0;
}

.story-text p {
  line-height: 1.8;
  color: #444;
  margin-bottom: 15px;
}

.story-image {
  position: sticky;
  top: 20px;
}

.story-image img {
  width: 100%;
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

/* 旅行理念 */
.philosophy-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 60px 0;
  margin-bottom: 60px;
  border-radius: 20px;
}

.philosophy-section .section-title {
  color: white;
}

.philosophy-section .section-title::after {
  background: white;
}

.philosophy-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.philosophy-card {
  background: rgba(255, 255, 255, 0.95);
  text-align: center;
  padding: 30px 20px;
  transition: transform 0.3s ease;
}

.philosophy-card:hover {
  transform: translateY(-5px);
}

.philosophy-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.philosophy-card h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 15px;
}

.philosophy-card p {
  color: #666;
  line-height: 1.6;
}

/* 旅行足迹 */
.timeline-section {
  margin-bottom: 60px;
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background: linear-gradient(to bottom, #667eea, #764ba2);
}

.timeline-item {
  position: relative;
  margin-bottom: 50px;
}

.timeline-item:nth-child(odd) .timeline-content {
  left: 0;
  right: 52%;
  text-align: right;
}

.timeline-item:nth-child(even) .timeline-content {
  left: 52%;
  right: 0;
  text-align: left;
}

.timeline-dot {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  border: 4px solid white;
  box-shadow: 0 3px 10px rgba(0,0,0,0.2);
}

.timeline-content {
  position: relative;
  background: white;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 3px 15px rgba(0,0,0,0.1);
}

.timeline-date {
  color: #667eea;
  font-weight: 600;
  margin-bottom: 8px;
  font-size: 0.9rem;
}

.timeline-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
}

.timeline-description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 15px;
}

.timeline-image img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
}

/* 装备推荐 */
.gear-section {
  margin-bottom: 60px;
}

.gear-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.gear-card {
  padding: 30px;
  text-align: center;
}

.gear-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.gear-card h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
}

.gear-card ul {
  list-style: none;
  padding: 0;
}

.gear-card li {
  padding: 8px 0;
  color: #666;
  border-bottom: 1px solid #f0f0f0;
}

.gear-card li:last-child {
  border-bottom: none;
}

/* 联系我 */
.contact-section {
  background: linear-gradient(135deg, #f8f9ff 0%, #f0f2ff 100%);
  padding: 60px 0;
  border-radius: 20px;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
}

.contact-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #444;
  margin-bottom: 20px;
}

.contact-info {
  margin-top: 30px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
  padding: 15px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.contact-icon {
  font-size: 1.5rem;
}

.contact-form {
  background: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
}

.contact-form h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 25px;
  text-align: center;
}

.form-group {
  margin-bottom: 20px;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 15px;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
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
  min-height: 120px;
}

.btn-large {
  width: 100%;
  padding: 15px 30px;
  font-size: 1.1rem;
}

/* 响应式设计 */
@media (max-width: 968px) {
  .profile-section {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .story-content {
    grid-template-columns: 1fr;
  }
  
  .story-image {
    position: static;
    order: -1;
    margin-bottom: 30px;
  }
  
  .timeline::before {
    left: 20px;
  }
  
  .timeline-item:nth-child(odd) .timeline-content,
  .timeline-item:nth-child(even) .timeline-content {
    left: 60px;
    right: 0;
    text-align: left;
  }
  
  .timeline-dot {
    left: 20px;
  }
  
  .contact-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

@media (max-width: 768px) {
  .profile-image img {
    width: 200px;
    height: 200px;
  }
  
  .profile-name {
    font-size: 2rem;
  }
  
  .profile-stats {
    justify-content: center;
  }
  
  .philosophy-grid {
    grid-template-columns: 1fr;
  }
  
  .gear-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-form {
    padding: 30px 20px;
  }
}

@media (max-width: 480px) {
  .about {
    padding: 0 15px;
  }
  
  .hero-section {
    padding: 40px 0;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .social-links {
    justify-content: center;
  }
  
  .timeline-content {
    padding: 20px 15px;
  }
}
</style>