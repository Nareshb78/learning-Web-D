# 🚀 Setup Guide - Without API Keys

This guide will help you run the Jharkhand Tourism Platform **without requiring any API keys**. The platform will work with fallback responses and basic functionality.

## ✅ What Works Without API Keys

- ✅ **User Authentication** - Login/Register
- ✅ **Destinations** - Browse and view tourist spots
- ✅ **Marketplace** - View products and services
- ✅ **Basic Chatbot** - Fallback responses for common questions
- ✅ **Basic Itinerary Planning** - Simple trip planning without AI
- ✅ **Analytics Dashboard** - View tourism statistics
- ✅ **All UI Components** - Complete frontend experience

## ❌ What's Temporarily Disabled

- ❌ **AI-Powered Chatbot** - Uses fallback responses instead
- ❌ **AI Itinerary Generation** - Creates basic itineraries
- ❌ **Image Uploads** - Cloudinary integration disabled
- ❌ **Payment Processing** - Stripe integration disabled
- ❌ **Blockchain Features** - Ethereum integration disabled
- ❌ **Email Notifications** - Email service disabled

## 📋 Step-by-Step Setup

### Step 1: Install Prerequisites

**Install Node.js:**
1. Go to [nodejs.org](https://nodejs.org/)
2. Download and install the **LTS version**
3. Verify installation:
   ```bash
   node --version
   npm --version
   ```

**Install MongoDB:**
1. Go to [mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)
2. Download and install MongoDB Community Server
3. Start MongoDB service:
   - **Windows**: Should start automatically
   - **Mac**: `brew services start mongodb-community`
   - **Linux**: `sudo systemctl start mongod`

### Step 2: Setup Project

```bash
# Navigate to your project directory
cd C:\Users\nares\Documents\session

# Install all dependencies
npm run install-all
```

### Step 3: Create Environment File

Create a file named `.env` in the `server` folder with this content:

```env
# Database
MONGODB_URI=mongodb://localhost:27017/jharkhand-tourism

# JWT
JWT_SECRET=your_super_secret_jwt_key_here_make_it_long_and_random_123456789
JWT_EXPIRE=7d

# OpenAI API (temporarily disabled)
# OPENAI_API_KEY=your_openai_api_key_here

# Cloudinary (temporarily disabled)
# CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
# CLOUDINARY_API_KEY=your_cloudinary_api_key
# CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Stripe (temporarily disabled)
# STRIPE_SECRET_KEY=your_stripe_secret_key
# STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

# Blockchain (temporarily disabled)
# ETHEREUM_RPC_URL=your_ethereum_rpc_url
# PRIVATE_KEY=your_private_key_for_blockchain_transactions

# Email (temporarily disabled)
# EMAIL_HOST=smtp.gmail.com
# EMAIL_PORT=587
# EMAIL_USER=your_email@gmail.com
# EMAIL_PASS=your_email_password

# Client URL
CLIENT_URL=http://localhost:3000

# Environment
NODE_ENV=development
PORT=5000
```

### Step 4: Start the Application

```bash
# Start both frontend and backend
npm run dev
```

This will start:
- Backend server on `http://localhost:5000`
- Frontend on `http://localhost:3000`

## 🎯 What You Can Do

### 1. **Browse Destinations**
- Visit `http://localhost:3000/destinations`
- View tourist spots in Jharkhand
- Read descriptions and reviews

### 2. **Use Basic Chatbot**
- Click the chat icon in bottom-right
- Ask questions like:
  - "Hello"
  - "What are the destinations?"
  - "Best time to visit?"
  - "Tell me about culture"

### 3. **Plan Basic Itineraries**
- Go to `http://localhost:3000/itinerary-planner`
- Fill out the form
- Generate a basic trip plan

### 4. **Browse Marketplace**
- Visit `http://localhost:3000/marketplace`
- View products and services
- See vendor information

### 5. **User Authentication**
- Register new accounts
- Login/logout
- View user profiles

## 🔧 Re-enabling API Keys Later

When you're ready to add API keys:

1. **OpenAI (for AI features):**
   ```env
   OPENAI_API_KEY=sk-your_actual_key_here
   ```

2. **Cloudinary (for image uploads):**
   ```env
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

3. **Stripe (for payments):**
   ```env
   STRIPE_SECRET_KEY=sk_test_your_key
   STRIPE_PUBLISHABLE_KEY=pk_test_your_key
   ```

4. **Restart the server:**
   ```bash
   npm run dev
   ```

## 🐛 Troubleshooting

### MongoDB Connection Issues
```bash
# Check if MongoDB is running
# Windows:
net start MongoDB

# Mac/Linux:
brew services start mongodb-community
# or
sudo systemctl start mongod
```

### Port Already in Use
```bash
# Kill processes on ports 3000 and 5000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F

# Mac/Linux:
lsof -ti:3000 | xargs kill -9
lsof -ti:5000 | xargs kill -9
```

### Node Modules Issues
```bash
# Clear cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm run install-all
```

## 🎉 Success!

Once everything is running, you should see:
- ✅ Backend: `🚀 Server running on port 5000`
- ✅ Frontend: Browser opens to `http://localhost:3000`
- ✅ No error messages in terminal

The platform is now ready to use with basic functionality! You can explore all features and later add API keys to unlock AI-powered features.

## 📞 Need Help?

If you encounter any issues:
1. Check the terminal for error messages
2. Ensure MongoDB is running
3. Verify all dependencies are installed
4. Check that ports 3000 and 5000 are available

Happy exploring! 🚀
