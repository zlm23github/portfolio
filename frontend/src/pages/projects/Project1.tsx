import MainLayout from '../../layout/MainLayout'
import { 
  CodeBracketIcon, 
  ChartBarIcon, 
  CogIcon, 
  DocumentTextIcon,
  ServerIcon,
  CircleStackIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  CheckCircleIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline'

export default function Project1() {
  return (
    <MainLayout>
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
        {/* Hero Section */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                MiniProductSearch
              </h1>
              <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
                A high-performance product search backend API built with Spring Boot, supporting multi-condition search, 
                large-scale data processing, and database optimization through indexing strategies. 
                This is a monolithic REST API service designed for simplicity and performance.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  Spring Boot
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  MySQL
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                  JPA
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                  JMeter
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                  Swagger UI
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-red-800">
                  Elasticsearch
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Project Overview */}
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <div className="flex items-center mb-4">
                  <DocumentTextIcon className="h-6 w-6 text-blue-600 mr-2" />
                  <h2 className="text-2xl font-bold text-gray-900">Project Overview</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    This is a lightweight product search backend API focused on high performance and large-scale data processing capabilities.
                    Built as a monolithic Spring Boot REST service, the project implements flexible search functionality, demonstrating comprehensive
                    technical capabilities from problem identification to solution implementation through systematic performance testing and optimization.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Core Features</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Multi-condition product search</li>
                        <li>• Category and price range filtering</li>
                        <li>• Full-text search support</li>
                        <li>• Pagination queries</li>
                        <li>• RESTful API endpoints</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">Technical Highlights</h4>
                      <ul className="text-sm space-y-1">
                        <li>• 200,000+ data records processing</li>
                        <li>• Database performance optimization</li>
                        <li>• Concurrent load testing</li>
                        <li>• Automated API documentation</li>
                        <li>• Monolithic backend architecture</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* System Architecture */}
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <div className="flex items-center mb-4">
                  <ServerIcon className="h-6 w-6 text-green-600 mr-2" />
                  <h2 className="text-2xl font-bold text-gray-900">System Architecture</h2>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="text-blue-600 font-semibold mb-2">Controller</div>
                      <div className="text-xs text-gray-600">REST API Layer</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="text-green-600 font-semibold mb-2">Service</div>
                      <div className="text-xs text-gray-600">Business Logic Layer</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="text-purple-600 font-semibold mb-2">Repository</div>
                      <div className="text-xs text-gray-600">Data Access Layer</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="text-orange-600 font-semibold mb-2">MySQL</div>
                      <div className="text-xs text-gray-600">Primary Database</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="text-red-600 font-semibold mb-2">ElasticSearch</div>
                      <div className="text-xs text-gray-600">Search Engine</div>
                    </div>
                  </div>
                  <div className="mt-4 text-center text-sm text-gray-600">
                    Hybrid architecture combining relational database with search engine for optimal performance
                  </div>
                </div>
              </div>

              {/* API Design */}
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <div className="flex items-center mb-4">
                  <CodeBracketIcon className="h-6 w-6 text-purple-600 mr-2" />
                  <h2 className="text-2xl font-bold text-gray-900">API Design</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-4 py-3 text-left font-medium text-gray-900">Method</th>
                        <th className="px-4 py-3 text-left font-medium text-gray-900">Path</th>
                        <th className="px-4 py-3 text-left font-medium text-gray-900">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3"><span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800">GET</span></td>
                        <td className="px-4 py-3 font-mono text-sm">/api/products/search</td>
                        <td className="px-4 py-3">Multi-condition product search</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3"><span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800">GET</span></td>
                        <td className="px-4 py-3 font-mono text-sm">/api/products/search-es</td>
                        <td className="px-4 py-3">Multi-condition product search with Elasticsearch</td>
                      </tr>
                      
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3"><span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-yellow-100 text-yellow-800">POST</span></td>
                        <td className="px-4 py-3 font-mono text-sm">/api/products/sync</td>
                        <td className="px-4 py-3">Sync products from MySQL to Elasticsearch</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Performance Testing & Optimization */}
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <div className="flex items-center mb-4">
                  <ChartBarIcon className="h-6 w-6 text-red-600 mr-2" />
                  <h2 className="text-2xl font-bold text-gray-900">Performance Testing & Optimization</h2>
                </div>
                
                {/* Before/After Comparison */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">MySQL Index Optimization Results</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                      <thead>
                        <tr className="bg-gray-50">
                        <th className="px-4 py-3 text-left font-medium text-gray-900">Data Size</th>
                          <th className="px-4 py-3 text-left font-medium text-gray-900">Concurrent Users</th>
                          <th className="px-4 py-3 text-left font-medium text-gray-900">Before TPS</th>
                          <th className="px-4 py-3 text-left font-medium text-gray-900">Before Response(ms)</th>
                          <th className="px-4 py-3 text-left font-medium text-gray-900">After TPS</th>
                          <th className="px-4 py-3 text-left font-medium text-gray-900">After Response(ms)</th>
                          <th className="px-4 py-3 text-left font-medium text-gray-900">Response Time Improvement</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50">
                          <td className="px-4 py-3 font-medium">200,000</td>
                          <td className="px-4 py-3 font-medium">50</td>
                          <td className="px-4 py-3 text-red-600">7.1/sec</td>
                          <td className="px-4 py-3 text-red-600">6,747ms</td>
                          <td className="px-4 py-3 text-green-600">179.1/sec</td>
                          <td className="px-4 py-3 text-green-600">271ms</td>
                          <td className="px-4 py-3"><span className="text-green-600 font-semibold">+95.9%</span></td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-4 py-3 font-medium">200,000</td>
                          <td className="px-4 py-3 font-medium">100</td>
                          <td className="px-4 py-3 text-red-600">8.0/sec</td>
                          <td className="px-4 py-3 text-red-600">11,735ms</td>
                          <td className="px-4 py-3 text-green-600">212.1/sec</td>
                          <td className="px-4 py-3 text-green-600">460ms</td>
                          <td className="px-4 py-3"><span className="text-green-600 font-semibold">+98.2%</span></td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-4 py-3 font-medium">200,000</td>
                          <td className="px-4 py-3 font-medium">150</td>
                          <td className="px-4 py-3 text-red-600">7.8/sec</td>
                          <td className="px-4 py-3 text-red-600">17,670ms</td>
                          <td className="px-4 py-3 text-green-600">236.0/sec</td>
                          <td className="px-4 py-3 text-green-600">619ms</td>
                          <td className="px-4 py-3"><span className="text-green-600 font-semibold">+96.5%</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Optimization Steps */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Optimization Measures</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                        <CircleStackIcon className="h-5 w-5 mr-2" />
                        Database Optimization
                      </h4>
                      <ul className="text-sm space-y-1 text-blue-800">
                        <li>• Created B-Tree indexes (category, price)</li>
                        <li>• Added FULLTEXT indexes (title, description)</li>
                        <li>• Optimized SQL query statements</li>
                        <li>• Used MATCH AGAINST for full-text search</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2 flex items-center">
                        <CogIcon className="h-5 w-5 mr-2" />
                        Application Layer Optimization
                      </h4>
                      <ul className="text-sm space-y-1 text-green-800">
                        <li>• Implemented pagination queries</li>
                        <li>• Added query caching</li>
                        <li>• Optimized Repository methods</li>
                        <li>• Used native SQL queries</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Futher Optimization with Integration of Elasticsearch */}
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <div className="flex items-center mb-4">
                  <ChartBarIcon className="h-6 w-6 text-green-600 mr-2" />
                  <h2 className="text-2xl font-bold text-gray-900">Further Optimization</h2>
                </div>
                
                {/* Before/After Comparison */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Integration of Elasticsearch Results</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="px-4 py-3 text-left font-medium text-gray-900">Data Size</th>
                          <th className="px-4 py-3 text-left font-medium text-gray-900">Concurrent Users</th>
                          <th className="px-4 py-3 text-left font-medium text-gray-900">Before TPS</th>
                          <th className="px-4 py-3 text-left font-medium text-gray-900">Before Response(ms)</th>
                          <th className="px-4 py-3 text-left font-medium text-gray-900">After TPS</th>
                          <th className="px-4 py-3 text-left font-medium text-gray-900">After Response(ms)</th>
                          <th className="px-4 py-3 text-left font-medium text-gray-900">Response Time Improvement</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50">
                          <td className="px-4 py-3 font-medium">200,000</td>
                          <td className="px-4 py-3 font-medium">50</td>
                          <td className="px-4 py-3 text-red-600">179.1/sec</td>
                          <td className="px-4 py-3 text-red-600">271ms</td>
                          <td className="px-4 py-3 text-green-600">485.4/sec</td>
                          <td className="px-4 py-3 text-green-600">97ms</td>
                          <td className="px-4 py-3"><span className="text-green-600 font-semibold">+64.2%</span></td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-4 py-3 font-medium">200,000</td>
                          <td className="px-4 py-3 font-medium">100</td>
                          <td className="px-4 py-3 text-red-600">212.1/sec</td>
                          <td className="px-4 py-3 text-red-600">460ms</td>
                          <td className="px-4 py-3 text-green-600">286.0/sec</td>
                          <td className="px-4 py-3 text-green-600">149ms</td>
                          <td className="px-4 py-3"><span className="text-green-600 font-semibold">+67.6%</span></td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-4 py-3 font-medium">200,000</td>
                          <td className="px-4 py-3 font-medium">150</td>
                          <td className="px-4 py-3 text-red-600">236.0/sec</td>
                          <td className="px-4 py-3 text-red-600">619ms</td>
                          <td className="px-4 py-3 text-green-600">335.8/sec</td>
                          <td className="px-4 py-3 text-green-600">155ms</td>
                          <td className="px-4 py-3"><span className="text-green-600 font-semibold">+74.9%</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Optimization Steps */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Optimization Measures</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2 flex items-center">
                        <CogIcon className="h-5 w-5 mr-2" />
                        Elasticsearch Integration
                      </h4>
                      <ul className="text-sm space-y-1 text-orange-800">
                        <li>• Synchronized product data from MySQL to Elasticsearch</li>
                        <li>• Implemented multi-condition and full-text search using Elasticsearch</li>
                        <li>• Leveraged ES for high-concurrency, low-latency search</li>
                        <li>• Designed RESTful endpoints for ES-based queries</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Implementation */}
              <div className="bg-white rounded-xl shadow-sm border p-6 mt-8">
                <div className="flex items-center mb-4">
                  <CodeBracketIcon className="h-6 w-6 text-purple-600 mr-2" />
                  <h2 className="text-2xl font-bold text-gray-900">Key Implementation</h2>
                </div>
                <p className="text-gray-700 mb-4 text-sm">
                  Below are core code snippets for integrating Elasticsearch, including data synchronization and multi-condition search implementation.
                </p>
                <div className="bg-gray-100 rounded-lg p-4 overflow-x-auto overflow-y-auto max-h-96 text-sm">
                  <pre className="whitespace-pre-wrap text-xs text-gray-800">
{`// Sync products from MySQL to Elasticsearch
@Service
@Slf4j
public class DataSyncService {
    private final ProductRepository productRepository;
    private final ProductESRepository productESRepository;

    DataSyncService(ProductRepository productRepository, ProductESRepository productESRepository) {
        this.productRepository = productRepository;
        this.productESRepository = productESRepository;
    }

    /**
     * Fetch data from mysql and save to ES
     */
    public void syncAllProducts() {
        try {
            log.info("Starting full data synchronization from MySQL to Elasticsearch...");
            List<Product> allProducts = productRepository.findAll();

            if(allProducts.isEmpty()) {
                log.warn("No products found in the database. Sync finished.");
                return;
            }

            //convert product to productDocument
            List<ProductDocument> productDocuments = new ArrayList<>();
            for (Product product : allProducts) {
                ProductDocument document = convertToDocument(product);
                productDocuments.add(document);
            }
            log.info("Converted {} products to Elasticsearch documents.", productDocuments.size());

            //Batch saving to Elasticsearch
            int batchSize = 1000;
            for (int i = 0; i < productDocuments.size(); i += batchSize) {
                List<ProductDocument> batch = productDocuments.subList(i, Math.min(i + batchSize, productDocuments.size()));
                productESRepository.saveAll(batch);
                log.info("Synced batch {} - {}", i, Math.min(i + batchSize, productDocuments.size()));
            }
            log.info("Successfully saved {} documents to Elasticsearch.", productDocuments.size());

        } catch (Exception e) {
            log.error("Data sync failed!", e);
            throw new RuntimeException("Data sync failed: " + e.getMessage(), e);
        }

    }

    /**
     * method convert Product to ES's ProductDocument
     * @param product
     * @return ProductDocument
     */
    private ProductDocument convertToDocument(Product product) {
        ProductDocument doc = new ProductDocument();
        doc.setId(product.getId());
        doc.setTitle(product.getTitle());
        doc.setDescription(product.getDescription());
        doc.setCategory(product.getCategory());
        doc.setPrice(product.getPrice());
        return doc;
    }

}`} 
{`



// Multi-condition search implementation
@Service
@Slf4j
@RequiredArgsConstructor
public class ProductESService {

    private final ElasticsearchOperations elasticsearchOperations;

    public Page<ProductDocument> searchProducts(String keyword, String category, Double minPrice, Double maxPrice, Pageable pageable) {
        try{
            //create BoolQuery builder
            BoolQuery.Builder boolQueryBuilder = new BoolQuery.Builder();

            if (StringUtils.hasText(keyword)) {
                MultiMatchQuery multiMatchQuery = new MultiMatchQuery.Builder()
                        .query(keyword)
                        .fields("title", "description")
                        .build();
                boolQueryBuilder.must(multiMatchQuery._toQuery());
            }

            if (StringUtils.hasText(category)) {
                TermQuery termQuery = new TermQuery.Builder()
                        .field("category.keyword")
                        .value(category)
                        .build();
                boolQueryBuilder.filter(termQuery._toQuery());
            }

            if (minPrice != null || maxPrice != null) {
                RangeQuery.Builder rangeQueryBuilder = new RangeQuery.Builder().field("price");
                if (minPrice != null) {
                    rangeQueryBuilder.gte(JsonData.of(minPrice));
                }
                if (maxPrice != null) {
                    rangeQueryBuilder.lte(JsonData.of(maxPrice));
                }
                boolQueryBuilder.filter(rangeQueryBuilder.build()._toQuery());
            }

            //create final BoolQuery object
            BoolQuery finalBoolQuery = boolQueryBuilder.build();

            Query finalQuery;
            if (!finalBoolQuery.hasClauses()) {
                finalQuery = new MatchAllQuery.Builder().build()._toQuery();
            } else {
                finalQuery = finalBoolQuery._toQuery();
            }

            //Build a local query and include pagination details
            NativeQuery nativeQuery = NativeQuery.builder()
                    .withQuery(finalQuery)
                    .withPageable(pageable)
                    .build();

            SearchHits<ProductDocument> searchHits = elasticsearchOperations.search(nativeQuery, ProductDocument.class);

            List<ProductDocument> productList = new ArrayList<>();
            for (SearchHit<ProductDocument> hit : searchHits) {
                productList.add(hit.getContent());
            }

            return new PageImpl<>(productList, pageable, searchHits.getTotalHits());

        }catch (Exception e) {
            log.error("Elasticsearch search failed!", e);
            throw new RuntimeException("Elasticsearch search failed", e);
        }

    }
}

`}
                  </pre>
                </div>
              </div>

              {/* Technical Challenges */}
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <div className="flex items-center mb-4">
                  <LightBulbIcon className="h-6 w-6 text-yellow-600 mr-2" />
                  <h2 className="text-2xl font-bold text-gray-900">Technical Challenges & Learnings</h2>
                </div>
                <div className="space-y-4">
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-900 mb-2">Performance Bottleneck Identification</h4>
                    <p className="text-sm text-yellow-800">
                      Used MySQL EXPLAIN to identify full table scan issues caused by LIKE '%keyword%' which invalidated indexes.
                      Solution: Implemented FULLTEXT indexes and MATCH AGAINST syntax for efficient full-text search in MySQL. For further improvement, integrated Elasticsearch to provide high-performance, scalable full-text and multi-condition search.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Large-Scale Data Processing</h4>
                    <p className="text-sm text-blue-800">
                      When processing 200,000+ records, reduced response time from 17 seconds to 1.3 seconds through proper indexing strategies and query optimization in MySQL. After integrating Elasticsearch, achieved sub-second response times and much higher throughput under high concurrency.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">System Design Experience</h4>
                    <p className="text-sm text-green-800">
                      Mastered the complete backend development process from requirements analysis to performance optimization in a monolithic architecture, including the integration of Elasticsearch for advanced search capabilities. Learned to use JMeter for load testing, and how to validate optimization results through data-driven approaches.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Stats */}
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Metrics</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Data Volume</span>
                    <span className="font-semibold text-gray-900">200,000+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Concurrent Users</span>
                    <span className="font-semibold text-gray-900">150</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Avg. Response Time</span>
                    <span className="font-semibold text-green-600">155ms</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Error Rate</span>
                    <span className="font-semibold text-green-600">0.00%</span>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-gray-700">Multi-condition search</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-gray-700">Full-text search</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-gray-700">Pagination queries</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-gray-700">Performance optimization</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-gray-700">Load testing</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-gray-700">API documentation</span>
                  </div>
                </div>
              </div>

              {/* Code Links */}
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Code Links</h3>
                <div className="space-y-3">
                  <a href="https://github.com/zlm23github/ProductSearch" className="block w-full bg-[#181e2a] text-white text-center py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm">
                    GitHub Source
                  </a>
                </div>
              </div>

              {/* Next Steps */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border p-6">
                <div className="flex items-center mb-3">
                  <RocketLaunchIcon className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">Future Plans</h3>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-center">
                    <ArrowTrendingUpIcon className="h-4 w-4 text-green-500 mr-2" />
                    <span>Add Redis caching</span>
                  </div>
                  <div className="flex items-center">
                    <ArrowTrendingUpIcon className="h-4 w-4 text-green-500 mr-2" />
                    <span>Develop frontend UI</span>
                  </div>
                  <div className="flex items-center">
                    <ArrowTrendingUpIcon className="h-4 w-4 text-green-500 mr-2" />
                    <span>Microservices architecture</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
