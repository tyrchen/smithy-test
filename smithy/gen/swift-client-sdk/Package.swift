// swift-tools-version:5.0

import PackageDescription
import class Foundation.ProcessInfo
import class Foundation.FileManager
let package = Package(
    name: "echo",
    platforms: [
        .macOS(.v10_15), .iOS(.v13)
    ],
    products: [
        .library(name: "echo", targets: ["echo"])
    ],
    targets: [
        .target(
            name: "echo",
            dependencies: [
                .product(
                    name: "ClientRuntime",
                    package: "smithy-swift"
                ),
            ],
            path: "./echo"
        ),
    ]
)
let isUsingSPMLocal: Bool = FileManager.default.fileExists(atPath: "/Package.swift")
if isUsingSPMLocal {
    package.dependencies += [
        .package(
            url: "https://github.com/smithy-lang/smithy-swift",
            .branch("main")
        ),
    ]
}
else {
    package.dependencies += [
        .package(
            url: "https://github.com/smithy-lang/smithy-swift",
            .branch("main")
        ),
    ]
}
