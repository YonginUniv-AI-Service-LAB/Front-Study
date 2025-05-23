// MainScreen.js
import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import { MaterialCommunityIcons, Feather, FontAwesome5 } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const categories = [
  '전체', '상의', '팬츠', '원피스', '아우터',
  '스커트', '슈즈', '가방', '잠옷', '이너웨어'
];

// 임의 광고 이미지 URL (3개)
const adImages = [
  'https://picsum.photos/367/304?random=1',
  'https://picsum.photos/367/304?random=2',
  'https://picsum.photos/367/304?random=3',
];

export default function MainScreen() {
  const [adIndex, setAdIndex] = useState(0);

  // 3초마다 광고 이미지 순환
  useEffect(() => {
    const iv = setInterval(() => {
      setAdIndex(i => (i + 1) % adImages.length);
    }, 3000);
    return () => clearInterval(iv);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* Status Bar */}
      <View style={styles.statusBar} />

      {/* Header: 로고 + 아이콘 */}
      <View style={styles.header}>
        <Image
          source={require('./assets/Logo.png')}
          style={styles.logoImage}
          resizeMode="contain"
        />
        <View style={styles.headerIcons}>
          <MaterialCommunityIcons name="cloud-outline" size={24} color="#1E1E1E" />
          <Feather name="search" size={24} color="#1E1E1E" />
          <FontAwesome5 name="envelope" size={24} color="#1E1E1E" />
        </View>
      </View>

      {/* 광고 배너 (3초마다 이미지 교체) */}
      <View style={styles.adContainer}>
        <Image
          source={{ uri: adImages[adIndex] }}
          style={styles.adImage}
          resizeMode="cover"
        />
      </View>

      {/* 기획전 타이틀 */}
      <Text style={styles.sectionTitle}>기획전</Text>
      {/* 기획전 카드들 */}
      <View style={[styles.cardsRow, { top: 948 }]}>
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
      </View>

      {/* 인기상품 타이틀 */}
      <Text style={[styles.sectionTitle, { top: 1729 }]}>인기상품</Text>
      {/* 인기상품 카드들 */}
      <View style={[styles.cardsRow, { top: 1780 }]}>
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
      </View>

      {/* 카테고리 스크롤 */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryScroll}
        contentContainerStyle={styles.categoryContent}
      >
        {categories.map((cat, idx) => (
          <View key={idx} style={styles.categoryItem}>
            <Text style={styles.categoryText}>{cat}</Text>
          </View>
        ))}
      </ScrollView>

      {/* 추천 섹션 헤더 */}
      <View style={styles.recommendHeader}>
        <Text style={styles.recommendTitle}>000을 위한 추천 아이템</Text>
        <Text style={styles.moreText}>더보기 &gt;</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },

  statusBar: {
    position: 'absolute',
    top: 3,
    width,
    height: 51,
    backgroundColor: '#FFFFFF',
  },

  header: {
    position: 'absolute',
    top: 79,
    left: 13,
    right: 13,
    height: 33,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoImage: { width: 139, height: 33 },
  headerIcons: {
    flexDirection: 'row',
    width: 100,
    justifyContent: 'space-between',
  },

  adContainer: {
    position: 'absolute',
    width: 367,
    height: 304,
    left: (width - 367) / 2,
    top: 130,
    backgroundColor: '#D9D9D9',
    borderRadius: 6,
    overflow: 'hidden',
    transform: [{ scaleX: -1 }],
  },
  adImage: { width: '100%', height: '100%' },

  sectionTitle: {
    position: 'absolute',
    left: 21,
    fontWeight: '600',
    fontSize: 17,
    lineHeight: 22,
    color: '#1E1E1E',
  },

  cardsRow: {
    position: 'absolute',
    left: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width - 32,
  },
  card: {
    width: 140,
    height: 171,
    backgroundColor: '#D9D9D9',
    borderRadius: 4,
  },

  categoryScroll: {
    position: 'absolute',
    top: 466,
    left: 16,
    right: 16,
    height: 40,
  },
  categoryContent: {
    alignItems: 'center',
    paddingHorizontal: 22,
  },
  categoryItem: {
    width: 40,
    height: 40,
    backgroundColor: '#F4F4F4',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 32,
  },
  categoryText: {
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 22,
    color: '#000000',
  },

  recommendHeader: {
    position: 'absolute',
    top: 596,
    left: 21,
    right: 21,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  recommendTitle: {
    fontWeight: '600',
    fontSize: 17,
    color: '#1E1E1E',
  },
  moreText: {
    fontWeight: '600',
    fontSize: 10,
    color: '#979797',
  },
});
