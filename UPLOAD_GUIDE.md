# 📸 CardioShield Image & Video Upload Guide

## 🎯 **Required Files to Upload**

Create these folders in your `public/` directory and upload the following files:

### **📱 Images (Upload to `public/images/`)**

#### **Hero Section**
- `app-demo.mp4` - App dashboard video (1200x900px, 15-30 seconds)
  * Shows real-time heart monitoring interface
  * Include risk scores, alerts, and health metrics
  * Auto-play, muted, loop for continuous demonstration
  * Should show app navigation, alerts, and dashboard features

#### **Testimonials**
- `rajesh-avatar.jpg` - Professional headshot (400x400px)
- `priya-avatar.jpg` - Professional headshot (400x400px) 
- `amit-avatar.jpg` - Professional headshot (400x400px)

- `rajesh-family.jpg` - Family photo (600x400px)
- `priya-dad.jpg` - Father-daughter photo (600x400px)
- `amit-business.jpg` - Business owner in office (600x400px)

#### **Trust Badges (Upload to `public/assets/trust-badges/`)**
- `thyrocare.png` - Company logo (200x80px)
- `1mg.png` - Company logo (200x80px)
- `curefit.png` - Company logo (200x80px)
- `practo.png` - Company logo (200x80px)
- `reddit-india.png` - Community logo (200x80px)

### **🎬 Videos (Upload to `public/videos/`)**

#### **Hero App Demo Video** ⭐ **NEW**
- `app-demo.mp4` - Continuous app demonstration (1200x900px, 15-30 seconds)
  * **Auto-play, muted, loop** for continuous demonstration
  * Show app navigation, dashboard, alerts, and risk scores
  * Include real-time monitoring interface
  * Should demonstrate key features without user interaction

#### **Main Demo Video**
- `howitworks.mp4` - 2-minute product demo (already exists)
  * Show app setup, dashboard, alerts
  * Include real user scenarios

#### **Optional Additional Videos**
- `doctor-review.mp4` - Cardiologist testimonial (optional)
- `family-story.mp4` - User success story (optional)

## 📁 **Folder Structure**

```
public/
├── videos/
│   ├── howitworks.mp4 ✅ (already there)
│   └── app-demo.mp4 (needed - hero section)
├── images/
│   ├── rajesh-avatar.jpg (needed)
│   ├── priya-avatar.jpg (needed)
│   ├── amit-avatar.jpg (needed)
│   ├── rajesh-family.jpg (needed)
│   ├── priya-dad.jpg (needed)
│   └── amit-business.jpg (needed)
└── assets/
    └── trust-badges/
        ├── thyrocare.png (needed)
        ├── 1mg.png (needed)
        ├── curefit.png (needed)
        ├── practo.png (needed)
        └── reddit-india.png (needed)
```

## 🎨 **Image & Video Specifications**

### **Hero App Demo Video**
- **Size**: 1200x900px (4:3 aspect ratio)
- **Duration**: 15-30 seconds (loop)
- **Format**: MP4, H.264 codec
- **Settings**: Auto-play, muted, loop
- **Content**: Continuous app demonstration showing:
  - App navigation and dashboard
  - Real-time heart rate monitoring
  - Risk score calculations
  - Alert notifications
  - Health insights interface
- **Style**: Clean, professional, smooth transitions

### **Avatar Images**
- **Size**: 400x400px (square)
- **Format**: JPG or PNG
- **Style**: Professional headshots
- **Background**: Clean, professional

### **Family Photos**
- **Size**: 600x400px (landscape)
- **Format**: JPG
- **Style**: Warm, authentic family moments
- **Privacy**: Faces can be partially obscured

### **Company Logos**
- **Size**: 200x80px
- **Format**: PNG with transparency
- **Style**: Clean, professional logos

## ⚡ **Quick Start**

1. **Create folders**: `public/images/` and `public/assets/trust-badges/`
2. **Upload hero video**: `app-demo.mp4` to `public/videos/` ⭐ **NEW**
3. **Upload avatars**: 3 avatar images to `public/images/`
4. **Upload family photos**: 3 family photos to `public/images/`
5. **Upload logos**: 5 company logos to `public/assets/trust-badges/`

## 🔄 **Fallback System**

The code includes automatic fallbacks:
- Missing avatars → Colored initials
- Missing images → Placeholder graphics
- Missing videos → Demo placeholders

## 📱 **Mobile Optimization**

- Images automatically resize for mobile
- Avatars become circular on mobile
- Family photos stack vertically on small screens

## 🎯 **Priority Order**

1. **Must have**: `app-demo.mp4` (continuous hero video) ⭐ **NEW**
2. **High impact**: 3 avatar images (testimonials)
3. **Medium impact**: 3 family photos (emotional connection)
4. **Nice to have**: 5 company logos (social proof)

Upload in this order for immediate visual improvement! The hero video will create the biggest impact since it auto-plays continuously.
