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
  ArrowTrendingUpIcon,
  ComputerDesktopIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  LightBulbIcon as LightBulbIconSolid
} from '@heroicons/react/24/outline'
import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

// Custom Mermaid chart component
function MermaidChart({ chart, className = '' }: { chart: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      // Generate a unique id for each chart
      const id = 'mermaid-' + Math.random().toString(36).substr(2, 9);
      ref.current.innerHTML = `<div class='mermaid' id='${id}'>${chart}</div>`;
      mermaid.init(undefined, `#${id}`);
    }
  }, [chart]);
  return <div ref={ref} className={className} />;
}

export default function Project3() {
  return (
    <MainLayout>
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
        {/* Hero Section */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Distributed Task Scheduler Practice
              </h1>
              <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
                A robust distributed task processing system built with Python, RabbitMQ, and Redis. 
                Features multiple workers with load balancing, real-time monitoring, fault tolerance, 
                and graceful shutdown capabilities for scalable task processing.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  Python
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  RabbitMQ
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                  Redis
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                  FastAPI
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                  Docker
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800">
                  Microservices
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* 1. Project Overview */}
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <div className="flex items-center mb-4">
                  <DocumentTextIcon className="h-6 w-6 text-blue-600 mr-2" />
                  <h2 className="text-2xl font-bold text-gray-900">Project Overview</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    This distributed task scheduler demonstrates advanced microservices architecture with modular 
                    components designed for scalability and maintainability. The system consists of API server 
                    for task submission, distributed workers for task processing, message queue for load balancing, 
                    and Redis for state management and monitoring.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Core Components</h4>
                      <ul className="text-sm space-y-1">
                        <li>• API Server (FastAPI)</li>
                        <li>• Task Workers (Python)</li>
                        <li>• Message Queue (RabbitMQ)</li>
                        <li>• State Storage (Redis)</li>
                        <li>• Client Utilities</li>
                        <li>• Monitoring System</li>
                      </ul>
                    </div>
                    
                  </div>
                </div>
              </div>

              {/* 2. System Architecture */}
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <div className="flex items-center mb-4">
                  <ServerIcon className="h-6 w-6 text-green-600 mr-2" />
                  <h2 className="text-2xl font-bold text-gray-900">System Architecture</h2>
                </div>
                {/* Task Processing Flow Chart (Mermaid) */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Task Processing Flow</h3>
                  <div className="bg-gray-50 rounded-lg p-6 overflow-x-auto">
                    <MermaidChart
                      chart={`graph LR
    A[Client] --> B[API Server]
    B --> C[RabbitMQ Queue]
    C --> D[Worker 1]
    C --> E[Worker 2]
    C --> F[Worker N]
    D --> G[Redis]
    E --> G
    F --> G
    B --> G
    style A fill:#e1f5fe,stroke:#333,color:#000
    style B fill:#f3e5f5,stroke:#333,color:#000
    style C fill:#fff3e0,stroke:#333,color:#000
    style G fill:#e8f5e8,stroke:#333,color:#000
    style D fill:#ede7f6,stroke:#333,color:#000
    style E fill:#ede7f6,stroke:#333,color:#000
    style F fill:#ede7f6,stroke:#333,color:#000
`}
                      className="w-full"
                    />
                    <div className="mt-4 text-center text-sm text-gray-600">
                      Distributed task processing with message-driven architecture
                    </div>
                  </div>
                </div>
                {/* Worker Lifecycle Flow Chart (Mermaid) */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Worker Lifecycle Flow</h3>
                  <div className="bg-gray-50 rounded-lg p-6 overflow-x-auto">
                    <MermaidChart
                      chart={`graph LR
    A[Worker Startup] --> B[Registration]
    B --> C[Heartbeat Loop]
    C --> D[Task Processing]
    D --> E[Health Check]
    E --> F{Healthy?}
    F -->|Yes| C
    F -->|No| G[Auto Recovery]
    G --> C
    H[Shutdown Signal] --> I[Graceful Shutdown]
    I --> J[Deregistration]
    
    style A fill:#e3f2fd,stroke:#333,color:#000
    style B fill:#e8f5e8,stroke:#333,color:#000
    style C fill:#fff8e1,stroke:#333,color:#000
    style D fill:#fce4ec,stroke:#333,color:#000
    style E fill:#f3e5f5,stroke:#333,color:#000
    style F fill:#ffebee,stroke:#333,color:#000
    style G fill:#fff3e0,stroke:#333,color:#000
    style H fill:#ffebee,stroke:#333,color:#000
    style I fill:#e8f5e8,stroke:#333,color:#000
    style J fill:#e0f2f1,stroke:#333,color:#000
`}
                      className="w-full"
                    />
                    <div className="mt-4 text-center text-sm text-gray-600">
                      Worker lifecycle with health monitoring, auto recovery, and graceful shutdown
                    </div>
                  </div>
                </div>
                {/* Data Flow Chart (Mermaid) */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Flow Architecture</h3>
                  <div className="bg-gray-50 rounded-lg p-6 overflow-x-auto">
                    <MermaidChart
                      chart={`graph TD
    %% Task Submission
    A1[Client]
    A2[API Server]
    A3[Task Validation]
    A4[Queue Assignment]
    %% Task Processing
    B1[RabbitMQ Queue]
    B2[Worker Pickup]
    B3[Task Execution]
    B4[Status Update]
    %% State Management
    C1[Redis Storage]
    C2[Task Status]
    C3[Worker Registry]
    C4[Heartbeat Data]

    %% Flows
    A1 --> A2
    A2 --> A3
    A3 --> A4
    A4 --> B1
    B1 --> B2
    B2 --> B3
    B3 --> B4
    B4 --> C1
    C1 --> C2
    C2 --> C3
    C3 --> C4
    C2 --> A2

    %% Styles
    style A1 fill:#e1f5fe,stroke:#333,color:#000
    style A2 fill:#f3e5f5,stroke:#333,color:#000
    style B1 fill:#fff3e0,stroke:#333,color:#000
    style B2 fill:#e8f5e8,stroke:#333,color:#000
    style C1 fill:#e0f2f1,stroke:#333,color:#000
  `}
                      className="w-full"
                    />
                    <div className="mt-4 text-center text-sm text-gray-600">
                      Three-phase data flow with clear separation of concerns
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. API Endpoints */}
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <div className="flex items-center mb-4">
                  <CodeBracketIcon className="h-6 w-6 text-purple-600 mr-2" />
                  <h2 className="text-2xl font-bold text-gray-900">API Endpoints</h2>
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
                        <td className="px-4 py-3"><span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800">POST</span></td>
                        <td className="px-4 py-3 font-mono text-sm">/tasks</td>
                        <td className="px-4 py-3">Submit new task for processing</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3"><span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800">GET</span></td>
                        <td className="px-4 py-3 font-mono text-sm">/tasks/{"{task_id}"}</td>
                        <td className="px-4 py-3">Get task status and results</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3"><span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800">GET</span></td>
                        <td className="px-4 py-3 font-mono text-sm">/tasks</td>
                        <td className="px-4 py-3">List all tasks</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3"><span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-red-100 text-red-800">DELETE</span></td>
                        <td className="px-4 py-3 font-mono text-sm">/tasks/{"{task_id}"}</td>
                        <td className="px-4 py-3">Delete task</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3"><span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800">GET</span></td>
                        <td className="px-4 py-3 font-mono text-sm">/workers</td>
                        <td className="px-4 py-3">List all workers</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3"><span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800">GET</span></td>
                        <td className="px-4 py-3 font-mono text-sm">/health</td>
                        <td className="px-4 py-3">API health check</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 4. Core Code Display */}
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <div className="flex items-center mb-4">
                  <CodeBracketIcon className="h-6 w-6 text-purple-600 mr-2" />
                  <h2 className="text-2xl font-bold text-gray-900">Core Code Display</h2>
                </div>
                <div className="space-y-6 text-gray-700">
                  
                  {/* Distributed Worker Implementation */}
                  <div>
                    <h4 className="font-semibold text-lg mb-2">1. Distributed Worker Core Implementation</h4>
                    <ul className="list-disc pl-6 mb-3">
                      <li>Async worker with RabbitMQ message consumption</li>
                      <li>Task execution with error handling</li>
                      <li>Redis-based state management</li>
                      <li>Factory pattern for worker creation</li>
                      <li>Dependency injection for services</li>
                    </ul>
                    <pre className="bg-gray-100 rounded p-3 text-xs overflow-x-auto max-h-40 overflow-y-auto">
{`class DistributedWorker:
    """Main coordinator for distributed worker operations"""
    
    def __init__(self, worker_id: Optional[str] = None, 
                 rabbitmq_url: str = None, redis_url: str = None):
        self.worker_id = worker_id or str(uuid.uuid4())
        self.rabbitmq_url = rabbitmq_url or "amqp://admin:admin123@localhost:5672/"
        self.redis_url = redis_url or "redis://localhost:6379/0"
        
        # Initialize components
        self.connection_manager = ConnectionManager(self.rabbitmq_url, self.redis_url)
        self.registry = None
        self.lifecycle_manager = None
    
    async def start(self):
        """Start the distributed worker"""
        try:
            logger.info(f"Starting distributed worker {self.worker_id}")
            
            # 1. Create connections
            connection, channel, redis_client = await self.connection_manager.create_connections()
            
            # 2. Create registry
            self.registry = WorkerRegistry(redis_client)
            
            # 3. Create worker using factory
            worker = await WorkerFactory.create_worker(connection, channel, redis_client, self.worker_id)
            
            # 4. Create lifecycle manager
            self.lifecycle_manager = WorkerLifecycleManager(worker, self.registry, self.worker_id)`}
                    </pre>
                  </div>

                  {/* Factory Pattern */}
                  <div>
                    <h4 className="font-semibold text-lg mb-2">2. Factory Pattern for Task Handlers</h4>
                    <ul className="list-disc pl-6 mb-3">
                      <li>Centralized task handler creation logic</li>
                      <li>Different handlers for different task types</li>
                      <li>Extensible task processing system</li>
                    </ul>
                    <pre className="bg-gray-100 rounded p-3 text-xs overflow-x-auto max-h-40 overflow-y-auto">
{`class TaskHandler:
    """
    Base class for all task handlers.
    """
    async def handle(self, parameters: Dict[str, Any]) -> Dict[str, Any]:
        raise NotImplementedError("Subclasses must implement handle method")

class WebScraperTaskHandler(TaskHandler):
    """
    Handler for web scraping tasks.
    """
    async def handle(self, parameters: Dict[str, Any]) -> Dict[str, Any]:
        try:
            url = parameters.get("url", "")
            result = f"Web scraper processed URL: {url}"
            return {
                "input_parameters": parameters,
                "result": result,
                "processed_at": datetime.utcnow().isoformat()
            }
        except Exception as e:
            logger.error(f"Web scraper failed: {parameters}, error: {str(e)}")
            raise

class CalculatorTaskHandler(TaskHandler):
    """
    Handler for calculator tasks.
    """
    async def handle(self, parameters: Dict[str, Any]) -> Dict[str, Any]:
        try:
            a = parameters.get("a", 0)
            b = parameters.get("b", 0)
            operation = parameters.get("operation", "add")
            result = f"Calculator processed: {a} {operation} {b}"
            return {
                "input_parameters": parameters,
                "result": result,
                "processed_at": datetime.utcnow().isoformat()
            }
        except Exception as e:
            logger.error(f"Calculator task failed: {parameters}, error: {str(e)}")
            raise

class TaskHandlerFactory:
    """
    Factory for creating task handlers.
    """
    _handlers = {
        "web_scraper": WebScraperTaskHandler,
        "calculator": CalculatorTaskHandler
    }

    @classmethod
    def get_handler(cls, task_type: str) -> TaskHandler:
        handler_class = cls._handlers.get(task_type)
        if not handler_class:
            raise ValueError(f"No handler found for task type: {task_type}")
        return handler_class()

    @classmethod
    def register_handler(cls, task_type: str, handler_class):
        """register new task handler"""
        cls._handlers[task_type] = handler_class
    
    @classmethod
    def get_supported_types(cls) -> list:
        """get supported task types"""
        return list(cls._handlers.keys())`}
                    </pre>
                  </div>

                  {/* Dependency Injection */}
                  <div>
                    <h4 className="font-semibold text-lg mb-2">3. Dependency Injection Implementation</h4>
                    <ul className="list-disc pl-6 mb-3">
                      <li>Service abstraction and injection</li>
                      <li>Testable and modular design</li>
                      <li>Configuration-driven dependencies</li>
                    </ul>
                    <pre className="bg-gray-100 rounded p-3 text-xs overflow-x-auto max-h-40 overflow-y-auto">
{`_task_service: TaskService = None

async def get_task_service() -> TaskService:
    """Get TaskService instance for dependency injection"""
    global _task_service
    if _task_service is None:
        _task_service = TaskService(
            RABBITMQ_URL,
            REDIS_URL
        )
        await _task_service.connect()
    return _task_service

async def close_task_service():
    """Close the TaskService instance"""
    global _task_service
    if _task_service:
        await _task_service.close()
        _task_service = None

TaskServiceDep = Depends(get_task_service)

# Usage in FastAPI endpoints
@app.post("/tasks", response_model=TaskResponse)
async def submit_task(task: TaskCreate, task_service: TaskService = TaskServiceDep):
    """Submit a new task for processing"""
    try:
        task_response = await task_service.create_task(task)
        return task_response
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))`}
                    </pre>
                  </div>
                </div>
              </div>

              {/* 5. Implementation Journey */}
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <div className="flex items-center mb-4">
                  <ClockIcon className="h-6 w-6 text-indigo-600 mr-2" />
                  <h2 className="text-2xl font-bold text-gray-900">Implementation Journey</h2>
                </div>
                
                <div className="space-y-6">
                  {/* Phase 1: System Design & Architecture */}
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center mb-3">
                      <LightBulbIconSolid className="h-5 w-5 text-blue-600 mr-2" />
                      <h4 className="font-semibold text-blue-900">Phase 1: System Design & Architecture</h4>
                    </div>
                    <div className="text-sm space-y-2 text-blue-800">
                      <p><strong>Commit:</strong> Designed the system with extensibility and modularity in mind</p>
                      <p><strong>Highlights:</strong></p>
                      <ul className="list-disc pl-6">
                        <li>Adopted the Factory Pattern from the beginning to support multiple task types and easy extension</li>
                        <li>Used Dependency Injection to decouple components and improve testability</li>
                        <li>Chose FastAPI, RabbitMQ, and Redis as core technologies</li>
                      </ul>
                    </div>
                  </div>
                  {/* Phase 2: Message Queue Integration */}
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="flex items-center mb-3">
                      <ExclamationTriangleIcon className="h-5 w-5 text-purple-600 mr-2" />
                      <h4 className="font-semibold text-purple-900">Phase 2: Message Queue Integration</h4>
                    </div>
                    <div className="text-sm space-y-2 text-purple-800">
                      <p><strong>Commit:</strong> Added RabbitMQ integration for task distribution</p>
                      <p><strong>Challenge:</strong> Connection management and message persistence</p>
                      <p><strong>Problem:</strong> Workers would lose tasks if RabbitMQ restarted</p>
                      <p><strong>Solution:</strong> Implemented durable queues and proper connection error handling</p>
                    </div>
                  </div>

                  {/* Phase 3: Worker Implementation */}
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="flex items-center mb-3">
                      <ServerIcon className="h-5 w-5 text-orange-600 mr-2" />
                      <h4 className="font-semibold text-orange-900">Phase 3: Worker Implementation</h4>
                    </div>
                    <div className="text-sm space-y-2 text-orange-800">
                      <p><strong>Commit:</strong> Created distributed worker system with Redis state management</p>
                      <p><strong>Challenge:</strong> Worker lifecycle management and graceful shutdown</p>
                      <p><strong>Problem:</strong> Workers would leave orphaned tasks when killed abruptly</p>
                      <p><strong>Solution:</strong> Implemented signal handlers and Redis-based task recovery</p>
                    </div>
                  </div>

                  {/* Phase 4: Monitoring & Fault Tolerance */}
                  <div className="bg-red-50 p-4 rounded-lg">
                    <div className="flex items-center mb-3">
                      <ChartBarIcon className="h-5 w-5 text-red-600 mr-2" />
                      <h4 className="font-semibold text-red-900">Phase 4: Monitoring & Fault Tolerance</h4>
                    </div>
                    <div className="text-sm space-y-2 text-red-800">
                      <p><strong>Commit:</strong> Added heartbeat monitoring and worker health checks</p>
                      <p><strong>Challenge:</strong> Detecting dead workers and redistributing tasks</p>
                      <p><strong>Problem:</strong> System would hang if a worker died mid-task</p>
                      <p><strong>Solution:</strong> Implemented TTL-based worker registry and automatic task reassignment</p>
                    </div>
                  </div>

                  {/* Key Learnings */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Learnings</h4>
                    <div className="text-sm space-y-2 text-gray-700">
                      <div className="flex items-start">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Async programming requires careful error handling and resource management</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Message queues need proper durability and connection resilience</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Factory pattern centralizes object creation and improves maintainability</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Dependency injection makes code more testable and modular</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Distributed systems require comprehensive monitoring and fault tolerance</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Graceful shutdown is crucial for maintaining system integrity</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Key Features */}
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <div className="flex items-center mb-4">
                  <LightBulbIcon className="h-6 w-6 text-yellow-600 mr-2" />
                  <h3 className="text-lg font-bold text-gray-900">Key Features</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Distributed task processing</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Real-time worker monitoring</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Load balancing & failover</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Priority-based task queuing</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">RESTful API endpoints</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Docker containerization</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Async/await concurrency</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Heartbeat monitoring</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Graceful shutdown</span>
                  </div>
                </div>
              </div>

              {/* Architecture Benefits */}
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <div className="flex items-center mb-4">
                  <RocketLaunchIcon className="h-6 w-6 text-indigo-600 mr-2" />
                  <h3 className="text-lg font-bold text-gray-900">Architecture Benefits</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-indigo-50 p-3 rounded-lg">
                    <h4 className="font-medium text-indigo-900 text-sm mb-1">Scalability</h4>
                    <p className="text-xs text-indigo-700">Easy horizontal scaling by adding more workers</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <h4 className="font-medium text-green-900 text-sm mb-1">Reliability</h4>
                    <p className="text-xs text-green-700">Fault tolerance with automatic failover</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <h4 className="font-medium text-purple-900 text-sm mb-1">Performance</h4>
                    <p className="text-xs text-purple-700">Async processing with message queuing</p>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <h4 className="font-medium text-yellow-900 text-sm mb-1">Monitoring</h4>
                    <p className="text-xs text-yellow-700">Real-time system health tracking</p>
                  </div>
                </div>
              </div>
              {/* Code Links */}
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Links</h3>
                <div className="space-y-3">
                  <a href="https://github.com/zlm23github/distributed-task-scheduler" target="_blank" rel="noopener noreferrer" className="block w-full bg-[#181e2a] text-white text-center py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm">
                    GitHub Source
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
} 