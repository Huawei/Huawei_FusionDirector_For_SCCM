var messageZhCN = {
    "Id": "Base.1.0.",
    "Language": "zh",
    "Messages": [{
        "type": 'Base.1.0.GeneralError',
        "Message": "发生了内部错误",
        "NumberOfArgs": 0,
        "Resolution": "请联系华为工程师定位"
    },
    {
        "type": 'FusionDirector.1.0.DeviceCategoryDifferent',
        "Message": "选择的设备类型与上次导入失败的设备类型不一致",
        "NumberOfArgs": 0,
        "Resolution": "请先删除上次导入失败的设备，然后选择正确的设备类型后再重新提交请求。"
    },
    {
        "type": 'FusionDirector.1.0.DevMgmtDeviceMissingUUID',
        "Message": "BMC的版本太低或者服务器manager资源下缺少UUID，不支持纳管。",
        "NumberOfArgs": 0,
        "Resolution": "请确保BMC版本在2.57之上，并且manager资源下存在UUID，重新提交请求。"
    },
    {
        "type": 'FusionDirector.1.0.DevMgmtSubscriptionFailed',
        "Message": "bmc订阅失败，可能由于bmc订阅已满。",
        "NumberOfArgs": 0,
        "Resolution": "请检查bmc订阅是否已满，删除bmc的无效订阅后重试纳管。"
    },
    {
        "type": 'RestartOperationID',
        "Message": "系统发生了重启",
        "NumberOfArgs": 0,
        "Resolution": "检查是否发生了重启系统的操作"
    },
    {
        "type": 'Backup.1.0.UploadBackupArchiveFailed',
        "Message": "上传备份包到远程主机失败",
        "NumberOfArgs": 0,
        "Resolution": "核对远程备份主机的配置是否发生改变"
    },

    /************************************old********************************/

    {
        "type": 'Base.1.0.Success',
        "Message": "成功完成请求",
        "NumberOfArgs": 0,
        "Resolution": "无"

    },
    {
        "type": "Base.1.0.Created",
        "Message": "已成功创建资源",
        "NumberOfArgs": 0,
        "Resolution": "无"
    },
    {
        "type": 'Base.1.0.PropertyDuplicate',
        "Message": "发生了内部错误请参见请求中的属性{1}已被复制",
        "NumberOfArgs": 1,
        "Resolution": "从请求正文中删除重复属性, 并在操作失败时重新提交请求."
    },
    {
        "type": "Base.1.0.PropertyUnknown",
        "Message": "属性{1}不在资源的有效属性列表中",
        "NumberOfArgs": 1,
        "Resolution": "从请求正文中删除未知属性, 并在操作失败时重新提交请求"
    },
    {
        "type": "Base.1.0.PropertyValueTypeError",
        "Message": "属性{2}的值{1}与属性可以接受的类型不同",
        "NumberOfArgs": 2,
        "Resolution": "更正请求正文中的属性值, 并在操作失败时重新提交请求"
    },
    {
        "type": "Base.1.0.PropertyValueFormatError",
        "Message": "属性{2}的值{1} 的格式与属性所能接受的不同",
        "NumberOfArgs": 2,
        "Resolution": "更正请求正文中的属性值, 并在操作失败时重新提交请求"
    },
    {
        "type": "Base.1.0.PropertyValueNotInList",
        "Message": "属性{2}的值{1}不在可接受值的列表中",
        "NumberOfArgs": 2,
        "Resolution": "从枚举列表中选择一个值, 如果操作失败, 实现可以支持并重新提交请求"
    },
    {
        "type": "Base.1.0.PropertyNotWritable",
        "Message": "属性{1}是只读属性, 无法为其赋值",
        "NumberOfArgs": 1,
        "Resolution": "从请求正文中移除该属性, 并在操作失败时重新提交请求"
    },


    {
        "type": "Base.1.0.PropertyMissing",
        "Message": "属性{1}是只读属性, 无法为其赋值",
        "NumberOfArgs": 1,
        "Resolution": "确保该属性在请求正文中并具有有效值并在操作失败时重新提交请求"
    }
    ,
    {
        "type": "Base.1.0.MalformedJSON",
        "Message": "提交的请求正文是格式错误的 JSON, 无法由接收服务分析",
        "NumberOfArgs": 0,
        "Resolution": "请确保请求正文是有效的 JSON 并重新提交请求"
    }
    ,
    {
        "type": "Base.1.0.ActionNotSupported",
        "Message": "该资源不支持操作{1}",
        "NumberOfArgs": 1,
        "Resolution": "无法将提供的操作重新提交到实现 。也许行动是无效的, 错误的资源是目标或实施文件可能是协助"
    }
    ,
    {
        "type": "Base.1.0.ActionParameterMissing",
        "Message": "操作{1}要求参数{2} 出现在请求正文中",
        "NumberOfArgs": 2,
        "Resolution": "当请求重新提交时, 在请求正文中提供所需参数的操作"
    }
    ,
    {
        "type": "Base.1.0.ActionParameterDuplicate",
        "Message": "为参数{2}提交的操作{1} 的值不止一个",
        "NumberOfArgs": 2,
        "Resolution": "如果操作失败, 则在请求正文中仅使用参数的一个实例重新提交操作"
    },
    {
        "type": "Base.1.0.ActionParameterUnknown",
        "Message": "与无效的参数{2} 一起提交了操作{1}",
        "NumberOfArgs": 2,
        "Resolution": "更正无效参数, 并在操作失败时重新提交请求"
    },
    {
        "type": "Base.1.0.ActionParameterValueTypeError",
        "Message": "操作{3}中参数{2}的值{1}的类型与参数可以接受的不同",
        "NumberOfArgs": 3,
        "Resolution": "在请求正文中更正参数的值, 并在操作失败时重新提交请求"
    },
    {
        "type": "Base.1.0.ActionParameterValueFormatError",
        "Message": "操作{3}中参数{2}的值{1}的格式与参数所能接受的不同",
        "NumberOfArgs": 3,
        "Resolution": "在请求正文中更正参数的值, 并在操作失败时重新提交请求"
    },
    {
        "type": "Base.1.0.ActionParameterNotSupported",
        "Message": "目标资源不支持操作{2}的参数{1}",
        "NumberOfArgs": 2,
        "Resolution": "删除所提供的参数, 并在操作失败时重新提交请求"
    },
    {
        "type": "Base.1.0.QueryParameterValueTypeError",
        "Message": "查询参数{2}的值{1}与参数可以接受的类型不同",
        "NumberOfArgs": 2,
        "Resolution": "在请求中更正查询参数的值, 并在操作失败时重新提交请求"
    },
    {
        "type": "Base.1.0.QueryParameterValueFormatError",
        "Message": "参数{2}的值{1}的格式与参数所能接受的不同",
        "NumberOfArgs": 2,
        "Resolution": "在请求中更正查询参数的值, 并在操作失败时重新提交请求"
    },
    {
        "type": "Base.1.0.QueryParameterOutOfRange",
        "Message": "查询参数{2}的值{1}超过范围{3}",
        "NumberOfArgs": 3,
        "Resolution": "将查询参数的值减少到范围内的值, 例如, 在集合中的资源数的边界内或在有效页范围内的页中的起始值或 count 数值"
    },
    {
        "type": "Base.1.0.QueryNotSupportedOnResource",
        "Message": "请求的资源不支持查询",
        "NumberOfArgs": 0,
        "Resolution": "删除查询参数, 并在操作失败时重新提交请求"
    },
    {
        "type": "Base.1.0.QueryNotSupported",
        "Message": "实现不支持查询",
        "NumberOfArgs": 0,
        "Resolution": "删除查询参数, 并在操作失败时重新提交请求"
    },
    {
        "type": "Base.1.0.SessionLimitExceeded",
        "Message": "会话设置失败, 因为同时会话的数量超过了实现的限制",
        "NumberOfArgs": 0,
        "Resolution": "在尝试建立会话之前减少其他会话的数量, 或增加同时会话的限制 (如果支持)"
    },
    {
        "type": "Base.1.0.EventSubscriptionLimitExceeded",
        "Message": "由于同时订阅的数量超过了实现的限制, 事件订阅失败",
        "NumberOfArgs": 0,
        "Resolution": "在尝试建立事件订阅或增加同时订阅的限制 (如果支持) 之前, 请减少其他订阅的数量"
    },
    {
        "type": "Base.1.0.ResourceCannotBeDeleted",
        "Message": "删除请求失败, 因为无法删除所请求的资源",
        "NumberOfArgs": 0,
        "Resolution": "不要尝试删除 non-deletable 资源"
    },
    {
        "type": "Base.1.0.ResourceInUse",
        "Message": "由于资源正在使用或处于转换中, 对请求的资源所做的更改失败",
        "NumberOfArgs": 0,
        "Resolution": "删除该条件并在操作失败时重新提交请求"
    },
    {
        "type": "Base.1.0.ResourceAlreadyExists",
        "Message": "请求的资源已存在",
        "NumberOfArgs": 0,
        "Resolution": "当资源已经创建时, 不要重复创建操作"
    },
    {
        "type": "Base.1.0.CreateFailedMissingReqProperties",
        "Message": "创建操作失败, 因为请求中缺少所需的属性{1}",
        "NumberOfArgs": 1,
        "Resolution": "更正正文以包含具有有效值的必需属性, 并在操作失败时重新提交请求"
    },
    {
        "type": "Base.1.0.CreateLimitReachedForResource",
        "Message": "创建操作失败, 因为资源已达到可能的资源限制",
        "NumberOfArgs": 0,
        "Resolution": "如果操作失败或未重新提交请求, 则删除资源并重新提交请求"
    },
    {
        "type": "Base.1.0.ServiceShuttingDown",
        "Message": "操作失败, 因为服务正在关闭, 无法再接收传入的请求",
        "NumberOfArgs": 0,
        "Resolution": "当服务变为可用时, 如果操作失败, 则重新提交请求"
    },
    {
        "type": "Base.1.0.ServiceInUnknownState",
        "Message": "操作失败, 因为该服务处于未知状态, 无法再接收传入请求",
        "NumberOfArgs": 0,
        "Resolution": "重新启动服务, 并在操作失败时再次提交请求"
    },
    {
        "type": "Base.1.0.NoValidSession",
        "Message": "在实现中没有建立有效的会话",
        "NumberOfArgs": 0,
        "Resolution": "在尝试任何操作之前, 将其设置为会话"
    },
    {
        "type": "Base.1.0.InsufficientPrivilege",
        "Message": "与当前会话关联的帐户或凭据的权限不足, 无法执行请求的操作",
        "NumberOfArgs": 0,
        "Resolution": "要么放弃操作, 要么更改关联的访问权限, 并在操作失败时重新提交请求"
    },
    {
        "type": "Base.1.0.AccountModified",
        "Message": "该帐户已成功修改",
        "NumberOfArgs": 0,
        "Resolution": "无"
    },
    {
        "type": "Base.1.0.AccountNotModified",
        "Message": "帐户修改请求失败",
        "NumberOfArgs": 0,
        "Resolution": "由于权限问题或请求正文的问题, 修改可能失败"
    },
    {
        "type": "Base.1.0.AccountRemoved",
        "Message": "已成功删除该帐户",
        "NumberOfArgs": 0,
        "Resolution": "无"
    },
    {
        "type": "Base.1.0.AccountForSessionNoLongerExists",
        "Message": "当前会话的帐户已被删除, 因此当前会话也已被删除",
        "NumberOfArgs": 0,
        "Resolution": "尝试使用有效帐户进行连接"
    },
    {
        "type": "Base.1.0.InvalidObject",
        "Message": "{1}上的对象无效",
        "NumberOfArgs": 1,
        "Resolution": "对象格式不正确, 或者 URI 错误 更正条件并在失败时重新提交请求"
    },
    {
        "type": "Base.1.0.InternalError",
        "Message": "内部错误",
        "NumberOfArgs": 0,
        "Resolution": "发生内部错误，请联系华为工程师"
    },
    {
        "type": "Base.1.0.UnrecognizedRequestBody",
        "Message": "该服务检测到它无法解释的格式错误的请求正文",
        "NumberOfArgs": 0,
        "Resolution": "更正请求正文并在失败时重新提交请求"
    },
    {
        "type": "Base.1.0.ResourceMissingAtURI",
        "Message": "找不到 URI{1}的资源",
        "NumberOfArgs": 1,
        "Resolution": "在 URI 中放置有效资源或更正 URI 并重新提交请求"
    },
    {
        "type": "Base.1.0.ResourceAtUriInUnknownFormat",
        "Message": "{1}中的资源处于服务无法识别的格式",
        "NumberOfArgs": 1,
        "Resolution": "将服务所识别的图像或资源或文件放在 URI 中"
    },
    {
        "type": "Base.1.0.ResourceAtUriUnauthorized",
        "Message": "访问{1}上的资源时, 服务收到了一个授权错误{2}",
        "NumberOfArgs": 2,
        "Resolution": "确保为服务提供了适当的访问权限, 以便它能够访问 URI"
    },
    {
        "type": "Base.1.0.CouldNotEstablishConnection",
        "Message": "服务未能建立与 URI{1}的连接",
        "NumberOfArgs": 1,
        "Resolution": "确保 URI 包含有效且可访问的节点名称、协议信息和其他 URI 组件"
    },
    {
        "type": "Base.1.0.SourceDoesNotSupportProtocol",
        "Message": "{1}上的连接的另一端不支持指定的协议{2}",
        "NumberOfArgs": 2,
        "Resolution": "更改协议或 URI"
    },
    {
        "type": "Base.1.0.AccessDenied",
        "Message": "在尝试建立到{1}的连接时, 该服务被拒绝访问",
        "NumberOfArgs": 1,
        "Resolution": "尝试确保 URI 是正确的, 并且该服务具有适当的凭据"
    },
    {
        "type": "Base.1.0.ServiceTemporarilyUnavailable",
        "Message": "服务暂时不可用 在{1}秒内重试",
        "NumberOfArgs": 1,
        "Resolution": "等待指定的重试持续时间, 然后重试操作"
    },
    {
        "type": "Base.1.0.InvalidIndex",
        "Message": "索引{1}不是数组中的有效偏移量",
        "NumberOfArgs": 1,
        "Resolution": "验证所提供的索引值是否在数组的边界内"
    },
    {
        "type": "Base.1.0.PropertyValueModified",
        "Message": "由于服务的修改, 属性{1}被分配了值{2}",
        "NumberOfArgs": 2,
        "Resolution": "无"
    },
    //profile
    {
        "type": "Base.1.0.OperationTimeOut",
        "Message": "{1} 的操作已超时",
        "NumberOfArgs": 1,
        "Resolution": "如果操作失败, 则重新提交请求"
    },
    {
        "type": "Base.1.0.OperationFailed",
        "Message": "{1} 上的操作由于 {2} 而失败",
        "NumberOfArgs": 2,
        "Resolution": "如果操作失败, 则重新提交请求"
    },
    //os
    {
        "type": "Base.1.0.CheckResourceFail",
        "Message": "校验资源文件失败",
        "NumberOfArgs": 0,
        "Resolution": "请检查文件是否已被损坏，或者输入的校验码是否正确"
    },
    //baseline
    {
        "type": "Base.1.0.BaselineConflict",
        "Message": "基线冲突创建或修改自动更新策略时, 操作失败",
        "NumberOfArgs": 0,
        "Resolution": "检查基线文件并确保它们不冲突"
    },
    //baselineCreate
    {
        "type": "Base.1.0.ModuleConflict",
        "Message": "模块{1}冲突, 操作失败",
        "NumberOfArgs": 1,
        "Resolution": "检查基线文件并确保相同设备下模块不冲突"
    },
    //baselineCreate
    {
        "type": "Base.1.0.iBMC.1.0.PasswordNotSatisfyComplexity",
        "Message": "密码不符合复杂度要求",
        "NumberOfArgs": 1,
        "Resolution": "长度为8-20个字符，至少包含大小写字母，数字中的两种字符，至少包含一个空格或以下特殊字符：`~!@#$%^&*()-_=+\\|[{}];:'\",<.>/?，不能和用户名或者用户名的倒写一样"
    },
    //baselineCreate
    {
        "type": "Base.1.0.1.0.PasswordNotSatisfyComplexity",
        "Message": "密码不符合复杂度要求",
        "NumberOfArgs": 1,
        "Resolution": "长度为8-20个字符，至少包含大小写字母，数字中的两种字符，至少包含一个空格或以下特殊字符：`~!@#$%^&*()-_=+\\|[{}];:'\",<.>/?，不能和用户名或者用户名的倒写一样，新旧口令至少在两个字符位上不同"
    },
    //    升级页面最新适配
    {
        "type": "Base.1.0.UnknownError",
        "Message": "设备底层发生未知错误",
        "NumberOfArgs": 0,
        "Resolution": "可进行二次尝试，若仍发生错误请联系华为工程师定位"
    },
    {
        "type": "Base.1.0.FilenameError",
        "Message": "升级包名长度超出限制",
        "NumberOfArgs": 0,
        "Resolution": "请检查升级包名的长度是否符合规范，若仍发生错误请联系华为工程师定位"
    },
    {
        "type": "Base.1.0.FileLengthError",
        "Message": "无法获取升级包大小，或者升级包大小超出限制或内存不足",
        "NumberOfArgs": 0,
        "Resolution": "请检查升级包大小，若仍发生错误请联系华为工程师定位"
    },
    {
        "type": "Base.1.0.FileError",
        "Message": "升级包中文件转换失败，不能完成转换",
        "NumberOfArgs": 0,
        "Resolution": "请检查升级包文件是否正确，若仍发生错误请联系华为工程师定位"
    },
    {
        "type": "Base.1.0.ProtocolError",
        "Message": "升级包文件转换时，转换协议不允许在当前环境使用",
        "NumberOfArgs": 0,
        "Resolution": "请检查升级包文件是否正确，若仍发生错误请联系华为工程师定位"
    },
    {
        "type": "Base.1.0.FilePathError",
        "Message": "升级包路径不正确",
        "NumberOfArgs": 0,
        "Resolution": "请确认升级包的路径是否正确，若仍发生错误请联系华为工程师定位"
    },
    {
        "type": "Base.1.0.UpgradeFileError",
        "Message": "升级包不存在",
        "NumberOfArgs": 0,
        "Resolution": "请确认升级包是否存在，若仍发生错误请联系华为工程师定位"
    },
    {
        "type": "Base.1.0.InvalidFileError",
        "Message": "无效的升级包",
        "NumberOfArgs": 0,
        "Resolution": "请确认升级包是否有效，若仍发生错误请联系华为工程师定位"
    },
    {
        "type": "Base.1.0.MemoryError",
        "Message": "升级的内存容量不足",
        "NumberOfArgs": 0,
        "Resolution": "可进行二次尝试，若仍发生错误请联系华为工程师定位"
    },
    {
        "type": "Base.1.0.OSError",
        "Message": "关闭操作系统之后，开始BIOS升级时发生错误",
        "NumberOfArgs": 0,
        "Resolution": "可进行二次尝试，若仍发生错误请联系华为工程师定位"
    },
    {
        "type": "Base.1.0.VersionError",
        "Message": "固件版本不匹配",
        "NumberOfArgs": 0,
        "Resolution": "请确认固件的版本是否正确，若仍发生错误请联系华为工程师定位"
    },
    {
        "type": "Base.1.0.MatchError",
        "Message": "升级包和将要升级的设备不匹配",
        "NumberOfArgs": 0,
        "Resolution": "请确认升级包与升级设备是否匹配，若仍发生错误请联系华为工程师定位"
    },
    {
        "type": "Base.1.0.BIOSError",
        "Message": "ME状态不正确导致BIOS失败",
        "NumberOfArgs": 0,
        "Resolution": "可进行二次尝试，若仍发生错误请联系华为工程师定位"
    },
    {
        "type": "Base.1.0.UpgradeProgressError",
        "Message": "升级过程中发生错误",
        "NumberOfArgs": 0,
        "Resolution": "可进行二次尝试，若仍发生错误请联系华为工程师定位"
    },
    {
        "type": "Base.1.0.UpgradeError",
        "Message": "升级失败",
        "NumberOfArgs": 0,
        "Resolution": "可进行二次尝试，若仍发生错误请联系华为工程师定位"
    },
    //    chh
    {
        "type": 'Examine.1.0.GetServerInfoFailed',
        "Message": "获取服务器信息失败，设备为{1}",
        "NumberOfArgs": 1,
        "Resolution": "请确保服务器被正常纳管，重新提交请求"

    },
    {
        "type": 'Examine.1.0.SaveExamineResultsFailed',
        "Message": "存储核查结果失败，设备为{1}",
        "NumberOfArgs": 1,
        "Resolution": "请确保服务器被正常纳管，重新提交请求"
    },
    {
        "type": 'Examine.1.0.ChangeCMDBStatusFailed',
        "Message": "设置CMDB状态失败，设备为{1}",
        "NumberOfArgs": 1,
        "Resolution": "请确保网络连接正常，用户权限满足条件，设备已录入CMDB，重新提交请求"
    },
    {
        "type": 'Examine.1.0.DeviceOffline',
        "Message": "服务器已经离线无法核查，设备为{1}",
        "NumberOfArgs": 1,
        "Resolution": "请确保服务器被正常纳管，重新提交请求"

    },
    {
        "type": 'Examine.1.0.DeviceLocked',
        "Message": "服务器已经锁定无法核查，设备为{1}",
        "NumberOfArgs": 1,
        "Resolution": "请确保服务器被正常纳管，重新提交请求"

    },
    {
        "type": 'Examine.1.0.GetCMDBStatusFailed',
        "Message": "获取CMDB状态失败，设备为{1}",
        "NumberOfArgs": 1,
        "Resolution": "请确保网络连接正常，用户权限满足条件，设备已录入CMDB，重新提交请求"
    },
    {
        "type": 'Examine.1.0.ExportSPRaidFailed',
        "Message": "导出3008RAID信息失败，设备为{1}",
        "NumberOfArgs": 1,
        "Resolution": "请确保服务器被正常纳管，重新提交请求"
    },
    {
        "type": 'Examine.1.0.SPRaidModelError',
        "Message": "RAID不支持带外管理且非3008RAID，设备为{1}",
        "NumberOfArgs": 1,
        "Resolution": "不支持核查非3008RAID的带内RAID卡"
    },
    {
        "type": 'Examine.1.0.ResetInBandFailed',
        "Message": "服务器带内重启失败，设备为{1}",
        "NumberOfArgs": 1,
        "Resolution": "请确保服务器被正常纳管，重新提交请求"
    },
    {
        "type": 'Examine.1.0.PatchSPServiceFailed',
        "Message": "服务器设置重启项失败，设备为{1}",
        "NumberOfArgs": 1,
        "Resolution": "请确保服务器被正常纳管，重新提交请求"
    },
    {
        "type": 'Examine.1.0.GetSPResultFailed',
        "Message": "获取服务器3008RAID导出任务信息失败，设备为{1}",
        "NumberOfArgs": 1,
        "Resolution": "请确保服务器被正常纳管，重新提交请求"
    },
    {
        "type": 'Examine.1.0.GetSPTaskResultTimeout',
        "Message": "获取服务器3008RAID导出任务信息超时失败，设备为{1}",
        "NumberOfArgs": 1,
        "Resolution": "请减少核查服务器数量，重新提交请求"
    },
    {
        "type": 'Examine.1.0.SPTaskFailed',
        "Message": "服务器3008RAID信息导出任务失败，设备为{1}",
        "NumberOfArgs": 1,
        "Resolution": "请确保核查时未对服务器执行其他操作，重新提交请求"
    },
    {
        "type": 'Examine.1.0.CMDBStatusNotOnRack',
        "Message": "服务器CMDB状态为非上架状态，设备为{1}",
        "NumberOfArgs": 1,
        "Resolution": "请确保服务器为上架状态，重新提交请求"
    },
    {
        "type": 'Examine.1.0.GetOptionIDFailed',
        "Message": "服务器操作锁定失败，设备为{1}",
        "NumberOfArgs": 1,
        "Resolution": "请确保服务器被正常纳管，重新提交请求"
    },
    {
        "type": 'Examine.1.0.CheckBIOSVersionFailed',
        "Message": "服务器BIOS版本较低，版本为{1}小于等于0.39",
        "NumberOfArgs": 1,
        "Resolution": "请升级服务器BIOS固件版本，重新提交请求"
    },
    {
        "type": 'Examine.1.0.CheckSPVersionFailed',
        "Message": "服务器SP版本较低，版本为{1}小于1.13",
        "NumberOfArgs": 1,
        "Resolution": "请升级服务器SP版本，重新提交请求"
    },
    {
        "type": 'Examine.1.0.InternalError',
        "Message": "由于内部错误造成此请求失败",
        "NumberOfArgs": 1,
        "Resolution": "请重新提交请求，如果问题复现，考虑重新启动服务"
    },
    {
        "type": 'Examine.1.0.InsufficientPrivilege',
        "Message": "无权限对此设备进行操作，请检查操作用户权限，设备为{1}",
        "NumberOfArgs": 1,
        "Resolution": "请检查操作用户权限和操作域，在提升权限或者扩大操作域后重试"
    },
    //    设备管理
    {
        "type": "FusionDirector.1.0.DevMgmtInternalError",
        "Message": "内部错误",
        "NumberOfArgs": 0,
        "Resolution": "请联系华为工程师定位"
    },
    {
        "type": "FusionDirector.1.0.DevMgmtMissingServerInfo",
        "Message": "服务器纳管信息丢失",
        "NumberOfArgs": 0,
        "Resolution": "删除该台服务器然后重新纳管"
    },
    {
        "type": "FusionDirector.1.0.DevMgmtConnectTimeout",
        "Message": "连接服务器超时",
        "NumberOfArgs": 0,
        "Resolution": "检查服务器连接状态"
    },
    {
        "type": "FusionDirector.1.0.DevMgmtAuthenticationFailed",
        "Message": "鉴权失败",
        "NumberOfArgs": 0,
        "Resolution": "用户名或密码错误"
    },
    {
        "type": "FusionDirector.1.0.DevMgmtNotSupport",
        "Message": "未知机型",
        "NumberOfArgs": 0,
        "Resolution": "该设备类型不支持纳管"
    },
    {
        "type": "FusionDirector.1.0.DevMgmtGetServerUUIDFailed",
        "Message": "获取服务器uuid失败",
        "NumberOfArgs": 0,
        "Resolution": "获取服务器uuid失败"
    },
    {
        "type": "FusionDirector.1.0.DevMgmtServerBeGoverning",
        "Message": "设备正在纳管中",
        "NumberOfArgs": 0,
        "Resolution": "操作受限，请稍后重试"
    },
    {
        "type": "FusionDirector.1.0.DevMgmtServerHasBeenGoverned",
        "Message": "设备已经被纳管",
        "NumberOfArgs": 0,
        "Resolution": "请不要重复纳管"
    },
    {
        "type": "FusionDirector.1.0.DevMgmtFDRestart",
        "Message": "Fusion director 重启",
        "NumberOfArgs": 0,
        "Resolution": "无"
    },
    {
        "type": "DevMgmt.1.0.UnDefined",
        "Message": "未定义的错误类型",
        "NumberOfArgs": 0,
        "Resolution": "请联系华为工程师定位"
    },
    {
        "type": "FusionDirector.1.0.DevMgmtOvertime",
        "Message": "纳管超时",
        "NumberOfArgs": 0,
        "Resolution": "删除服务器后重新纳管"
    },
    {
        "type": "FusionDirector.1.0.DevMgmtServerManagedByOtherFD",
        "Message": "设备已被其他FusionDirector系统管理",
        "NumberOfArgs": 0,
        "Resolution": "为避免冲突，设备只能被一个FusionDirector系统管理，如果确定需要管理该设备，可在重试操作中选择强制纳管选项"
    },
    //    系统升级
    {
        "type": "FDUpgrade.1.0.CheckEnvironmentFailed",
        "Message": "升级前环境检测失败",
        "NumberOfArgs": 0,
        "Resolution": "请确认磁盘剩余空间是否充足"
    },
    {
        "type": "FDUpgrade.1.0.CheckEnvironmentSuccess",
        "Message": "升级前环境检测成功",
        "NumberOfArgs": 0,
        "Resolution": "无"
    },
    {
        "type": "FDUpgrade.1.0.CheckPackageFailed",
        "Message": "升级包校验失败",
        "NumberOfArgs": 0,
        "Resolution": "请确认是否为合法的升级包"
    },
    {
        "type": "FDUpgrade.1.0.CheckPackageSuccess",
        "Message": "升级包校验成功",
        "NumberOfArgs": 0,
        "Resolution": "无"
    },
    {
        "type": "FDUpgrade.1.0.UnzipPackageFailed",
        "Message": "升级包解压失败",
        "NumberOfArgs": 0,
        "Resolution": "请确认是正确的升级包格式"
    },
    {
        "type": "FDUpgrade.1.0.UnzipPackageSuccess",
        "Message": "升级包解压成功",
        "NumberOfArgs": 0,
        "Resolution": "无"
    },
    {
        "type": "FDUpgrade.1.0.UpgradeFailed",
        "Message": "升级失败",
        "NumberOfArgs": 0,
        "Resolution": "请确认升级包是否可用"
    },
    {
        "type": "FDUpgrade.1.0.UpgradeSuccess",
        "Message": "升级成功",
        "NumberOfArgs": 0,
        "Resolution": "无"
    },
    //    配置规划
    {
        "type": 'ConfigService.1.0.ImportPlanningEncryptError',
        "Message": "加密用户信息失败",
        "NumberOfArgs": 0,
        "Resolution": "请重新提交请求"

    },
    {
        "type": 'ConfigService.1.0.ImportPlanningWriteDBError',
        "Message": "写数据到数据库失败",
        "NumberOfArgs": 0,
        "Resolution": "请重新提交请求"
    },
    {
        "type": 'ConfigService.1.0.ImportPlanningWriteDHCPServerError',
        "Message": "写数据到依赖的第三方服务失败",
        "NumberOfArgs": 0,
        "Resolution": "请重新提交请求"
    },
    //wei
    {
        "type": "Device.1.0.Updating",
        "Message": "设备正在升级中",
        "NumberOfArgs": 0,
        "Resolution": "请等待当前设备上操作完成后重试"
    },
    {
        "type": "Device.1.0.DeployingProfile",
        "Message": "设备正在进行Profile配置",
        "NumberOfArgs": 0,
        "Resolution": "请等待当前设备上操作完成后重试"
    },
    {
        "type": "Device.1.0.DeployingOS",
        "Message": "设备正在部署操作系统",
        "NumberOfArgs": 0,
        "Resolution": "请等待当前设备上操作完成后重试"
    },
    {
        "type": "Device.1.0.Reseting",
        "Message": "设备正在上下电",
        "NumberOfArgs": 0,
        "Resolution": "请等待当前设备上操作完成后重试"
    },
    {
        "type": "Device.1.0.CreatingBonding",
        "Message": "设备正在创建网口绑定",
        "NumberOfArgs": 0,
        "Resolution": "请等待当前设备上操作完成后重试"
    },
    {
        "type": "Device.1.0.ModifyingEthInfo",
        "Message": "设备正在修改以太网口信息",
        "NumberOfArgs": 0,
        "Resolution": "请等待当前设备上操作完成后重试"
    },
    {
        "type": "Device.1.0.CreatingVLAN",
        "Message": "设备正在创建VLAN网口",
        "NumberOfArgs": 0,
        "Resolution": "请等待当前设备上操作完成后重试"
    },
    {
        "type": "Device.1.0.ModifyingVLAN",
        "Message": "设备正在修改VLAN网口信息",
        "NumberOfArgs": 0,
        "Resolution": "请等待当前设备上操作完成后重试"
    },
    {
        "type": "Device.1.0.SettingOSInstallParameter",
        "Message": "设备正在设置SP部署操作系统参数",
        "NumberOfArgs": 0,
        "Resolution": "请等待当前设备上操作完成后重试"
    },
    {
        "type": "Device.1.0.SettingCloneParameter",
        "Message": "设备正在设置SP克隆操作系统参数",
        "NumberOfArgs": 0,
        "Resolution": "请等待当前设备上操作完成后重试"
    },
    {
        "type": "Device.1.0.SettingRecoverParameter",
        "Message": "设备正在设置SP快速部署操作系统参数",
        "NumberOfArgs": 0,
        "Resolution": "请等待当前设备上操作完成后重试"
    },
    {
        "type": "Device.1.0.SettingVirtualMedia",
        "Message": "设备正在挂载虚拟媒体",
        "NumberOfArgs": 0,
        "Resolution": "请等待当前设备上操作完成后重试"
    },
    {
        "type": "Device.1.0.CreatingVolume",
        "Message": "设备正在创建逻辑盘",
        "NumberOfArgs": 0,
        "Resolution": "请等待当前设备上操作完成后重试"
    },
    {
        "type": "Device.1.0.ActivatingFirmware",
        "Message": "设备正在生效固件版本",
        "NumberOfArgs": 0,
        "Resolution": "请等待当前设备上操作完成后重试"
    },
    {
        "type": "Device.1.0.ModifyingAccount",
        "Message": "设备正在修改默认账户信息",
        "NumberOfArgs": 0,
        "Resolution": "请等待当前设备上操作完成后重试"
    },
    {
        "type": "Device.1.0.ModifyingBonding",
        "Message": "设备正在修改网口绑定信息",
        "NumberOfArgs": 0,
        "Resolution": "请等待当前设备上操作完成后重试"
    },
    {
        "type": "Device.1.0.SettingBIOS",
        "Message": "设备正在修改BIOS配置",
        "NumberOfArgs": 0,
        "Resolution": "请等待当前设备上操作完成后重试"
    },
    {
        "type": "Device.1.0.ModifyingSP",
        "Message": "设备正在配置SP信息",
        "NumberOfArgs": 0,
        "Resolution": "请等待当前设备上操作完成后重试"
    },
    {
        "type": "Device.1.0.ModifyingVolume",
        "Message": "设备正在修改逻辑盘信息",
        "NumberOfArgs": 0,
        "Resolution": "请等待当前设备上操作完成后重试"
    },
    {
        "type": "Device.1.0.DeletingBonding",
        "Message": "设备正在删除网口绑定",
        "NumberOfArgs": 0,
        "Resolution": "请等待当前设备上操作完成后重试"
    },
    {
        "type": "Device.1.0.DeletingVLAN",
        "Message": "设备正在删除VLAN网口",
        "NumberOfArgs": 0,
        "Resolution": "请等待当前设备上操作完成后重试"
    },
    {
        "type": "Device.1.0.DeletingVolume",
        "Message": "设备正在删除逻辑盘",
        "NumberOfArgs": 0,
        "Resolution": "请等待当前设备上操作完成后重试"
    },
    {
        "type": "Device.1.0.DeletingDevice",
        "Message": "设备正在被删除",
        "NumberOfArgs": 0,
        "Resolution": "请等待当前设备上操作完成后重试"
    },
    {
        "type": "Node.1.0.OperateDatabseError",
        "Message": "数据库访问失败",
        "NumberOfArgs": 0,
        "Resolution": "请重新提交请求"
    },
    {
        "type": "Task.1.0.Timeout",
        "Message": "任务执行超时",
        "NumberOfArgs": 0,
        "Resolution": "请重新提交请求"
    },
    {
        "type": "Task.1.0.ServiceRestart",
        "Message": "FusionDirector被重启",
        "NumberOfArgs": 0,
        "Resolution": "请重新提交请求"
    },
    {
        "type": "Deploy.1.0.OperateRedisError",
        "Message": "缓存数据读取异常",
        "NumberOfArgs": 0,
        "Resolution": "请重新提交请求"
    },
    {
        "type": "Deploy.1.0.ImageSizeError",
        "Message": "镜像大小不合法",
        "NumberOfArgs": 0,
        "Resolution": "请上传新的镜像并重新提交请求"
    },
    {
        "type": "Deploy.1.0.CheckCodeError",
        "Message": "无效的镜像校验码",
        "NumberOfArgs": 0,
        "Resolution": "请输入正确的校验码并重新提交请求"
    },
    {
        "type": "Deploy.1.0.MoveImageError",
        "Message": "移动镜像失败",
        "NumberOfArgs": 0,
        "Resolution": "请重新提交请求"
    },
    {
        "type": "Deploy.1.0.OperateDatabseError",
        "Message": "数据库访问失败",
        "NumberOfArgs": 0,
        "Resolution": "请重新提交请求"
    },
    {
        "type": "Task.1.0.InternalError",
        "Message": "发生了内部错误",
        "NumberOfArgs": 0,
        "Resolution": "请重新提交请求"
    },
    {
        "type": "Deploy.1.0.IllegalParameter",
        "Message": "非法的任务参数,参数字段为{1}",
        "NumberOfArgs": 1,
        "Resolution": "请更改任务参数并重新提交请求"
    },
    {
        "type": "Deploy.1.0.CheckDeviceFailed",
        "Message": "设备信息校验失败",
        "NumberOfArgs": 0,
        "Resolution": "请重新提交请求"
    },
    {
        "type": "Deploy.1.0.SetDeployParamError",
        "Message": "设置部署参数失败",
        "NumberOfArgs": 0,
        "Resolution": "请重新提交请求"
    },
    {
        "type": "Deploy.1.0.LinkVirMediaError",
        "Message": "挂载虚拟媒体失败",
        "NumberOfArgs": 0,
        "Resolution": "请重新提交请求"
    },
    {
        "type": "Deploy.1.0.SetSPStartError",
        "Message": "设置从SP启动并重启设备失败",
        "NumberOfArgs": 0,
        "Resolution": "请重新提交请求"
    },
    {
        "type": "Deploy.1.0.DeployOSFailed",
        "Message": "设备部署失败，可能原因： 1、不支持选择的操作系统语言， 2、镜像版本号不匹配，3、未设置启动盘",
        "NumberOfArgs": 0,
        "Resolution": "请重新提交请求"
    },
    {
        "type": "Device.1.0.DeviceFault",
        "Message": "设备发生了故障",
        "NumberOfArgs": 0,
        "Resolution": "请检查设备并重新提交请求"
    },
    {
        "type": 'Base.1.0.ResourceAlreadyExists',
        "Message": "用户名已经存在",
        "NumberOfArgs": 1,
        "Resolution": "请更换用户名，重新提交请求"
    },
    {
        "type": 'iBMC.1.0.PasswordInWeakPWDDict',
        "Message": "弱密码",
        "NumberOfArgs": 1,
        "Resolution": "请更换密码，重新提交请求"
    },
    {
        "type": 'iBMC.1.0.InvalidPasswordSameWithHistory',
        "Message": "无效密码，和历史密码相同",
        "NumberOfArgs": 1,
        "Resolution": "请更换密码，重新提交请求"
    },
    {
        "type": 'iBMC.1.0.InvalidPassword',
        "Message": "密码无效，密码为空",
        "NumberOfArgs": 1,
        "Resolution": "请使用一个正确的密码重试."
    },
    {
        "type": 'iBMC.1.0.PropertyValueExceedsMaxLength',
        "Message": "用户名密码不能超过16个字符",
        "NumberOfArgs": 1,
        "Resolution": "请使用一个合法的用户名，重新提交请求"
    },
    {
        "type": 'Enclosure.1.0.TaskSubCallFail',
        "Message": "查询设备进度失败",
        "NumberOfArgs": 0,
        "Resolution": "请确保设备连接正常，刷新机框后重新提交请求"

    },
    {
        "type": 'Enclosure.1.0.TaskExecFail',
        "Message": "任务执行失败",
        "NumberOfArgs": 0,
        "Resolution": "请联系华为工程师定位"
    },
    {
        "type": 'Enclosure.1.0.TaskExecTimeout',
        "Message": "任务执行超时",
        "NumberOfArgs": 0,
        "Resolution": "请联系华为工程师定位"
    },
    {
        "type": 'Enclosure.1.0.TaskApplyFail',
        "Message": "机框配置下发失败，下发失败的项目：{1}，下发成功的项目：{2}",
        "NumberOfArgs": 2,
        "Resolution": "排查下发失败的模块，重新下发"
    },
    //    日志
    {
        "type": 'Examine.1.0.QueryMacTableFailed',
        "Message": "查询交换MAC表项失败，设备为{1}",
        "NumberOfArgs": 1,
        "Resolution": "请确保交换模块功能正常，并重新提交请求"
    },
    {
        "type": 'Examine.1.0.CollectSwitchLogFailed',
        "Message": "收集交换日志失败，交换模块为{1}",
        "NumberOfArgs": 1,
        "Resolution": "请确保交换模块功能正常，并重新提交请求"
    },
    {
        "type": 'Examine.1.0.CollectSwitchLogBySlotFailed',
        "Message": "收集交换日志失败，机框ID为{1}",
        "NumberOfArgs": 1,
        "Resolution": "请确保交换模块功能正常，并重新提交请求"
    },
    {
        "type": 'Examine.1.0.CollectSwitchLogBySlotPartiallyFinish',
        "Message": "交换模块日志收集部分成功，失败平面列表如下:{1}",
        "NumberOfArgs": 1,
        "Resolution": "请确保交换模块功能正常，并重新提交请求"
    },
    {
        "type": 'Examine.1.0.Timeout',
        "Message": "操作超时",
        "NumberOfArgs": 0,
        "Resolution": "请确保设备功能正常，并重新提交请求"
    },
    {
        "type": "Device.1.0.ModifyingBMCIPv4",
        "Message": "设备正在修改管理网口IPv4",
        "NumberOfArgs": 0,
        "Resolution": "此设备正在修改管理网口IPv4中，请稍后重试"

    },
   {
        "type": 'FusionDirector.1.0.DevMgmtMacOrSnMiss',
        "Message": "设备缺失MAC或SN值",
        "NumberOfArgs": 0,
        "Resolution": "请检查该设备的Mac或者SN是否有值"
    },
    {
        "type": "Upgrade.1.0.UnknownErr",
        "Message": "未知错误",
        "NumberOfArgs": 0,
        "Resolution": "请联系华为工程师定位"
    },
    {
        "type": "Upgrade.1.0.UpgradeFailedErr",
        "Message": "升级任务处理超时",
        "NumberOfArgs": 0,
        "Resolution": "请重新下发升级任务"
    },
    {
        "type": "Upgrade.1.0.TaskTimeOutErr",
        "Message": "任务处理超时",
        "NumberOfArgs": 0,
        "Resolution": "请重新下发升级任务"
    },
    {
        "type": "Upgrade.1.0.DoActiveProcessing",
        "Message": "生效任务执行中",
        "NumberOfArgs": 0,
        "Resolution": "无"
    },
    {
        "type": "Upgrade.1.0.DoActiveFailedErr",
        "Message": "生效任务执行失败",
        "NumberOfArgs": 0,
        "Resolution": "无"
    },
    {
        "type": "Upgrade.1.0.SetDeviceLockFailedErr",
        "Message": "操作设备失败",
        "NumberOfArgs": 0,
        "Resolution": "请重新下发升级任务"
    },
    {
        "type": "Upgrade.1.0.GetDeviceLockFailedErr",
        "Message": "操作冲突，该设备正在执行其他操作",
        "NumberOfArgs": 0,
        "Resolution": "请检查当前设备是否正在做其他配置，并等待该设备空闲时，再重新下发升级任务"
    },
    {
        "type": "Upgrade.1.0.PostFirmwareActivateFailedErr",
        "Message": "下发生效失败",
        "NumberOfArgs": 0,
        "Resolution": "请重新下发升级任务"
    },
    {
        "type": "Upgrade.1.0.UpgradeFinish",
        "Message": "升级成功",
        "NumberOfArgs": 0,
        "Resolution": "无"
    },
    {
        "type": "Upgrade.1.0.DoUpgradeProcessing",
        "Message": "升级任务执行中",
        "NumberOfArgs": 0,
        "Resolution": "无"
    },
    {
        "type": "Upgrade.1.0.GetDeivceInfoFailedErr",
        "Message": "获取待升级设备信息失败",
        "NumberOfArgs": 0,
        "Resolution": "请检查升级设备，请重新下发升级任务"
    },
    {
        "type": "Upgrade.1.0.GetDeivceIDFailedErr",
        "Message": "获取待升级设备ID失败",
        "NumberOfArgs": 0,
        "Resolution": "请检查升级设备，请重新下发升级任务"
    },
    {
        "type": "Upgrade.1.0.GetActiveStatusAndVersionByIDFailedErr",
        "Message": "获取设备生效状态失败",
        "NumberOfArgs": 0,
        "Resolution": "请重新下发升级任务"
    },
    {
        "type": "Upgrade.1.0.DeviceActiveStatusIsNoActive",
        "Message": "当前设备已经处于待生效状态，不支持升级",
        "NumberOfArgs": 0,
        "Resolution": "请手动生效该设备后，再执行升级任务"
    },
    {
        "type": "Upgrade.1.0.PostUpgradeFailedErr",
        "Message": "下发升级失败",
        "NumberOfArgs": 0,
        "Resolution": "请检测网络或者待升级设备，重新下发升级任务"
    },
    {
        "type": "Upgrade.1.0.GetNewJsonFailedErr",
        "Message": "升级内部错误",
        "NumberOfArgs": 0,
        "Resolution": "请重新下发升级任务"
    },
    {
        "type": "Upgrade.1.0.GetMissedDeviceIDsFailedErr",
        "Message": "升级内部错误",
        "NumberOfArgs": 0,
        "Resolution": "请重新下发升级任务"
    },
    {
        "type": "Upgrade.1.0.GetUpgProgressFailedErr",
        "Message": "获取升级进度时，任务管理发生内部错误",
        "NumberOfArgs": 0,
        "Resolution": "请重新下发升级任务"
    },
    {
        "type": "Upgrade.1.0.GetUpgProgressRespFailedErr",
        "Message": "获取升级进度失败",
        "NumberOfArgs": 0,
        "Resolution": "请重新下发升级任务"
    },
    {
        "type": "Upgrade.1.0.UnmarshalFailedErr",
        "Message": "任务信息反序列化转换失败",
        "NumberOfArgs": 0,
        "Resolution": "请重新下发升级任务"
    },
    {
        "type": "Upgrade.1.0.GetProgressInfoFailedErr",
        "Message": "获取升级进度信息时，发生内部错误",
        "NumberOfArgs": 0,
        "Resolution": "请重新下发升级任务"
    },
    {
        "type": "Upgrade.1.0.GetProgressInfoStatusFailedErr",
        "Message": "获取升级信息中的升级状态失败",
        "NumberOfArgs": 0,
        "Resolution": "请重新下发升级任务"
    },
    {
        "type": "Upgrade.1.0.GetProgressInfoProgressFailedErr",
        "Message": "获取升级信息中的升级进度失败",
        "NumberOfArgs": 0,
        "Resolution": "请重新下发升级任务"
    },
    {
        "type": "Upgrade.1.0.GetProgressDataFailedErr",
        "Message": "获取升级进度时，发生内部错误",
        "NumberOfArgs": 0,
        "Resolution": "请重新下发升级任务"
    },
    {
        "type": "Upgrade.1.0.GetProgressMesgsFailedErr",
        "Message": "获取升级进度信息失败",
        "NumberOfArgs": 0,
        "Resolution": "请重新下发升级任务"
    },
    {
        "type": "Upgrade.1.0.GetProgressMesgFailedErr",
        "Message": "获取升级进度信息失败",
        "NumberOfArgs": 0,
        "Resolution": "请重新下发升级任务"
    },
    {
        "type": "Upgrade.1.0.Message2MessageIdFailedErr",
        "Message": "获取升级进度信息失败,发生内部错误",
        "NumberOfArgs": 0,
        "Resolution": "请重新下发升级任务"
    },
    {
        "type": "Upgrade.1.0.DoUpgradeFailedErr",
        "Message": "升级任务失败，发生内部错误",
        "NumberOfArgs": 0,
        "Resolution": "请重新下发升级任务"
    },
    {
        "type": "Upgrade.1.0.StartUpgrade",
        "Message": "启动升级任务",
        "NumberOfArgs": 0,
        "Resolution": "无"
    },
    {
        "type": "Upgrade.1.0.StartActive",
        "Message": "启动生效任务",
        "NumberOfArgs": 0,
        "Resolution": "无"
    },
    {
        "type": "Upgrade.1.0.StartImportFile",
        "Message": "启动导入文件任务",
        "NumberOfArgs": 0,
        "Resolution": "无"
    },
    {
        "type": "Upgrade.1.0.StartSubUpgrade",
        "Message": "启动升级子任务",
        "NumberOfArgs": 0,
        "Resolution": "无"
    },
    {
        "type": "Upgrade.1.0.DoUploadFileFailedErr",
        "Message": "导入文件失败",
        "NumberOfArgs": 0,
        "Resolution": "请重新导入文件"
    },
    {
        "type": "Upgrade.1.0.DoUploadFileProcessing",
        "Message": "导入文件执行中",
        "NumberOfArgs": 0,
        "Resolution": "无"
    },
    {
        "type": "Upgrade.1.0.UploadFileOK",
        "Message": "导入文件成功",
        "NumberOfArgs": 0,
        "Resolution": "无"
    },
    {
        "type": "Upgrade.1.0.GetActiveModeByPathErr",
        "Message": "获取固件包生效信息失败",
        "NumberOfArgs": 0,
        "Resolution": "请检查固件包，并重新下发升级任务"
    },
    {
        "type": "Upgrade.1.0.UpgradeSameVersionFailedErr",
        "Message": "升级相同版本导致失败",
        "NumberOfArgs": 0,
        "Resolution": "当前不支持相同版本升级，请过滤掉相同版本的升级任务"
    },
    {
        "type": "Upgrade.1.0.UpgradingEnclosureLockErr",
        "Message": "发生内部错误",
        "NumberOfArgs": 0,
        "Resolution": "请重新下发升级任务"
    },
    {
        "type": "Upgrade.1.0.BuildAsyncTaskSignatureErr",
        "Message": "发生内部错误",
        "NumberOfArgs": 0,
        "Resolution": "请重新下发升级任务"
    },
    {
        "type": "Upgrade.1.0.SendAsyncTaskSignatureErr",
        "Message": "发生内部错误",
        "NumberOfArgs": 0,
        "Resolution": "请重新下发升级任务"
    },
    {
        "type": "Upgrade.1.0.PostUpgradeRequestErr",
        "Message": "下发升级失败",
        "NumberOfArgs": 0,
        "Resolution": "请检测网络或者待升级设备，重新下发升级任务"
    },
    {
        "type": "Upgrade.1.0.UpgradeResponseCodeErr",
        "Message": "下发升级失败",
        "NumberOfArgs": 0,
        "Resolution": "请检测网络或者待升级设备，重新下发升级任务"
    },
    {
        "type": "Upgrade.1.0.DeviceNotUpgradeErr",
        "Message": "设备未升级",
        "NumberOfArgs": 0,
        "Resolution": "请重新下发升级任务"
    },
    {
        "type": "Upgrade.1.0.DoUpgradeFinish",
        "Message": "升级成功",
        "NumberOfArgs": 0,
        "Resolution": "无"
    },
    {
        "type": "Upgrade.1.0.DoActiveFinish",
        "Message": "生效成功",
        "NumberOfArgs": 0,
        "Resolution": "无"
    },
    {
        "type": "Upgrade.1.0.CheckManagerUpgradeStatusErr",
        "Message": "管理板升级错误，生效未执行",
        "NumberOfArgs": 0,
        "Resolution": "请检测网络或者待升级设备，重新下发升级任务"
    },
    {
        "type": "Upgrade.1.0.CheckUpgradeParaErr",
        "Message": "升级参数错误",
        "NumberOfArgs": 0,
        "Resolution": "请重新下发升级任务"
    },
    {
        "type": 'iBMC.1.0.FruNotExist',
        "Message": "交换平面{1}不存在",
        "NumberOfArgs": 1,
        "Resolution": "请检查交换平面存在后重试"
    },
    {
        "type": 'iBMC.1.0.ActionFailedByPowerOff',
        "Message": "交换平面电源控制操作失败，当前已下电",
        "NumberOfArgs": 0,
        "Resolution": "请确保设备上电后重试"
    },
    {
        "type": "iBMC.1.0.BladeNotPresent",
        "Message": "单板不在位",
        "NumberOfArgs": 0,
        "Resolution" : "请选择一个在位的刀片"
    },
    {
        "type": "iBMC.1.0.PowerCappingValueLessThanAllowed",
        "Message": "当前功率封顶值{1}小于单板可设置最小值{2}",
        "NumberOfArgs": 2,
        "Resolution" : "请修改当前单板功率封顶值并重新提交请求"
    },
    {
        "type": "iBMC.1.0.PowerCappingValueGreatThanCapacity",
        "Message": "当前功率封顶值{1}大于单板可设置最大值{2}",
        "NumberOfArgs": 2,
        "Resolution" : "请修改当前单板功率封顶值并重新提交请求"
    },
    {
        "type": "iBMC.1.0.CapacityValueLessThanDemand",
        "Message": "单板可设置功率最大值{1}小于需求值{2}",
        "NumberOfArgs": 2,
        "Resolution" : "请修改当前单板功率封顶值并重新提交请求"
    },
    {
        "type": "iBMC.1.0.PowerCappingValueSetFailed",
        "Message": "设置机框功率封顶值失败",
        "NumberOfArgs": 0,
        "Resolution" : "请联系华为工程师定位"
    },
    {
        "type": "iBMC.1.0.PowerCappingBladeValueSetFailed",
        "Message": "设置刀片功率封顶值失败",
        "NumberOfArgs": 0,
        "Resolution" : "请联系华为工程师定位"
    },
    {
        "type": "iBMC.1.0.NoPowerCappingValueForTheBlade",
        "Message": "剩余功率封顶值不足",
        "NumberOfArgs": 0,
        "Resolution" : "请修改当前单板的功率封顶值并重新提交请求。"
    },
    {
        "type": "iBMC.1.0.SmartCoolingModeConflictWithControlMode",
        "Message": "不能同时设置智能冷却模式和手动模式",
        "NumberOfArgs": 0,
        "Resolution" : "请修改功率封顶模式并重新提交请求"
    },
    {
        "type": "Upgrade.1.0.CheckDoUpgradeNumErr",
        "Message": "获取当前升级任务个数错误",
        "NumberOfArgs": 0,
        "Resolution": "请重新下发升级任务"
    },
    // cmy
    {
        "type": "Config.1.0.UnknownErr",
        "Message": "未知错误",
        "NumberOfArgs": 0,
        "Resolution": "请联系华为工程师定位"
    },
    {
        "type": "Config.1.0.TaskTimeOutErr",
        "Message": "任务处理超时",
        "NumberOfArgs": 0,
        "Resolution": "请重新下发配置"
    },
    {
        "type": "Config.1.0.BIOSActiveFailedErr",
        "Message": "BIOS生效失败",
        "NumberOfArgs": 0,
        "Resolution": "请重新下发配置"
    },
    {
        "type": "Config.1.0.RAIDConfigFailedErr",
        "Message": "RAID配置失败",
        "NumberOfArgs": 0,
        "Resolution": "确保硬盘状态正常，重新下发配置"
    },
    {
        "type": "Config.1.0.ResetFailedErr",
        "Message": "下发重启命令失败",
        "NumberOfArgs": 0,
        "Resolution": "请重新下发配置"
    },
    {
        "type": "Config.1.0.RAIDInfoCheckingFailedErr",
        "Message": "RAID校验过程中失败",
        "NumberOfArgs": 0,
        "Resolution": "请检查RAID配置，重新下发配置任务"
    },
    {
        "type": "Config.1.0.RAIDInfoCheckNotPassErr",
        "Message": "RAID检测不通过",
        "NumberOfArgs": 0,
        "Resolution": "请检查RAID配置，重新下发配置任务"
    },
    {
        "type": "Config.1.0.MEZZConfigFailedErr",
        "Message": "MEZZ卡配置失败",
        "NumberOfArgs": 0,
        "Resolution": "请检查MEZZ卡配置，重新下发配置任务"
    },
    {
        "type": "Config.1.0.GetOperationIDFailedErr",
        "Message": "操作冲突，该设备正在执行其他操作",
        "NumberOfArgs": 0,
        "Resolution": "请检查当前设备是否正在做其他配置，并等待该设备空闲时，重新下发配置任务"
    },
    {
        "type": "Config.1.0.GetEthernetFailedErr",
        "Message": "获取配置网络信息失败",
        "NumberOfArgs": 0,
        "Resolution": "请检测待网口，重新下发配置任务"
    },
    {
        "type": "Config.1.0.ConfigEthernetFailedErr",
        "Message": "下发网络配置失败",
        "NumberOfArgs": 0,
        "Resolution": "请检测网络配置，重新下发配置任务"
    },
    {
        "type": "Config.1.0.GetErrInfoFromRespFailedErr",
        "Message": "接受响应体异常",
        "NumberOfArgs": 0,
        "Resolution": "请检查配置，重新下发配置任务"
    },
    {
        "type": "Config.1.0.GetFDAsNTPServerJs",
        "Message": " 检测以当前设备作为NTP失败",
        "NumberOfArgs": 0,
        "Resolution": "请重新下发配置"
    },
    {
        "type": "Config.1.0.MarshalFailedErr",
        "Message": "配置信息序列化转换失败",
        "NumberOfArgs": 0,
        "Resolution": "请重新下发配置"
    },
    {
        "type": "Config.1.0.GetSouthOutBandIPFromClusterFailedErr",
        "Message": "NTP配置获取南向IP失败",
        "NumberOfArgs": 0,
        "Resolution": "请重新下发配置"
    },
    {
        "type": "Config.1.0.UnmarshalFailedErr",
        "Message": "配置信息反序列化转换失败",
        "NumberOfArgs": 0,
        "Resolution": "请重新下发配置"
    },
    {
        "type": "Config.1.0.ConfigNTPFailedErr",
        "Message": "配置NTP失败",
        "NumberOfArgs": 0,
        "Resolution": "请重新下发配置"
    },
    {
        "type": "Config.1.0.JsonToStringFailedErr",
        "Message": "JSON格式转成字符串失败",
        "NumberOfArgs": 0,
        "Resolution": "请重新下发配置"
    },
    {
        "type": "Config.1.0.GetNTPKeyFromClusterMgmtFailedErr",
        "Message": "从集群获取NTP Key失败",
        "NumberOfArgs": 0,
        "Resolution": "请重新下发配置"
    },
    {
        "type": "Config.1.0.ConfigParamFailedErr",
        "Message": "配置{1}失败",
        "NumberOfArgs": 1,
        "Resolution": "请修改配置参数后，重新下发配置。"
    },
    {
        "type": "Config.1.0.GetNTPKeyURLFailedErr",
        "Message": "配置NTP服务器秘钥失败。",
        "NumberOfArgs": 0,
        "Resolution": "请检查秘钥格式后重新下发配置。"
    },
    {
        "type": "Config.1.0.CheckLDAPEnableConfigFailedErr",
        "Message": "检测LDAP组应用文件夹输入格式失败。",
        "NumberOfArgs": 0,
        "Resolution": "请修改LDAP组应用文件夹输入格式后重新下发配置。"
    },
    {
        "type": "Config.1.0.GetLoginRuleFailedErr",
        "Message": "检测登录规则失败",
        "NumberOfArgs": 0,
        "Resolution": "请重新下发配置"
    },
    {
        "type": "Config.1.0.ConfigLDAPEnableFailedErr",
        "Message": "LDAP使能配置失败",
        "NumberOfArgs": 0,
        "Resolution": "请重新下发配置"
    },
    {
        "type": "Config.1.0.ConfigLoginRuleFailedErr",
        "Message": "登录规则配置失败",
        "NumberOfArgs": 0,
        "Resolution": "请重新下发配置"
    },
    {
        "type": "Config.1.0.CheckNTPAttrFailedErr",
        "Message": "获取NTP配置属性失败",
        "NumberOfArgs": 0,
        "Resolution": "请重新下发配置"
    },
    {
        "type": "Config.1.0.ConfigNTPAttrFailedErr",
        "Message": "NTP配置属性失败",
        "NumberOfArgs": 0,
        "Resolution": "请重新下发配置"
    },
    {
        "type": "Config.1.0.GetFirstEthFailedErr",
        "Message": "获取第一个网口配置失败",
        "NumberOfArgs": 0,
        "Resolution": "请重新下发配置"
    },
    {
        "type": "Config.1.0.GetMezz520Or522DynamicDataMacFailedErr",
        "Message": "获取MEZZ520或者MZ522失败无状态数据Mac失败",
        "NumberOfArgs": 0,
        "Resolution": "请重新下发配置"
    },
    {
        "type": "Config.1.0.GetMezz520Or522DynamicDataWWNFailedErr",
        "Message": "获取MEZZ520或者MZ522失败无状态数据WWN失败",
        "NumberOfArgs": 0,
        "Resolution": "请重新下发配置"
    },
    {
        "type": "Config.1.0.GetMezz520Or522DynamicDataVlanFailedErr",
        "Message": "获取MEZZ520或者MZ522失败无状态数据Vlan失败",
        "NumberOfArgs": 0,
        "Resolution": "请重新下发配置"
    },
    {
        "type": "Config.1.0.ConfigFabricsModeFailedErr",
        "Message": "配置拓扑模式失败",
        "NumberOfArgs": 0,
        "Resolution": "请重新下发配置"
    },
    {
        "type": "Config.1.0.ConfigFabricesFailedErr",
        "Message": "配置拓扑模式失败",
        "NumberOfArgs": 0,
        "Resolution": "请重新下发配置"
    },
    {
        "type": "Config.1.0.InputModeFailedErr",
        "Message": "配置{1}入参错误，请检查配置参数后，重新下发配置",
        "NumberOfArgs": 1,
        "Resolution": "请重新下发配置"
    },
    //mkx
    {
        "type": 'Backup.1.0.GetClusterMasterNodeFailed',
        "Message": "系统环境异常，备份失败",
        "NumberOfArgs": 0,
        "Resolution": "请确保系统环境正常，重新提交请求"

    },
    {
        "type": 'Backup.1.0.ExportDataFromDBFailed',
        "Message": "系统环境异常，备份失败",
        "NumberOfArgs": 0,
        "Resolution": "请确保系统环境正常，重新提交请求"
    },
    {
        "type": 'Backup.1.0.GetBackupFilesFailed',
        "Message": "系统环境异常，备份失败",
        "NumberOfArgs": 0,
        "Resolution": "请确保各微服务运行正常，重新提交请求"
    },
    {
        "type": 'Backup.1.0.CompressDataFailed',
        "Message": "发生内部错误，备份失败",
        "NumberOfArgs": 0,
        "Resolution": "发生内部错误，请联系华为工程师"

    },
    {
        "type": 'Restore.1.0.EnvCheckFailed',
        "Message": "恢复环境检测失败",
        "NumberOfArgs": 0,
        "Resolution": "请检查备份包的版本是否和当前系统版本兼容，重新提交请求"

    },
    {
        "type": 'Restore.1.0.EnvPrepareFailed',
        "Message": "恢复环境准备失败",
        "NumberOfArgs": 0,
        "Resolution": "请确保备份包数据完整，重新提交请求"

    },
    {
        "type": 'Restore.1.0.ImportDataToDBFailed',
        "Message": "系统环境异常，恢复失败",
        "NumberOfArgs": 0,
        "Resolution": "请确保数据库运行正常，重新提交请求"

    },
    {
        "type": 'Restore.1.0.RetoreServiceFilesFailed',
        "Message": "系统环境异常，恢复失败",
        "NumberOfArgs": 0,
        "Resolution": "请确保系统环境正常，重新提交请求"

    },
    {
        "type": 'Restore.1.0.UpdateSerivceFailed',
        "Message": "发生内部错误，恢复失败",
        "NumberOfArgs": 0,
        "Resolution": "发生内部错误，请联系华为工程师"

    },
    {
        "type": 'Upgrade.1.0.EnvCheckFailed',
        "Message": "升级环境检测失败",
        "NumberOfArgs": 0,
        "Resolution": "请检查磁盘空间是否充足，版本是否兼容"

    },
    {
        "type": 'Upgrade.1.0.EnvPrepareFailed',
        "Message": "升级环境准备失败",
        "NumberOfArgs": 0,
        "Resolution": "请查看升级包是否完整，重新提交请求"

    },
    {
        "type": 'Upgrade.1.0.UpgradeFailed',
        "Message": "升级失败",
        "NumberOfArgs": 0,
        "Resolution": "发生内部错误，请联系华为工程师"

    },
    {
        "type": 'Activated.1.0.ActivatedFailed',
        "Message": "生效操作失败",
        "NumberOfArgs": 0,
        "Resolution": "发生内部错误，请联系华为工程师"

    },
    {
        "type": 'Activated.1.0.VersionCheckedFailed',
        "Message": "生效版本检测失败",
        "NumberOfArgs": 0,
        "Resolution": "发生内部错误，请联系华为工程师"

    },
    {
        "type": 'Upgrade.1.0.DuplicateUpgradeFailed',
        "Message": "升级包的版本和当前待生效版本一致",
        "NumberOfArgs": 0,
        "Resolution": "生效系统当前版本，或者上传其它版本的升级包再次升级"

    },
    {
        "type": 'Upgrade.1.0.GetCurrentVersionFailed',
        "Message": "集群内节点当前版本不一致",
        "NumberOfArgs": 0,
        "Resolution": "无"

    },
    {
        "type": 'Upgrade.1.0.GetInactiveVersionFailed',
        "Message": "集群内节点生效版本不一致",
        "NumberOfArgs": 0,
        "Resolution": "无"

    },
    //    lgy
    {
        "type": 'DevMgmt.1.0.ServerIsNotGoverned',
        "Message": "服务器没有被纳管",
        "NumberOfArgs": 0,
        "Resolution": "请确保服务器被正常纳管，重新提交请求"
    },
    {
        "type": 'DevMgmt.1.0.ServerStateIsNotOnline',
        "Message": "服务器状态不在线",
        "NumberOfArgs": 0,
        "Resolution": "请确保服务器为在线状态，重新提交请求"
    },
    {
        "type": 'DevMgmt.1.0.ServerCallBMCRestoreFactoryError',
        "Message": "设置BMC恢复出厂失败",
        "NumberOfArgs": 0,
        "Resolution": "请确保网络连接正常，用户权限满足条件，重新提交请求"
    },
    {
        "type": 'DevMgmt.1.0.ServerIsNotExist',
        "Message": "服务器不存在",
        "NumberOfArgs": 0,
        "Resolution": "请确保服务器被正常纳管，重新提交请求"

    },
    {
        "type": 'DevMgmt.1.0.ServerLinkStateIsNotEnable',
        "Message": "服务器心跳丢失",
        "NumberOfArgs": 0,
        "Resolution": "请确保服务器被正常纳管，重新提交请求"

    },
    {
        "type": 'DevMgmt.1.0.ServerPowerStateIsOn',
        "Message": "服务器带内上电",
        "NumberOfArgs": 0,
        "Resolution": "请确保服务器带内下电，重新提交请求"

    },
    {
        "type": 'DevMgmt.1.0.ServerReleaseRepeated',
        "Message": "服务器下线请求重复",
        "NumberOfArgs": 0,
        "Resolution": "请确保服务器未发送下线请求后，重新提交请求"
    },
    {
        "type": 'DevMgmt.1.0.ServerDeleteFailed',
        "Message": "服务器恢复出厂设置成功但是删除服务器失败",
        "NumberOfArgs": 0,
        "Resolution": "请重新提交请求或者手动删除服务器"
    },
    {
        "type": 'DevMgmt.1.0.CallBMCError',
        "Message": "调用服务器接口异常",
        "NumberOfArgs": 0,
        "Resolution": "请确保网络连接正常，用户权限满足条件，重新提交请求"
    }, {
        "type": 'Network.1.0.InternalError',
        "Message": "内部错误",
        "NumberOfArgs": 0,
        "Resolution": "发生内部错误，请联系华为工程师"
    },
    {
        "type": 'Network.1.0.QueryMacTableFailed',
        "Message": "查询交换MAC表项失败，设备为{1}",
        "NumberOfArgs": 1,
        "Resolution": "请确保交换模块功能正常，并重新提交请求"
    },
    {
        "type": 'Network.1.0.CollectSwitchLogFailed',
        "Message": "收集交换日志失败，交换模块为{1}",
        "NumberOfArgs": 1,
        "Resolution": "请确保交换模块功能正常，并重新提交请求"
    },
    {
        "type": 'Network.1.0.CollectSwitchLogBySlotFailed',
        "Message": "收集交换日志失败，机框ID为{1}",
        "NumberOfArgs": 1,
        "Resolution": "请确保交换模块功能正常，并重新提交请求"
    },
    {
        "type": 'Network.1.0.CollectSwitchLogBySlotPartiallyFinish',
        "Message": "交换模块日志收集部分成功，失败平面列表如下:{1}",
        "NumberOfArgs": 1,
        "Resolution": "请确保交换模块功能正常，并重新提交请求"
    },
    {
        "type": 'Network.1.0.Timeout',
        "Message": "操作超时",
        "NumberOfArgs": 0,
        "Resolution": "请确保设备功能正常，并重新提交请求"
    },
    {
        "type": 'Network.1.0.HealthCheckAbnormal',
        "Message": "存在交换设备状态异常，中止升级，异常设备列表：{1}",
        "NumberOfArgs": 1,
        "Resolution": "请确保设备状态正常，并重新提交请求"
    },
    {
        "type": 'Network.1.0.FirmwareUpgradeFailed',
        "Message": "固件升级失败",
        "NumberOfArgs": 0,
        "Resolution": "请确保设备状态正常，并重新提交请求"
    },
    {
        "type": 'Network.1.0.FirmwareUpgradeAbort',
        "Message": "当前机框存在交换设备固件升级失败，中止升级",
        "NumberOfArgs": 0,
        "Resolution": "请确保设备状态正常，并重新提交请求"
    },
    {
        "type": 'LogMgmtService.1.0.DumpDeviceLogDumpFailed',
        "Message": "存在设备状态异常，日志收集失败",
        "NumberOfArgs": 0,
        "Resolution": "请确保设备状态正常，并重新提交请求"
    },
    {
        "type": 'LogMgmtService.1.0.DumpFailed',
        "Message": "存在异常设备，日志收集失败",
        "NumberOfArgs": 0,
        "Resolution": "请确保设备正常，并重新提交请求"

    },
    {
        "type": 'LogMgmtService.1.0.DumpFailedGetBMCIp',
        "Message": "获取BMC自身IP异常，日志收集失败",
        "NumberOfArgs": 0,
        "Resolution": "请确保获取BMC自身IP正常，并重新提交请求"
    },
    {
        "type": 'LogMgmtService.1.0.DumpFailedCreatePathErr',
        "Message": "创建日志收集路径异常，日志收集失败",
        "NumberOfArgs": 0,
        "Resolution": "请联系华为工程师"
    },
    {
        "type": 'LogMgmtService.1.0.DumpFailedGetUploadUrl',
        "Message": "获取日志收集路径异常，日志收集失败",
        "NumberOfArgs": 0,
        "Resolution": "请联系华为工程师"
    },
    {
        "type": 'LogMgmtService.1.0.DumpFailedchassisBMC',
        "Message": "存在异常设备，日志收集失败",
        "NumberOfArgs": 0,
        "Resolution": "请确保设备正常，并重新提交请求"
    },
    {
        "type": 'LogMgmtService.1.0.DumpFailedchassisVrp',
        "Message": "存在设备状态异常，日志收集失败",
        "NumberOfArgs": 0,
        "Resolution": "请确保设备状态正常，并重新提交请求"
    },
    {
        "type": 'LogMgmtService.1.0.DumpFailedchassisEmLog',
        "Message": "存在设备异常，日志收集失败",
        "NumberOfArgs": 0,
        "Resolution": "请确保设备正常，并重新提交请求"
    },
    {
        "type": 'LogMgmtService.1.0.DumpFailedchassisAppliance',
        "Message": "存在异常设备，日志收集失败",
        "NumberOfArgs": 0,
        "Resolution": "请确保设备正常，并重新提交请求"
    },
    {
        "type": 'LogMgmtService.1.0.FdLogDumpFailed',
        "Message": "FusionDirector自身存在异常，日志收集失败",
        "NumberOfArgs": 0,
        "Resolution": "请确保FusionDirector网络通信正常，并重新提交请求"
    },
    {
        "type": 'LogMgmtService.1.0.DumpFailedForChassis',
        "Message": "存在异常设备，日志收集失败",
        "NumberOfArgs": 0,
        "Resolution": "请确保设备正常，并重新提交请求"
    },
    {
        "type": 'LogMgmtService.1.0.DumpFailedForBmc',
        "Message": "存在异常设备，日志收集失败",
        "NumberOfArgs": 0,
        "Resolution": "请确保设备正常，并重新提交请求"
    },
    {
        "type": 'Deploy.1.0.ImageNameExists',
        "Message": "镜像名称已经存在",
        "NumberOfArgs": 0,
        "Resolution": "请修改镜像名重新提交请求"
    },
    {
        "type": 'Deploy.1.0.ReadServerInfoFailed',
        "Message": "读取设备信息失败",
        "NumberOfArgs": 0,
        "Resolution": "请重新提交请求"
    },
    {
        "type": 'Device.1.0.CloningOS',
        "Message": "设备正在克隆镜像",
        "NumberOfArgs": 0,
        "Resolution": "请等待当前设备上操作完成后重试"
    },
    {
        "type": 'Device.1.0.RecoveringOS',
        "Message": "设备正在快速部署操作系统",
        "NumberOfArgs": 0,
        "Resolution": "请等待当前设备上操作完成后重试"
    },
    {
        "type": 'Deploy.1.0.AllocateSPIPFailed',
        "Message": "申请SP网络IP失败",
        "NumberOfArgs": 0,
        "Resolution": "请重新提交请求"
    },
    {
        "type": 'Deploy.1.0.NotEnoughLicense',
        "Message": "设备上没有安装License",
        "NumberOfArgs": 0,
        "Resolution": "请安装License后重新提交请求"
    },
    {
        "type": 'Deploy.1.0.SPNotFount',
        "Message": "设备上没有安装SP",
        "NumberOfArgs": 0,
        "Resolution": "请安装SP后重新提交请求"
    },
    {
        "type": 'Deploy.1.0.DeviceNotSupportOperation',
        "Message": "设备配置不支持该操作",
        "NumberOfArgs": 0,
        "Resolution": "请选择支持操作的设备重新提交请求"
    },
    {
        "type": 'Deploy.1.0.DeviceNotOnLine',
        "Message": "设备状态不是在线状态",
        "NumberOfArgs": 0,
        "Resolution": "请将设备上线后重新提交请求"
    },
    {
        "type": "Deploy.1.0.SetCloneParamError",
        "Message": "设置克隆参数失败",
        "NumberOfArgs": 0,
        "Resolution": "请重新提交请求"
    },
    {
        "type": "Deploy.1.0.SetRecoverParamError",
        "Message": "设置快速部署参数失败",
        "NumberOfArgs": 0,
        "Resolution": "请重新提交请求"
    },
    {
        "type": "Deploy.1.0.CloneOSFailed",
        "Message": "克隆操作系统失败",
        "NumberOfArgs": 0,
        "Resolution": "请重新提交请求"
    },
    {
        "type": "Deploy.1.0.RecoverOSFailed",
        "Message": "快速部署操作系统失败",
        "NumberOfArgs": 0,
        "Resolution": "请重新提交请求"
    },
    {
        "type": "SP.1.0.BtrfsNotSupport",
        "Message": "不支持btrfs文件系统",
        "NumberOfArgs": 0,
        "Resolution": "请重新提交请求"
    },
    {
        "type": "SP.1.0.FetchCloneToolsFailed",
        "Message": "下载克隆工具失败",
        "NumberOfArgs": 0,
        "Resolution": "请重新提交请求"
    },
    {
        "type": "SP.1.0.VerifyParaFailed",
        "Message": "SP校验参数失败",
        "NumberOfArgs": 0,
        "Resolution": "请重新提交请求"
    },
    {
        "type": "SP.1.0.SetNetworkFailed",
        "Message": "配置SP网络失败",
        "NumberOfArgs": 0,
        "Resolution": "请重新提交请求"
    },
    {
        "type": "SP.1.0.ExportConfigFailed",
        "Message": "导出Raid配置失败",
        "NumberOfArgs": 0,
        "Resolution": "请重新提交请求"
    },
    {
        "type": "SP.1.0.UploadInitFailed",
        "Message": "上传初始化失败",
        "NumberOfArgs": 0,
        "Resolution": "请重新提交请求"
    },
    {
        "type": "SP.1.0.StorageNotEnough",
        "Message": "存储空间不足",
        "NumberOfArgs": 0,
        "Resolution": "请重新提交请求"
    },
    {
        "type": "SP.1.0.UploadImageFailed",
        "Message": "上传镜像文件失败",
        "NumberOfArgs": 0,
        "Resolution": "请重新提交请求"
    },
    {
        "type": "SP.1.0.TransferFailed",
        "Message": "下载镜像文件失败",
        "NumberOfArgs": 0,
        "Resolution": "请重新提交请求"
    },
    {
        "type": "SP.1.0.ImportDeviceInfoFailed",
        "Message": "导入系统设备信息失败",
        "NumberOfArgs": 0,
        "Resolution": "请重新提交请求"
    },
    {
        "type": "Deploy.1.0.NotAuthorized",
        "Message": "没有权限操作该设备",
        "NumberOfArgs": 0,
        "Resolution": "请申请操作权限后重新提交请求"
    },
    {
        "type": "SP.1.0.SPCheckOSVersionFailed",
        "Message": "操作系统版本校验失败",
        "NumberOfArgs": 0,
        "Resolution": "请检查操作系统版本后重新提交请求"
    },
    {
        "type": 'Network.1.0.ApplyConflict',
        "Message": "机框正在应用配置文件",
        "NumberOfArgs": 0,
        "Resolution": "请确保当前机框应用配置文件完成，再重新提交请求"
    },
    {
        "type": 'Network.1.0.ApplyDispatchFailed',
        "Message": "机框配置下发失败，失败列表：{1}",
        "NumberOfArgs": 1,
        "Resolution": "请确保设备状态正常，并重新提交请求"
    },
    {
        "type": 'Network.1.0.ApplyBoardCheckAbnormal',
        "Message": "机框配置文件与交换设备不一致，不一致槽位列表：{1}",
        "NumberOfArgs": 1,
        "Resolution": "请确保配置文件与交换设备一致，并重新提交请求"
    },
    {
        'type': 'Scope.1.0.ResourceURIInWrongFormat',
        'Message': '资源URI格式错误',
        'NumberOfArgs': 0,
        'Resolution': '请修改资源路径后重新下发请求'
    },
    {
        'type': 'Scope.1.0.ResourceNotExist',
        'Message': '资源不存在',
        'NumberOfArgs': 0,
        'Resolution': '请确认资源存在后重新下发请求'
    },
    {
        'type': 'Scope.1.0.InsufficientPrivilege',
        'Message': '无权限对此资源进行操作，请检查操作用户权限',
        'NumberOfArgs': 0,
        'Resolution': '请检查操作用户权限和操作域，在提升权限或者扩大操作域后重试'
    },
    {
        "type": 'Examine.1.0.DeviceDetached',
        "Message": "服务器已经脱管无法核查或者确定核查结果，设备为{1}",
        "NumberOfArgs": 1,
        "Resolution": "请确保服务器被正常纳管，重新提交请求"

    },
    {
        "type": 'FusionDirector.1.0.OperationNotSupportedOnState',
        "Message": "对象当前的状态不支持该操作",
        "NumberOfArgs": 0,
        "Resolution": "请等待对象处于合适的状态后再尝试此操作"

    },
    {
        "type": "Deploy.1.0.SPVersionTooEarly",
        "Message": "Smart Provisioning版本太低",
        "NumberOfArgs": 0,
        "Resolution": "请先升级Provisioning后重新提交请求"
    },
    {
        "type": 'Enclosure.1.0.RefreshFailed',
        "Message": "机框刷新异常，刷新异常的项目：{1}，刷新成功的项目：{2}",
        "NumberOfArgs": 2,
        "Resolution": "请检查机框告警，确保机框各模块功能正常，并重新刷新机框"
    },
    {
        "type": 'Enclosure.1.0.LoginFailed',
        "Message": "机框纳管账户异常",
        "NumberOfArgs": 0,
        "Resolution": "请确保机框各模块功能正常，重新输入用户名密码进行机框刷新"
    },
    {
        "type": 'Enclosure.1.0.ConnectFailed',
        "Message": "机框连接异常",
        "NumberOfArgs": 0,
        "Resolution": "请确保机框各模块功能正常，并且机框管理IP可达，重新进行机框刷新"
    },
    {
        "type": "Upgrade.1.0.DeviceOffline",
        "Message": "设备处于非在线状态，不能升级",
        "NumberOfArgs": 0,
        "Resolution": "1、请检查设备在线状态；2、设备在线状态正常后重新下发升级任务。"
    },
    {
        "type": "Upgrade.1.0.SPVersionTooEarly",
        "Message": "当前SmartProvisioning版本{1}不满足最低版本要求，请先将SmartProvisioning升级到{2}。",
        "NumberOfArgs": 0,
        "Resolution": "请先升级Provisioning后重新提交请求"
    },
    {
        "type": 'FusionDirector.1.0.DevMgmtSNRepeat',
        "Message": "序列号重复",
        "NumberOfArgs": 0,
        "Resolution": "请确保被纳管设备的序列号的唯一性，重新提交请求"
    },
    {
        "type": "Upgrade.1.0.PackageLackXMLErr",
        "Message": "升级包格式不符合规范，缺少版本信息文件",
        "NumberOfArgs": 0,
        "Resolution": "请检查所上传的升级包是否正确"
    },
    {
        "type": "Upgrade.1.0.DecompressErr",
        "Message": "解压升级包失败",
        "NumberOfArgs": 0,
        "Resolution": "请检查所上传的升级包正确或者存储空间是否够用"
    },
    {
        "type": 'FusionDirector.1.0.BMCOperationFailed',
        "Message": "设备操作失败，可能原因：1、Smart Provisioning在运行中，2、虚拟USB被占用。",
        "NumberOfArgs": 0,
        "Resolution": "请根据处理建议检查后重新提交请求，处理建议：1、退出Smart Provisioning，2、断开虚拟USB。"
    },
    {
        "type":"Planning.1.0.ResourceURIInWrongFormat",
        "Message ":"资源URI格式错误",
        "NumberOfArgs": 0,
        "Resolution": "请修改资源路径后重新下发请求。"
    },
    {
        "type":"Planning.1.0.ResourceNotExist",
        "Message ":"资源不存在",
        "NumberOfArgs": 0,
        "Resolution": "请确认资源存在后重新下发请求。"
    },
    {
        "type":"Planning.1.0.InsufficientPrivilege",
        "Message ":"无权限对此资源进行操作，请检查操作用户权限",
        "NumberOfArgs": 0,
        "Resolution": "请检查操作用户权限和操作域，在提升权限或者扩大操作域后重试。"
    },
    /************************************升级********************************/
    {
        "type": "Upgrade.1.0.AllUpgradeFailErr",
        "Message": "所有升级失败。",
        "NumberOfArgs": 0,
        "Resolution": "请联系华为工程师。"
    },
    {
        "type": "Upgrade.1.0.OperateDBErr",
        "Message": "操作数据库失败。",
        "NumberOfArgs": 0,
        "Resolution": "请检查数据库连接。"
    },
    {
        "type": "Upgrade.1.0.UpgradeSuccessStep",
        "Message": "{1}升级：升级成功",
        "NumberOfArgs": 1
    },
    {
        "type": "Upgrade.1.0.UpgradingStep",
        "Message": "{1}升级：开始升级{2}, 版本：{3}->{4}",
        "NumberOfArgs": 4
    },
    {
        "type": "Upgrade.1.0.RequestParaErrStep",
        "Message": "{1}升级：组装升级参数失败",
        "NumberOfArgs": 0
    },
    {
        "type": "Upgrade.1.0.DeviceStatusErrStep",
        "Message": "{1}升级：获取设备参数错误",
        "NumberOfArgs": 1
    },
    {
        "type": "Upgrade.1.0.VersionEqualStep",
        "Message": "{1}升级：待升级固件的版本（{2}）与设备版本相同，不执行升级操作",
        "NumberOfArgs": 2
    },
    {
        "type": "Upgrade.1.0.NoActiveStep",
        "Message": "{1}升级：固件处于待生效状态",
        "NumberOfArgs": 1
    },
    {
        "type": "Upgrade.1.0.UpgradeRequestErrStep",
        "Message": "{1}升级：下发升级请求失败",
        "NumberOfArgs": 1
    },
    {
        "type": "Upgrade.1.0.UpgradeRequestSuccessStep",
        "Message": "{1}升级：下发升级请求成功",
        "NumberOfArgs": 1
    },
    {
        "type": "Upgrade.1.0.UpgradeTimeOutStep",
        "Message": "{1}升级：升级超时",
        "NumberOfArgs": 1
    },
    {
        "type": "Upgrade.1.0.DevicePowerOffStep",
        "Message": "{1}升级：主机操作系统处于下电状态，等待CPLD自动生效",
        "NumberOfArgs": 1
    },
    {
        "type": "Upgrade.1.0.SetBootFromSPStep",
        "Message": "{1}升级：设置主机操作系统从SP启动",
        "NumberOfArgs": 1
    },
    {
        "type": "Upgrade.1.0.StartActiveStep",
        "Message": "{1} 开始执行生效, 待生效固件{2}",
        "NumberOfArgs": 2
    },
    {
        "type": "Upgrade.1.0.UpdateStatusErrStep",
        "Message": "更新状态（{1}）失败",
        "NumberOfArgs": 1
    },
    {
        "type": "Upgrade.1.0.ActiveErrStep",
        "Message": "生效完成, 生效成功:{1}; 生效失败:{2}",
        "NumberOfArgs": 2
    },
    {
        "type": "Upgrade.1.0.OneFirmwareActiveSuccessStep",
        "Message": "{1}生效成功",
        "NumberOfArgs": 1
    },
    {
        "type": "Upgrade.1.0.ActiveRequestErrStep",
        "Message": "下发生效命令失败",
        "NumberOfArgs": 0
    },
    {
        "type": "Upgrade.1.0.ActiveRequestSuccessStep",
        "Message": "下发生效命令成功",
        "NumberOfArgs": 0
    },
    {
        "type": "Upgrade.1.0.UpgradeCompleteStep",
        "Message": "{1}升级：升级完成",
        "NumberOfArgs": 1
    },
    {
        "type": "Upgrade.1.0.UpgradeSendPowerOffComputerStep",
        "Message": "{1}：下发主机操作系统下电命令",
        "NumberOfArgs": 1
    },
    {
        "type": "Upgrade.1.0.UpgradePowerOffComputerStep",
        "Message": "{1}：主机操作系统已下电",
        "NumberOfArgs": 1
    },
    {
        "type": "Upgrade.1.0.UpgradePowerOffForceComputerStep",
        "Message": "{1}：主机操作系统超过{2}秒无法下电，采用强制下电成功",
        "NumberOfArgs": 2
    },
    {
        "type": "Upgrade.1.0.UpgradePowerOffErrStep",
        "Message": "{1}：主机操作系统下电失败",
        "NumberOfArgs": 1
    },
    {
        "type": "Upgrade.1.0.UpgradeSendPowerOnComputerStep",
        "Message": "{1}：已下发服务器上电命令",
        "NumberOfArgs": 1
    },
    {
        "type": "Upgrade.1.0.UpgradePowerOnComputerStep",
        "Message": "{1}：主机操作系统已上电",
        "NumberOfArgs": 1
    },
    {
        "type": "Upgrade.1.0.UpgradePowerOnComputerErrStep",
        "Message": "{1}：主机操作系统上电失败",
        "NumberOfArgs": 1
    },
    {
        "type": "Upgrade.1.0.UpgradeGetComputerPowerStatusErrStep",
        "Message": "{1}：获取主机操作系统上下电状态失败",
        "NumberOfArgs": 1
    },
    {
        "type": "Upgrade.1.0.UpgradeActiveAllByPowerOffAtLaterActiveStep",
        "Message": "检测主机操作系统处于下电状态且生效策略为稍后生效，所有升级的部件将会立即生效",
        "NumberOfArgs": 0
    },
    /************************************升级********************************/
    {
        "type": 'Enclosure.1.0.SetPermitPowerOnFailed',
        "Message": "设置刀片受控上电失败",
        "NumberOfArgs": 0,
        "Resolution": "请联系华为工程师定位"
    },
    {
        "type": 'Enclosure.1.0.SetFanSettingFailed',
        "Message": "配置风扇设置失败",
        "NumberOfArgs": 0,
        "Resolution": "请联系华为工程师定位"
    },
    {
        "type": 'Enclosure.1.0.SetPSUModeFinalFailed',
        "Message": "配置电源休眠模式失败",
        "NumberOfArgs": 0,
        "Resolution": "请联系华为工程师定位"
    },
    {
        "type": 'Enclosure.1.0.SetPSUModeRequirementHealthFailed',
        "Message": "配置电源休眠模式失败",
        "NumberOfArgs": 0,
        "Resolution": "电源模块存在告警，不可设置休眠模式"
    },
    {
        "type": 'Enclosure.1.0.SetPSUModeRequirementTotalCountFailed',
        "Message": "配置电源休眠模式失败",
        "NumberOfArgs": 0,
        "Resolution": "在位电源数未达到三个，不可设置休眠模式"
    },
    {
        "type": 'Enclosure.1.0.SetPSUModeRequirementLeftRightCountFailed',
        "Message": "配置电源休眠模式失败",
        "NumberOfArgs": 0,
        "Resolution": "左侧在位电源较于右侧在位电源不相等或不大于1，不可设置休眠模式"
    },
    {
        "type": 'Enclosure.1.0.SetPSUModeRequirementEvenFailed',
        "Message": "配置电源休眠模式失败",
        "NumberOfArgs": 0,
        "Resolution": "在位电源数不为偶数，不可设置休眠模式为N+N"
    },
    {
        "type": 'Enclosure.1.0.SetPowerCappingFinalFailed',
        "Message": "配置电源封顶功率失败",
        "NumberOfArgs": 0,
        "Resolution": "请联系华为工程师定位"
    },
    {
        "type": 'Enclosure.1.0.GetRestClientFailed',
        "Message": "获取RestClient失败",
        "NumberOfArgs": 0,
        "Resolution": "请联系华为工程师定位"
    },
    {
        "type": 'Planning.1.0.EncryptError',
        "Message": "规划模板加密失败",
        "NumberOfArgs": 0,
        "Resolution": "请确保服务正常，重新下发请求。"
    },
    {
        "type": 'Planning.1.0.MsgIDApplyResourceError',
        "Message": "规划模板申请IP或位置资源失败",
        "NumberOfArgs": 0,
        "Resolution": "请确保服务正常，重新下发请求。"
    },
    {
        "type": 'Planning.1.0.WriteDBError',
        "Message": "划模板数据库写入失败",
        "NumberOfArgs": 0,
        "Resolution": "请确保服务正常，重新下发请求。"
    },
    {
        "type": 'Planning.1.0.ModelCheckError',
        "Message": "规划模板核查模板失败",
        "NumberOfArgs": 0,
        "Resolution": "请确保服务正常，重新下发请求。"
    },
    {
        "type": 'Planning.1.0.UpdateDBError',
        "Message": "规划模板更新数据库失败",
        "NumberOfArgs": 0,
        "Resolution": "请确保服务正常，重新下发请求。"
    },
    {
        "type": 'Planning.1.0.WriteDHCPServerError',
        "Message": "规划模板写入DHCP服务失败",
        "NumberOfArgs": 0,
        "Resolution": "请确保服务正常，重新下发请求。"
    },
    {
        "type": 'Examine.1.0.BaselineFormatError',
        "Message": "服务器模型格式错误",
        "NumberOfArgs": 0,
        "Resolution": "请确保服务器模型填写正确，并重新提交请求。"
    },
    {
        "type": 'Examine.1.0.ServerPropertiesError',
        "Message": "服务器基本属性与模型不匹配",
        "NumberOfArgs": 0,
        "Resolution": "请确保服务器模型属性正确，并重新提交请求。"
    },
    {
        "type": 'Examine.1.0.GetServerModelFailed',
        "Message": "获取服务器模型失败",
        "NumberOfArgs": 0,
        "Resolution": "请确保服务器模型存在，并重新提交请求。"
    },
    {
        "type": 'FusionDirector.1.0.UMSIsExclusivelyUsed',
        "Message": "Smart Provisioning在运行中，当前操作无法进行。",
        "NumberOfArgs": 0,
        "Resolution": "请退出Smart Provisioning后重新提交请求。"
    },
    {
        "type": 'FusionDirector.1.0.SPIsBeingUpgraded',
        "Message": "Smart Provisioning正在执行升级任务，当前操作无法进行。",
        "NumberOfArgs": 0,
        "Resolution": "请结束Smart Provisioning当前执行的升级任务后重新提交请求。"
    },
    {
        "type": 'FusionDirector.1.0.DevMgmtModelTypeMiss',
        "Message": "无法识别服务器的型号",
        "NumberOfArgs": 0,
        "Resolution": "请联系华为维护工程师增加型号后重新纳管。"
    },{
        "type": 'Enclosure.1.0.NotEnoughLicense',
        "Message": "服务器容量超限,纳管刀片服务器失败。",
        "NumberOfArgs": 0,
        "Resolution": "请扩容许可证服务器容量。"
    },
    {
        "type": "Config.1.0.ChangePowerParamFailedErr",
        "Message": "数据转换失败。",
        "NumberOfArgs": 0,
        "Resolution": "请重新下发请求。"
    },
    {
        "type": "Config.1.0.ConfigEditionChangeErr",
        "Message": "{1}版本过低，导致配置{2}失败。",
        "NumberOfArgs": 2,
        "Resolution": "请在Support网站上下载最新版本，升级版本后重新下发配置"
    },
    {
        "type": "Config.1.0.ConfigDNSModeErr",
        "Message": "配置DNS服务器信息获取模式失败，因为BMC的{1}模式是静态的。",
        "NumberOfArgs": 1,
        "Resolution": "请将BMC的ip模式改为DHCP模式或将DNS服务器信息获取模式改为手动后，重新下发配置任务。"
    },
    {
        "type": "Config.1.0.ConfigNTPModeErr",
        "Message": "配置NTP模式失败，因为BMC的{1}模式是静态的。",
        "NumberOfArgs": 1,
        "Resolution": "请将BMC的ip模式改为DHCP模式或将NTP模式改为手动后，重新下发配置任务。"
    },
    {
        "type": "Config.1.0.ConfigResourceNotEnough",
        "Message": "{1}池资源数不够，导致配置{2}失败。",
        "NumberOfArgs": 2,
        "Resolution": "请检查地址池中的资源数，并保证数量充足后重新下发配置任务。"
    },
    {
        "type": "Config.1.0.ConfigResourceMissing",
        "Message": "刀片服务器配置{1}失败，因为未绑定{2}池。",
        "NumberOfArgs": 2,
        "Resolution": "请在机框处绑定该资源池后，重新下发请求。"
    },
    {
        "type": "Config.1.0.ConfigMZ220MZ221FailedErr",
        "Message": "配置MZ220或者MZ221失败。",
        "NumberOfArgs": 0,
        "Resolution": "请重新下发配置。"
    },
    {
        "type": "Config.1.0.ConfigNetWorkErr",
        "Message": "清除网卡唯一性配置失败。",
        "NumberOfArgs": 0,
        "Resolution": "请重新下发配置。"
    },
    {
        "type": "Config.1.0.ConfigPowerFailedErr",
        "Message": "配置电源模式失败。",
        "NumberOfArgs": 0,
        "Resolution": "请重新下发配置。"
    },
    {
        "type": "Config.1.0.CheckPowerEnableConfigFailedErr",
        "Message": "获取配置参数失败。",
        "NumberOfArgs": 0,
        "Resolution": "请检查网络和设备后重新下发请求。"
    },
    {
        "type": "Config.1.0.CheckPowerCountFailedErr",
        "Message": "电源个数异常。",
        "NumberOfArgs": 0,
        "Resolution": "请确保设备上有两个电源模块后再重新下发配置。"
    },
    {
        "type": "Config.1.0.PowerStateCheckErr",
        "Message": "电源状态非正常。",
        "NumberOfArgs": 0,
        "Resolution": "请确保电源在位并已接电源线后再重新下发配置。"
    },
    {
        "type": "Config.1.0.PowerVoltageNotSupport",
        "Message": "主备电源电压不符合要求。",
        "NumberOfArgs": 0,
        "Resolution": "请确保备电源电压至少高于主电源电压5V。"
    },
    {
        "type": 'FusionDirector.1.0.DevMgmtRedfishResourceMiss',
        "Message": "缺失必要的redfish资源",
        "NumberOfArgs": 0,
        "Resolution": "请确保当前设备的redfish中存在/redfish/v1/Systems、/redfish/v1/Managers、/redfish/v1/Chassis资源，否则该设备不是有效的可纳管的设备。"
    },
    {
        "type": 'FusionDirector.1.0.DevMgmtCategoryError',
        "Message": "选择的设备类型与实际的设备类型不一致",
        "NumberOfArgs": 0,
        "Resolution": "请先删除该设备，然后选择正确的设备类型后再重新提交请求。"
    },
    {
        "type": "Config.1.0.ConfigNetWorkErr",
        "Message": "清除网卡唯一性配置失败。",
        "NumberOfArgs": 0,
        "Resolution": "请重新下发配置。"
    },
    {
        "type": "Config.1.0.ConfigMZ220MZ221FailedErr",
        "Message": "配置MZ220或者MZ221失败。",
        "NumberOfArgs": 0,
        "Resolution": "请重新下发配置。"
    },
    {
        "type": "Config.1.0.ConfigResourceMissing",
        "Message": "刀片服务器配置{1}失败，因为未绑定{2}池。",
        "NumberOfArgs": 2,
        "Resolution": "请在机框处绑定该资源池后，重新下发请求。"
    },
    {
        "type": "Config.1.0.ConfigResourceErr",
        "Message": "{1}池资源数不够，导致配置{2}失败。",
        "NumberOfArgs": 2,
        "Resolution": "请检查地址池中的资源数，并保证数量充足后重新下发配置任务。"
    },
    {
        "type": "Config.1.0.ConfigNTPModeErr",
        "Message": "配置NTP模式失败，因为BMC的{1}模式是静态的。",
        "NumberOfArgs": 1,
        "Resolution": "请将BMC的ip模式改为DHCP模式或将NTP模式改为手动后，重新下发配置任务。"
    },
    {
        "type": "Config.1.0.ConfigDNSModeErr",
        "Message": "配置DNS服务器信息获取模式失败，因为BMC的{1}模式是静态的。",
        "NumberOfArgs": 1,
        "Resolution": "请将BMC的ip模式改为DHCP模式或将DNS服务器信息获取模式改为手动后，重新下发配置任务。"
    },
    {
        "type": "Device.1.0.SettingSnmpService",
        "Message": "设备正在修改SNMP配置",
        "NumberOfArgs": 0,
        "Resolution": "请等待当前设备上操作完成后重试"
    },
    {
        "type": "Device.1.0.SettingAccountService",
        "Message": "正在配置设备用户服务信息",
        "NumberOfArgs": 0,
        "Resolution": "请等待当前设备上操作完成后重试"
    },
    {
        "type": "Device.1.0.SettingDiagnosticService",
        "Message": "设备正在修改诊断服务配置",
        "NumberOfArgs": 0,
        "Resolution": "请等待当前设备上操作完成后重试"
    },
    {
        "type": "Device.1.0.SettingThermal",
        "Message": "正在修改设备风扇配置",
        "NumberOfArgs": 0,
        "Resolution": "请等待当前设备上操作完成后重试"
    },

    {
        "type": 'FusionDirector.1.0.IRMAuthorizationFailed',
        "Message": "鉴权失败，用户名({1})或密码错误",
        "NumberOfArgs": 1,
        "Resolution": "请确保用户名密码正确,并尝试重新纳管"
    },
    {
        "type": 'FusionDirector.1.0.IRMIpv4Repeat',
        "Message": "IP为{1}的机柜已被纳管,请不要重复纳管",
        "NumberOfArgs": 1,
        "Resolution": "--"
    },
    {
        "type": 'FusionDirector.1.0.IRMSerialNumberRepeat',
        "Message": "与已纳管的iRM序列号({1})重复",
        "NumberOfArgs": 1,
        "Resolution": "请确保纳管iRM的序列号唯一性，重新提交请求"
    },
    {
        "type": 'FusionDirector.1.0.IRMSerialNumberMiss',
        "Message": "请求纳管的iRM序列号缺失",
        "NumberOfArgs": 0,
        "Resolution": "请确保纳管iRM的序列号存在且唯一，重新提交请求"
    },
    {
        "type": 'FusionDirector.1.0.IRMSubscriptionFailed',
        "Message": "iRM事件订阅失败",
        "NumberOfArgs": 0,
        "Resolution": "请检查iRM事件订阅数量是否已满,删除无效订阅后再重新纳管"
    },
    {
        "type": 'FusionDirector.1.0.IRMCouldNotConnectToIrm',
        "Message": "与iRM通信失败",
        "NumberOfArgs": 3,
        "Resolution": "请确认iRM的IP({1})是否可达,以及协议({2})和端口号({3})是否正确"
    },
    {
        "type": 'FusionDirector.1.0.DCMgmtDateCenterError',
        "Message": "数据中心校验失败，数据中心({1})错误",
        "NumberOfArgs": 1,
        "Resolution": "请选择正确的数据中心，再重新提交请求"
    },
    {
        "type": 'FusionDirector.1.0.DCMgmtNotSupport',
        "Message": "暂不支持该类别机柜添加",
        "NumberOfArgs": 0,
        "Resolution": "该设备类型不支持纳管，请确保机柜类别正确."
    },
    {
        "type": 'FusionDirector.1.0.DCMgmtRackManagedByOtherFD',
        "Message": "该机柜已被其他FusionDirector系统管理",
        "NumberOfArgs": 0,
        "Resolution": "为避免冲突，机柜只能被一个FusionDirector系统管理"
    },
    {
        "type": "Device.1.0.ChangeServerIPv4",
        "Message": "正在修改设备的IP",
        "NumberOfArgs": 0,
        "Resolution": "请等待当前设备上操作完成后重试"
    },
    {
        "type": "Device.1.0.ServerRefresh",
        "Message": "正在刷新设备",
        "NumberOfArgs": 0,
        "Resolution": "请等待当前设备上操作完成后重试"
    },
    {
        "type": "Device.1.0.PatchAccountInfo",
        "Message": "正在修改设备的账号信息",
        "NumberOfArgs": 0,
        "Resolution": "请等待当前设备上操作完成后重试"
    },
    {
        "type": "Device.1.0.InstallLicense",
        "Message": "正在安装设备的许可证",
        "NumberOfArgs": 0,
        "Resolution": "请等待当前设备上操作完成后重试"
    },
    {
        "type": "FusionDirector.1.0.DevMgmtUUIDRepeat",
        "Message": "新纳管设备的UUID与已纳管设备的UUID重复",
        "NumberOfArgs": 0,
        "Resolution": "请检查该设备是否已经被纳管"
    },
    {
        "type": 'iBMC.1.0.PasswordNotSatisfyComplexity',
        "Message": "密码的复杂度不符合设备侧密码复杂度规则",
        "NumberOfArgs": 0,
        "Resolution": "请基于设备侧密码复杂度规则更换密码，然后重新提交请求"
    },
    {
        "type": "Config.1.0.InBandOffConfigRaidErr",
        "Message": "服务器电源状态为下电，配置虚拟磁盘失败。",
        "NumberOfArgs": 0,
        "Resolution": "上电服务器电源后重试。"
    },
    {
        "type": "Config.1.0.ConfigRaidStateErr",
        "Message": "硬盘{1}健康状态错误导致配置虚拟磁盘失败",
        "NumberOfArgs": 1,
        "Resolution": "检查硬盘状态，确保硬盘状态正常后重试。"
    },
    {
        "type": "Config.1.0.ConfigRaidDiskIsCreated",
        "Message": "硬盘{1}已经被用于虚拟磁盘中，无法创建新虚拟磁盘。",
        "NumberOfArgs": 1,
        "Resolution": "删除该硬盘所在虚拟磁盘后重试。"
    },
    {
        "type": "Config.1.0.ConfigRaidFirmwareErr",
        "Message": "硬盘{1}固件状态不支持配置虚拟磁盘。",
        "NumberOfArgs": 2,
        "Resolution": "手动修复硬盘，保证硬盘正常后重试。"
    },
    {
        "type": "Config.1.0.ConfigRaidDiskNotExist",
        "Message": "硬盘{1}不存在。",
        "NumberOfArgs": 1,
        "Resolution": "选择存在的硬盘后重试。"
    },
    {
        "type": "Config.1.0.ConfigRaidMediaTypeNotSame",
        "Message": "硬盘{1}和硬盘{2}介质类型不一致。",
        "NumberOfArgs": 2,
        "Resolution": "查看硬盘详情确保选择相同介质类型硬盘后重试。"
    },
    {
        "type": 'Upgrade.1.0.EnvCheckVersionFailed',
        "Message": "升级环境检测失败",
        "NumberOfArgs": 0,
        "Resolution": "不支持从当前版本升级到目标版本"

    },
    {
        "type": 'Upgrade.1.0.EnvCheckDiskSpaceFailed',
        "Message": "升级环境检测失败",
        "NumberOfArgs": 0,
        "Resolution": "确保系统盘空间充足后，再进行升级操作"

    },
    {
        "type": 'Enclosure.1.0.DeviceSNMiss',
        "Message": "设备缺失SN值",
        "NumberOfArgs": 0,
        "Resolution": "请检查该设备的SN是否有值。"
    },
    {
        "type": 'Enclosure.1.0.DevicePowerOff',
        "Message": "设备未上电导致获取序列号失败",
        "NumberOfArgs": 0,
        "Resolution": "请上电设备后重试操作"
    },
    {
        "type": 'Enclosure.1.0.MMCommandTimeout',
        "Message": "MM和设备通信超时",
        "NumberOfArgs": 0,
        "Resolution": "请检查MM和设备BMC通信状态后重试操作"
    },
    {
        "type": "Enclosure.1.0.ValueOverrun",
        "Message": "{2} 的值 {1} 超出可设置的范围",
        "NumberOfArgs": 2,
        "Resolution": "请修改当前单板的功率封顶值并重新提交请求"
    },
    {
        "type": "Enclosure.1.0.ServiceRestart",
        "Message": "服务异常中断.",
        "NumberOfArgs": 0,
        "Resolution": "请重新提交请求."
    },
    {
        "type": "Upgrade.1.0.TheFileAlreadyExists",
        "Message": "文件已存在。",
        "NumberOfArgs": 0,
        "Resolution": "请确认文件是否已存在。"
    },
    {
        "type": "FusionDirector.1.0.DevMgmtCertUntrusted",
        "Message": "使用了不受信任的设备根证书",
        "NumberOfArgs": 0,
        "Resolution": "请确认是否配置受信任的根证书。"
    },
    {
        "type": "FusionDirector.1.0.DevMgmtCertNotFound",
        "Message": "未找到当前设备的根证书",
        "NumberOfArgs": 0,
        "Resolution": "请确认是否配置受信任的根证书。"
    },
    {
        "type": "Device.1.0.ServerRelease",
        "Message": "设备正在下线",
        "NumberOfArgs": 0,
        "Resolution": "请等待当前设备上的操作完成"
    },
    {
        "type": "FusionDirector.1.0.CertUntrusted",
        "Message": "使用了不受信任的设备根证书",
        "NumberOfArgs": 0,
        "Resolution": "请确认是否配置受信任的根证书。"
    },
    {
        "type": "FusionDirector.1.0.CertNotFound",
        "Message": "未找到当前设备的根证书",
        "NumberOfArgs": 0,
        "Resolution": "请确认是否配置受信任的根证书。"
    },
    {
        "type": "Upgrade.1.0.GetPrivilegeErr",
        "Message": "获取权限失败。",
        "NumberOfArgs": 0,
        "Resolution": "请检查用户的权限是否满足。"
    },
    {
        "type": "Upgrade.1.0.UpgradeGetComputerPowerStatusErr",
        "Message": "获取主机操作系统上下电状态失败。",
        "NumberOfArgs": 0,
        "Resolution": "1、请检查设备管理状态；2、设备状态正常后重新下发升级任务。"
    },
    {
        "type": "Upgrade.1.0.UpgradePowerOnComputerErr",
        "Message": "主机操作系统上电失败。",
        "NumberOfArgs": 0,
        "Resolution": "1、请检查设备管理状态；2、设备状态正常后重新下发升级任务。"
    },
    {
        "type": "Upgrade.1.0.KeepPowerStatusFailErr",
        "Message": "保持升级前后主机操作系统上下电状态一致失败。",
        "NumberOfArgs": 0,
        "Resolution": "请确认主机操作系统电源状态是否符合要求，如果不符合，请在服务器页面进行处理。"
    },
    {
        "type": "Upgrade.1.0.UpgradeResultFailErr",
        "Message": "升级失败。",
        "NumberOfArgs": 0,
        "Resolution": "请查看升级任务过程失败信息。"
    },
    {
        "type": "Upgrade.1.0.ActiveErrResolutionStep",
        "Message": "{1} 生效失败：最终从设备获取版本失败，请排查设备上的版本是否已更新，如果未更新，请重新升级；如果更新，请忽略。",
        "NumberOfArgs": 1
    },
    {
        "type": "Upgrade.1.0.DoUpgradeFailedErrStep",
        "Message": "{1}升级：发生内部错误。",
        "NumberOfArgs": 1
    },
    {
        "type": "Upgrade.1.0.BMCMsgResourceMissingAtURIStep",
        "Message": "{1}升级：BMC升级任务获取失败，请重试。",
        "NumberOfArgs": 1
    },
    {
        "type": "Upgrade.1.0.BMCMsgErrorStep",
        "Message": "{1}升级：BMC返回错误信息：{2}。",
        "NumberOfArgs": 2
    },
    {
        "type": "Upgrade.1.0.VersionNotEqualStep",
        "Message": "{1}升级：固件立即生效，版本生效失败。",
        "NumberOfArgs": 1
    },
    {
        "type": "Upgrade.1.0.BMCMsgUMSIsExclusivelyUsedStep",
        "Message": "{1}升级：请检查系统是否在SmartProvisioning阶段，稍后重试。",
        "NumberOfArgs": 1
    },
    {
        "type": "Upgrade.1.0.BMCMsgOperationFailedStep",
        "Message": "{1}升级：请检查系统是否在SmartProvisioning阶段，稍后重试。",
        "NumberOfArgs": 1
    },
    {
        "type": "Upgrade.1.0.BMCMsgFirmwareUpgradingStep",
        "Message": "{1}升级：BMC检测到其他固件正在升级，等待升级结束后重新下发升级任务。",
        "NumberOfArgs": 1
    },
    {
        "type": "Upgrade.1.0.BMCMsgFileDownloadTaskOccupiedStep",
        "Message": "{1}升级：BMC检测到其他文件正在传输，等待传输结束后重新下发升级任务。",
        "NumberOfArgs": 1
    },
    {
        "type": 'AppDeployMgmt.1.0.DoHttpRequestFailed',
        "Message": "处理HTTP请求失败",
        "NumberOfArgs": 0,
        "Resolution": "请确保参数正确，重新提交请求。"
    },
    {
        "type": 'AppDeployMgmt.1.0.OperationDBFailed',
        "Message": "数据库事务处理失败",
        "NumberOfArgs": 0,
        "Resolution": "请确保数据库连接正常，重新提交请求。"
    },
    {
        "type": 'AppDeployMgmt.1.0.DeleteVersionInRegistryFailed',
        "Message": "在镜像仓库中删除镜像失败",
        "NumberOfArgs": 0,
        "Resolution": "请确保镜像仓库运行正常且VersionId正确，重新提交请求。"
    },
    {
        "type": 'AppDeployMgmt.1.0.DeleteImageVersionInDBFailed',
        "Message": "在数据库中删除镜像版本信息失败",
        "NumberOfArgs": 0,
        "Resolution": "请确保数据库连接正常且VersionId正确，重新提交请求。"
    },
    {
        "type": 'AppDeployMgmt.1.0.DeleteImageFileInDBFailed',
        "Message": "在数据库中删除镜像文件信息失败",
        "NumberOfArgs": 0,
        "Resolution": "请确保数据库连接正常且FileId正确，重新提交请求。"

    },
    {
        "type": 'AppDeployMgmt.1.0.UpdateDockerImageVersionCountFailed',
        "Message": "更新镜像文件中版本数量失败",
        "NumberOfArgs": 0,
        "Resolution": "请确保数据库连接正常且FileId正确，重新提交请求。"
    },
    {
        "type": 'AppDeployMgmt.1.0.GetCountWithDigestFailed',
        "Message": "获取具有相同Digest信息的版本个数失败",
        "NumberOfArgs": 0,
        "Resolution": "请确保数据库连接正常且FileId正确，重新提交请求。"
    },
    {
        "type": 'AppDeployMgmt.1.0.GetImageNameByFileIdFailed',
        "Message": "根据FileId镜像版本名字失败",
        "NumberOfArgs": 0,
        "Resolution": "请确保数据库连接正常且FileId正确，重新提交请求。"
    },
    {
        "type": 'AppDeployMgmt.1.0.CreateImageError',
        "Message": "创建镜像失败",
        "NumberOfArgs": 0,
        "Resolution": "请确保请求正确，重新提交请求。"
    },
    {
        "type": 'AppDeployMgmt.1.0.LoadImageError',
        "Message": "加载镜像失败",
        "NumberOfArgs": 0,
        "Resolution": "请确保镜像正确，重新提交请求。"
    },
    {
        "type": 'AppDeployMgmt.1.0.TagImageError',
        "Message": "镜像打标签失败",
        "NumberOfArgs": 0,
        "Resolution": "请确保镜像标签正确，重新提交请求。"

    },
    {
        "type": 'AppDeployMgmt.1.0.PushImageError',
        "Message": "上传镜像失败",
        "NumberOfArgs": 0,
        "Resolution": "请确保镜像正确，重新提交请求。"
    },
    {
        "type": 'AppDeployMgmt.1.0.RemoveImageError',
        "Message": "移除镜像失败",
        "NumberOfArgs": 0,
        "Resolution": "请确保镜像正确，重新提交请求。"
    },
    {
        "type": 'AppDeployMgmt.1.0.FilePathIllegal',
        "Message": "文件路径非法",
        "NumberOfArgs": 0,
        "Resolution": "请确保文件路径正确，重新提交请求。"
    },
    {
        "type": 'AppDeployMgmt.1.0.ImageFileNameFormatIllegal',
        "Message": "上传的镜像文件名字格式不正确",
        "NumberOfArgs": 0,
        "Resolution": "请确保上传的镜像文件名字格式正确，重新提交请求。"
    },
    {
        "type": 'AppDeployMgmt.1.0.GetImageFileFailed',
        "Message": "获取文件信息失败",
        "NumberOfArgs": 0,
        "Resolution": "请确保fileId正确，重新提交请求。"

    },
    {
        "type": 'AppDeployMgmt.1.0.ImageFileFormatIllegal',
        "Message": "上传的镜像文件类型不正确",
        "NumberOfArgs": 0,
        "Resolution": "请确保上传的镜像文件为tar或者tar.gz类型，重新提交请求。"
    },
    {
        "type": 'AppDeployMgmt.1.0.VersionCountMoreThanTheLargest',
        "Message": "文件中镜像数量超过32个",
        "NumberOfArgs": 0,
        "Resolution": "如需上传，请先删除已有镜像，重新提交请求。"
    },
    {
        "type": 'AppDeployMgmt.1.0.GetDockerImageFileSizeFailed',
        "Message": "获取上传镜像文件大小失败",
        "NumberOfArgs": 0,
        "Resolution": "请确保文件路径正确，重新提交请求。"
    },
    {
        "type": 'AppDeployMgmt.1.0.VersionSizeMoreThanTheLargest',
        "Message": "上传镜像文件太大",
        "NumberOfArgs": 0,
        "Resolution": "请确保上传镜像文件大小不超过4G，重新提交请求。"
    },
    {
        "type": 'AppDeployMgmt.1.0.InsufficientDiskSpace',
        "Message": "磁盘空间不足",
        "NumberOfArgs": 0,
        "Resolution": "如需上传，请先删除已有镜像，重新提交请求。"
    },
    {
        "type": 'AppDeployMgmt.1.0.TagAlreadyExist',
        "Message": "子版本号已存在",
        "NumberOfArgs": 0,
        "Resolution": "如需上传，请修改子版本号，重新提交请求。"
    },
    {
        "type": "Upgrade.1.0.UpgradeSPAtLaterActiveStep",
        "Message": "检测到升级固件中包含SmartProvisioning，所有升级的部件将会立即生效",
        "NumberOfArgs": 0
    },
    {
        "type": "Upgrade.1.0.UpgradeDependentStep",
        "Message": "{1} 升级失败，依赖该固件的 {2} 不会执行升级操作",
        "NumberOfArgs": 2
    },
    {
        "type": "DevMgmt.1.0.ServerNotSupportResetBIOS",
        "Message": "设备不支持重置BIOS",
        "NumberOfArgs": 0,
        "Resolution": "请确保设备支持重置BIOS操作，重新提交请求。"
    },
    {
        "type": 'Cluster.1.0.RestartOperation',
        "Message": "系统环境异常",
        "NumberOfArgs": 0,
        "Resolution": "请检查系统环境是否正常"

    },
    {
        "type": 'FusionDirector.1.0.RackLocationInvalid',
        "Message": "机柜位置无效",
        "NumberOfArgs": 0,
        "Resolution": "请确保机柜位置为数字，重新提交请求"
    },
    {
        "type": 'FusionDirector.1.0.RackLocationConflict',
        "Message": "机柜位置冲突",
        "NumberOfArgs": 0,
        "Resolution": "请确保同一数据中心下的机柜位置不重复，并重新提交请求"
    },{
        "type": "Config.1.0.ConfigDeviceStatusErr",
        "Message": "设备{1}不在线。",
        "NumberOfArgs": 1,
        "Resolution": "请重新纳管此设备，或选择在线的设备进行下发操作。"
    },


    {
        "type": "Upgrade.1.0.DecompressPackageForXMLErr",
        "Message": "解压升级包中的版本信息失败。",
        "NumberOfArgs": 0,
        "Resolution": "请检查升级包格式是否符合规范及升级包仓库容量是否足够。"
    },
    {
        "type": "Upgrade.1.0.PackageXMLEFilesTotalErr",
        "Message": "升级包格式不符合规范，版本信息文件数目异常。",
        "NumberOfArgs": 0,
        "Resolution": "请检查升级包中有且只有一个后缀为.xml的文件。"
    },
    {
        "type": "Upgrade.1.0.PackageParseXMLErr",
        "Message": "升级包格式不符合规范，解析版本信息文件失败。",
        "NumberOfArgs": 0,
        "Resolution": "请检查升级包中的版本信息文件是否正确。"
    },
    {
        "type": "Upgrade.1.0.PackageDuplicateSaveErr",
        "Message": "升级包信息已经存在。",
        "NumberOfArgs": 0,
        "Resolution": "请确认升级包是否重复存储升级包。"
    },
    {
        "type": "Upgrade.1.0.CheckImportPackageFileErr",
        "Message": "升级包存储前检查失败。",
        "NumberOfArgs": 0,
        "Resolution": "请确认升级包路径是否为空或者已有升级包存在。"
    },
    {
        "type": "Upgrade.1.0.SavePackageInfoInDBErr",
        "Message": "存储升级包信息到数据库失败。",
        "NumberOfArgs": 0,
        "Resolution": "请重试，如果仍然失败，请联系华为工程师解决。"
    },
    {
        "type": "Upgrade.1.0.MovePackageToDirErr",
        "Message": "升级包存储失败。",
        "NumberOfArgs": 0,
        "Resolution": "请检查升级包仓库容量和权限是否足够。"
    },
    {
        "type": "Upgrade.1.0.MoveDriverAscToDirErr",
        "Message": "驱动升级包中签名文件存储失败。",
        "NumberOfArgs": 0,
        "Resolution": "请检查驱动升级包中是否包含签名文件或者仓库容量和权限是否足够。"
    },
    {
        "type": "Upgrade.1.0.StorageSpaceFull",
        "Message": "升级包仓库存储空间不足。",
        "NumberOfArgs": 0,
        "Resolution": "请清理版本太旧且未在使用的升级包。"
    },
    {
        "type": "Upgrade.1.0.DetBundleLevelErr",
        "Message": "读取升级包目录信息失败。",
        "NumberOfArgs": 0,
        "Resolution": "请确认升级包目录路径和读取权限是否正确。"
    },
    {
        "type": "Upgrade.1.0.RemoveTempFileErr",
        "Message": "删除临时文件失败。",
        "NumberOfArgs": 0,
        "Resolution": "请确认待删除目录路径和权限是否正确。"
    },
    {
        "type": "Upgrade.1.0.UnknowImportFileErr",
        "Message": "升级包存储到升级包仓库发生未知错误。",
        "NumberOfArgs": 0,
        "Resolution": "请重试，如不能解决，请联系华为工程师解决。"
    },
    {
        "type": "Upgrade.1.0.UnknowDownloadFileErr",
        "Message": "下载升级包到升级包仓库发生未知错误。",
        "NumberOfArgs": 0,
        "Resolution": "请重试，如不能解决，请联系华为工程师解决。"
    },
    {
        "type": "Upgrade.1.0.UnknowImportFileTypeErr",
        "Message": "不支持该类型升级包。",
        "NumberOfArgs": 0,
        "Resolution": "请检查该升级包是否正确。"
    },
    {
        "type": "Upgrade.1.0.CreateFileDirErr",
        "Message": "创建升级包目录失败。",
        "NumberOfArgs": 0,
        "Resolution": "请检查目录权限是否正确。"
    },
    {
        "type": "Upgrade.1.0.DownloadFileErr",
        "Message": "下载升级包文件失败。",
        "NumberOfArgs": 0,
        "Resolution": "请检查网络和下载地址是否正确。"
    },
    {
        "type": "Upgrade.1.0.DownloadAscFileErr",
        "Message": "下载签名文件失败。",
        "NumberOfArgs": 0,
        "Resolution": "请检查网络和下载地址是否正确。"
    },
    {
        "type": "Upgrade.1.0.WaitDownload",
        "Message": "等待下载。",
        "NumberOfArgs": 0,
        "Resolution": "请等待。"
    },
    {
        "type": "Upgrade.1.0.ReachMaxCap",
        "Message": "空间容量即将达到上限。",
        "NumberOfArgs": 0,
        "Resolution": "请清理升级包。"
    },
    {
        "type": "Upgrade.1.0.DownloadFilePathNullErr",
        "Message": "下载包路径为空。",
        "NumberOfArgs": 0,
        "Resolution": "请确认下载路径是否正确。"
    },
    {
        "type": "Upgrade.1.0.DownloadURLNullErr",
        "Message": "在线下载地址为空。",
        "NumberOfArgs": 0,
        "Resolution": "请在固件包管理页面，重新配置的下载路径。"
    },
    {
        "type": "Upgrade.1.0.DownloadAscFilePathNullErr",
        "Message": "签名文件路径为空。",
        "NumberOfArgs": 0,
        "Resolution": "请确认校验文件路径是否正确。"
    },
    {
        "type": "Upgrade.1.0.DownloadAscFileErr",
        "Message": "下载签名文件失败。",
        "NumberOfArgs": 0,
        "Resolution": "请检查网络和下载地址是否正确。"
    },
    {
        "type": "Upgrade.1.0.DownloadImportErr",
        "Message": "下载文件导入失败。",
        "NumberOfArgs": 0,
        "Resolution": "请确认下载包是否正确。"
    }   
    ]

}
var messageEN = {
    "Id": "Base.1.0.",
    "Language": "en",
    "Messages": [{
        "type": "Upgrade.1.0.DownloadAscFileErr",
        "Message": "Failed to download the signature file.",
        "NumberOfArgs": 0,
        "Resolution": "Check whether the network and download address are correct."
    },
    {
        "type": "Upgrade.1.0.DecompressPackageForXMLErr",
        "Message": "Failed to decompress the version information in the upgrade package.",
        "NumberOfArgs": 0,
        "Resolution": "Check whether the upgrade package format complies with the specifications and whether the capacity of the upgrade package repository is sufficient."
    },
    {
        "type": "Upgrade.1.0.PackageXMLEFilesTotalErr",
        "Message": "The format of the upgrade package is incorrect, and the number of version information files is incorrect.",
        "NumberOfArgs": 0,
        "Resolution": "Verify that only one .xml file exists in the upgrade package."
    },
    {
        "type": "Upgrade.1.0.PackageParseXMLErr",
        "Message": "Failed to parse the version information file because the format of the upgrade package does not meet the requirements.",
        "NumberOfArgs": 0,
        "Resolution": "Check whether the version information file in the upgrade package is correct."
    },
    {
        "type": "Upgrade.1.0.PackageDuplicateSaveErr",
        "Message": "The upgrade package information already exists.",
        "NumberOfArgs": 0,
        "Resolution": "Check whether the upgrade package is repeatedly stored in the upgrade package."
    },
    {
        "type": "Upgrade.1.0.CheckImportPackageFileErr",
        "Message": "Failed to check the upgrade package before storage.",
        "NumberOfArgs": 0,
        "Resolution": "Check whether the upgrade package path is empty or whether an existing upgrade package exists."
    },
    {
        "type": "Upgrade.1.0.SavePackageInfoInDBErr",
        "Message": "Failed to save the upgrade package information to the database.",
        "NumberOfArgs": 0,
        "Resolution": "Try again. If the fault persists, contact Huawei technical support."
    },
    {
        "type": "Upgrade.1.0.MovePackageToDirErr",
        "Message": "Failed to save the upgrade package.",
        "NumberOfArgs": 0,
        "Resolution": "Check whether the capacity and permission of the upgrade package repository are sufficient."
    },
    {
        "type": "Upgrade.1.0.MoveDriverAscToDirErr",
        "Message": "Failed to save the signature file in the driver upgrade package.",
        "NumberOfArgs": 0,
        "Resolution": "Check whether the driver upgrade package contains the signature file or whether the repository capacity and permission are sufficient."
    },
    {
        "type": "Upgrade.1.0.StorageSpaceFull",
        "Message": "The storage space of the upgrade package repository is insufficient.",
        "NumberOfArgs": 0,
        "Resolution": "Delete the upgrade packages that are outdated and are not in use."
    },
    {
        "type": "Upgrade.1.0.DetBundleLevelErr",
        "Message": "Failed to read the upgrade package directory information.",
        "NumberOfArgs": 0,
        "Resolution": "Check whether the directory and read permission of the upgrade package are correct."
    },
    {
        "type": "Upgrade.1.0.RemoveTempFileErr",
        "Message": "Failed to delete the temporary file.",
        "NumberOfArgs": 0,
        "Resolution": "Check whether the path and permission of the directory to be deleted are correct."
    },
    {
        "type": "Upgrade.1.0.UnknowImportFileErr",
        "Message": "An unknown error occurs when the upgrade package is stored in the upgrade package repository.",
        "NumberOfArgs": 0,
        "Resolution": "Try again. If the fault persists, contact Huawei engineers."
    },
    {
        "type": "Upgrade.1.0.UnknowDownloadFileErr",
        "Message": "An unknown error occurred when downloading the upgrade package to the upgrade package repository.",
        "NumberOfArgs": 0,
        "Resolution": "Try again. If the fault persists, contact Huawei engineers."
    },
    {
        "type": "Upgrade.1.0.UnknowImportFileTypeErr",
        "Message": "The upgrade package of this type is not supported.",
        "NumberOfArgs": 0,
        "Resolution": "Check whether the upgrade package is correct."
    },
    {
        "type": "Upgrade.1.0.CreateFileDirErr",
        "Message": "Failed to create the upgrade package directory.",
        "NumberOfArgs": 0,
        "Resolution": "Check whether the directory permission is correct."
    },
    {
        "type": "Upgrade.1.0.DownloadFileErr",
        "Message": "Failed to download the upgrade package file.",
        "NumberOfArgs": 0,
        "Resolution": "Check whether the network and download address are correct."
    },
    {
        "type": "Config.1.0.ConfigDeviceStatusErr",
        "Message": "Device {1} is offline.",
        "NumberOfArgs": 1,
        "Resolution": "Manage the device again or select an online device to deliver the device."
    },
    {
        "type": 'FusionDirector.1.0.RackLocationInvalid',
        "Message": "The cabinet position is invalid.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the cabinet position is a number and submit the request again."
    },
    {
        "type": 'FusionDirector.1.0.RackLocationConflict',
        "Message": "The cabinet position conflicts.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the positions of cabinets in the same data center are unique and submit the request again."
    },
    {
        "type": 'Cluster.1.0.RestartOperation',
        "Message": "The system environment is abnormal.",
        "NumberOfArgs": 0,
        "Resolution": "Check whether the system environment is normal."

    },
    {
        "type": "DevMgmt.1.0.ServerNotSupportResetBIOS",
        "Message": "The device does not support resetting the BIOS.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the device supports resetting the BIOS and submit the request again."
    },
    {
        "type": "Upgrade.1.0.UpgradeDependentStep",
        "Message": "The {1} upgrade fails. The{2}that depends on the firmware does not perform the upgrade.",
        "NumberOfArgs": 2
    },
    {
        "type": "Upgrade.1.0.UpgradeSPAtLaterActiveStep",
        "Message": "{1} update: Check whether the system is in the Smart Provisioning phase, and try again later.",
        "NumberOfArgs": 0
    },
    {
        "type": "Upgrade.1.0.GetPrivilegeErr",
        "Message": "Failed to obtain permissions.",
        "NumberOfArgs": 0,
        "Resolution": "Check whether the user permission is sufficient."
    },
    {
        "type": "Upgrade.1.0.UpgradeGetComputerPowerStatusErr",
        "Message": "Failed to obtain the power status of the host OS.",
        "NumberOfArgs": 0,
        "Resolution": "1. Check the device management status. 2. If the device status is normal, deliver the update task again."
    },
    {
        "type": "Upgrade.1.0.UpgradePowerOnComputerErr",
        "Message": "Failed to power on the host OS.",
        "NumberOfArgs": 0,
        "Resolution": "1. Check the device management status. 2. If the device status is normal, deliver the update task again."
    },
    {
        "type": "Upgrade.1.0.KeepPowerStatusFailErr",
        "Message": "Failed to keep consistent power status of the host OS before and after the update.",
        "NumberOfArgs": 0,
        "Resolution": "Check the power status of the host OS. If power status does not meet your expectation, power on or off the host OS on the server page."
    },
    {
        "type": "Upgrade.1.0.UpgradeResultFailErr",
        "Message": "Update failed.",
        "NumberOfArgs": 0,
        "Resolution": "Check the update task failure information."
    },
    {
        "type": "FusionDirector.1.0.CertUntrusted",
        "Message": "An untrusted device root certificate is used.",
        "NumberOfArgs": 0,
        "Resolution": "Check whether a trusted root certificate is configured."
    },
    {
        "type": "FusionDirector.1.0.CertNotFound",
        "Message": "The root certificate of the current device is not found.",
        "NumberOfArgs": 0,
        "Resolution": "Are you sure you want to configure the trusted root certificate."
    },
    {
        "type": "FusionDirector.1.0.DevMgmtCertUntrusted",
        "Message": "An untrusted device root certificate is used.",
        "NumberOfArgs": 0,
        "Resolution": "Check whether a trusted root certificate is configured."
    },
    {
        "type": "Upgrade.1.0.ActiveErrResolutionStep",
        "Message": "{1} failed to take effect. Failed to obtain the version from the device. Check whether the version on the device is updated. If not, update the device again. If yes, ignore it.",
        "NumberOfArgs": 1
    },
    {
        "type": "Upgrade.1.0.DoUpgradeFailedErrStep",
        "Message": "{1} update: An internal error occurred.",
        "NumberOfArgs": 1
    },
    {
        "type": "Upgrade.1.0.BMCMsgResourceMissingAtURIStep",
        "Message": "{1} update: Failed to obtain the BMC update task. Please try again.",
        "NumberOfArgs": 1
    },
    {
        "type": "Upgrade.1.0.BMCMsgErrorStep",
        "Message": "{1} update: The BMC returns the following error information: {2}",
        "NumberOfArgs": 2
    },
    {
        "type": "Upgrade.1.0.VersionNotEqualStep",
        "Message": "{1} update: The firmware takes effect immediately, but the version fails to take effect.",
        "NumberOfArgs": 1
    },
    {
        "type": "Upgrade.1.0.BMCMsgUMSIsExclusivelyUsedStep",
        "Message": "{1} update: Check whether the system is in the Smart Provisioning phase, and try again later.",
        "NumberOfArgs": 1
    },
    {
        "type": "Upgrade.1.0.BMCMsgOperationFailedStep",
        "Message": "{1} update: Check whether the system is in the Smart Provisioning phase, and try again later.",
        "NumberOfArgs": 1
    },
    {
        "type": "Upgrade.1.0.BMCMsgFirmwareUpgradingStep",
        "Message": "{1} update: The BMC detects that other firmware is being updated. After the update is complete, the BMC will deliver the update task again.",
        "NumberOfArgs": 1
    },
    {
        "type": "Upgrade.1.0.BMCMsgFileDownloadTaskOccupiedStep",
        "Message": "{1} update: The BMC detects that another file is being transferred. After the transfer is complete, the BMC will deliver the update task again.",
        "NumberOfArgs": 1
    },
    {
        "type": 'AppDeployMgmt.1.0.DoHttpRequestFailed',
        "Message": "Do http request failed",
        "NumberOfArgs": 0,
        "Resolution": "Please make sure the parameters correct,resubmit the request."
    },
    {
        "type": 'AppDeployMgmt.1.0.OperationDBFailed',
        "Message": "Deal with DB affairs failed",
        "NumberOfArgs": 0,
        "Resolution": "Please make sure DB connection correct,resubmit the request."
    },
    {
        "type": 'AppDeployMgmt.1.0.DeleteVersionInRegistryFailed',
        "Message": "Delete version in registry failed",
        "NumberOfArgs": 0,
        "Resolution": "Please make sure registry operate normally and the VersionId correct,resubmit the request."
    },
    {
        "type": 'AppDeployMgmt.1.0.DeleteImageVersionInDBFailed',
        "Message": "Delete image version in DB failed",
        "NumberOfArgs": 0,
        "Resolution": "Please make sure registry operate normally and the VersionId correct,resubmit the request."
    },
    {
        "type": 'AppDeployMgmt.1.0.DeleteImageFileInDBFailed',
        "Message": "Delete image file in DB failed",
        "NumberOfArgs": 0,
        "Resolution": "Please make sure DB connect correctly and the FileId correct,resubmit the request."
    },
    {
        "type": 'AppDeployMgmt.1.0.UpdateDockerImageVersionCountFailed',
        "Message": "Update docker image version count failed",
        "NumberOfArgs": 0,
        "Resolution": "Please make sure DB connect correctly and the FileId correct,resubmit the request."
    },
    {
        "type": 'AppDeployMgmt.1.0.GetCountWithDigestFailed',
        "Message": "Get the count of versions which have the same digest failed.",
        "NumberOfArgs": 0,
        "Resolution": "Please make sure DB connect correctly and the FileId correct,resubmit the request."
    },
    {
        "type": 'AppDeployMgmt.1.0.GetImageNameByFileIdFailed',
        "Message": "Get image name by FileId Failed",
        "NumberOfArgs": 0,
        "Resolution": "Please make sure DB connect correctly and the FileId correct,resubmit the request."
    },
    {
        "type": 'AppDeployMgmt.1.0.CreateImageError',
        "Message": "Create docker image failed",
        "NumberOfArgs": 0,
        "Resolution": "Please make sure the request correct,resubmit the request."
    },
    {
        "type": 'AppDeployMgmt.1.0.LoadImageError',
        "Message": "LoadImage failed",
        "NumberOfArgs": 0,
        "Resolution": "Please make sure the image file correct,resubmit the request."
    },
    {
        "type": 'AppDeployMgmt.1.0.TagImageError',
        "Message": "TagImage failed",
        "NumberOfArgs": 0,
        "Resolution": "Please make sure the tag correct,resubmit the request."
    },
    {
        "type": 'AppDeployMgmt.1.0.PushImageError',
        "Message": "PushImage failed",
        "NumberOfArgs": 0,
        "Resolution": "Please make sure the image correct,resubmit the request."
    },
    {
        "type": 'AppDeployMgmt.1.0.RemoveImageError',
        "Message": "RemoveImage failed",
        "NumberOfArgs": 0,
        "Resolution": "Please make sure the image correct,resubmit the request."
    },
    {
        "type": 'AppDeployMgmt.1.0.FilePathIllegal',
        "Message": "File path illegal",
        "NumberOfArgs": 0,
        "Resolution": "Please make sure the file path correct,resubmit the request."

    },
    {
        "type": 'AppDeployMgmt.1.0.ImageFileNameFormatIllegal',
        "Message": "The name of the uploaded image file is not formatted correctly",
        "NumberOfArgs": 0,
        "Resolution": "Please make sure the name of the uploaded image file is formatted correctly,resubmit the request."
    },
    {
        "type": 'AppDeployMgmt.1.0.GetImageFileFailed',
        "Message": "Get image file info failed",
        "NumberOfArgs": 0,
        "Resolution": "Please make sure the fileId correct,resubmit the request."

    },
    {
        "type": 'AppDeployMgmt.1.0.ImageFileFormatIllegal',
        "Message": "The uploaded image file type is incorrect",
        "NumberOfArgs": 0,
        "Resolution": "Please make sure the uploaded image file type is tar or tar.gz,resubmit the request."
    },
    {
        "type": 'AppDeployMgmt.1.0.VersionCountMoreThanTheLargest',
        "Message": "There are more than 32 images ine the file.",
        "NumberOfArgs": 0,
        "Resolution": "To upload,please delete the existing image firstly,resubmit the request."

    },
    {
        "type": 'AppDeployMgmt.1.0.GetDockerImageFileSizeFailed',
        "Message": "Get docker image file size failed",
        "NumberOfArgs": 0,
        "Resolution": "Please make sure the file path correct,resubmit the request."
    },
    {
        "type": 'AppDeployMgmt.1.0.VersionSizeMoreThanTheLargest',
        "Message": "The size of uploaded image file is more than the largest",
        "NumberOfArgs": 0,
        "Resolution": "Please make sure the size of uploaded image file is not more than 4G,resubmit the request."
    },
    {
        "type": 'AppDeployMgmt.1.0.InsufficientDiskSpace',
        "Message": "Insufficient disk space",
        "NumberOfArgs": 0,
        "Resolution": "To upload,please delete the existing image firstly,resubmit the request."
    },
    {
        "type": 'AppDeployMgmt.1.0.TagAlreadyExist',
        "Message": "Tag already exist",
        "NumberOfArgs": 0,
        "Resolution": "To upload,please modify tag,resubmit the request."
    },
    {
        "type": "FusionDirector.1.0.DevMgmtCertNotFound",
        "Message": "The root certificate of the current device is not found.",
        "NumberOfArgs": 0,
        "Resolution": "Check whether a trusted root certificate is configured."
    },
    {
        "type": "Device.1.0.ServerRelease",
        "Message": "The device is going offline.",
        "NumberOfArgs": 0,
        "Resolution": "Wait until the operation on the current device is complete."
    },
    {
        "type": "Upgrade.1.0.TheFileAlreadyExists",
        "Message": "The file already exists.",
        "NumberOfArgs": 0,
        "Resolution": "Check whether the file exists."
    },
    {
        "type": "Enclosure.1.0.ValueOverrun",
        "Message": "The value of {1} of {2} exceeds the value range.",
        "NumberOfArgs": 2,
        "Resolution": "Change the power capping value of the current board and submit the request again."
    },
    {
        "type": "Enclosure.1.0.ServiceRestart",
        "Message": "The service is interrupted abnormally.",
        "NumberOfArgs": 0,
        "Resolution": "Submit the request again."
    },
    {
        "type": 'Enclosure.1.0.DevicePowerOff',
        "Message": "Failed to obtain the serial number because the device is not powered on.",
        "NumberOfArgs": 0,
        "Resolution": "Power on the device and try again."
    },
    {
        "type": 'Enclosure.1.0.MMCommandTimeout',
        "Message": "The communication between the MM and the device times out.",
        "NumberOfArgs": 0,
        "Resolution": "Check the communication between the MM and the BMC and try again."
    },
    {
        "type": 'Enclosure.1.0.DeviceSNMiss',
        "Message": "The SN of the device is missing.",
        "NumberOfArgs": 0,
        "Resolution": "Check whether the SN of the device is correct."
    },
    {
        "type": 'Upgrade.1.0.EnvCheckVersionFailed',
        "Message": "Failed to check the update environment.",
        "NumberOfArgs": 0,
        "Resolution": "Update from the current version to the target version is not supported."

    },
    {
        "type": 'Upgrade.1.0.EnvCheckDiskSpaceFailed',
        "Message": "Failed to check the update environment.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the system disk space is sufficient and perform the update again."

    },
    {
        "type": "Config.1.0.InBandOffConfigRaidErr",
        "Message": "Failed to configure the virtual disk because the server is powered off.",
        "NumberOfArgs": 0,
        "Resolution": "Power on the server and try again."
    },
    {
        "type": "Config.1.0.ConfigRaidStateErr",
        "Message": "Failed to configure the virtual disk because the health status of disk {1} is incorrect.",
        "NumberOfArgs": 1,
        "Resolution": "Check the disk status and try again after the disk status is normal.Check the disk status and try again after the disk status is normal."
    },
    {
        "type": "Config.1.0.ConfigRaidDiskIsCreated",
        "Message": "Failed to create a virtual disk because disk {1} has been used by a virtual disk.",
        "NumberOfArgs": 1,
        "Resolution": "Delete the virtual disk of the disk and try again."
    },
    {
        "type": "Config.1.0.ConfigRaidFirmwareErr",
        "Message": "The firmware status of disk {1} does not support virtual disks.",
        "NumberOfArgs": 1,
        "Resolution": "Manually repair the disk to ensure that the disk works properly and try again."
    },
    {
        "type": "Config.1.0.ConfigRaidDiskNotExist",
        "Message": "Disk {1} does not exist.",
        "NumberOfArgs": 1,
        "Resolution": "Select an existing disk and try again."
    },
    {
        "type": "Config.1.0.ConfigRaidMediaTypeNotSame",
        "Message": "The medium type of disk {1} is different from that of disk {2}.",
        "NumberOfArgs": 2,
        "Resolution": "Check the disk details. Ensure that the disks of the same medium type are selected and try again."
    },
    {
        "type": "Device.1.0.ChangeServerIPv4",
        "Message": "The IP address of the device is being changed.",
        "NumberOfArgs": 0,
        "Resolution": "Wait until the operation on the device is complete and try again."
    },
    {
        "type": "Device.1.0.ServerRefresh",
        "Message": "The device is being refreshed.",
        "NumberOfArgs": 0,
        "Resolution": "Wait until the operation on the device is complete and try again."
    },
    {
        "type": "Device.1.0.PatchAccountInfo",
        "Message": "The account information of the device is being modified.",
        "NumberOfArgs": 0,
        "Resolution": "Wait until the operation on the device is complete and try again."
    },
    {
        "type": "Device.1.0.InstallLicense",
        "Message": "Importing a license to the device",
        "NumberOfArgs": 0,
        "Resolution": "Wait until the operation on the device is complete and try again."
    },
    {
        "type": "FusionDirector.1.0.DevMgmtUUIDRepeat",
        "Message": "The UUID of the new device is the same as that of a managed device.",
        "NumberOfArgs": 0,
        "Resolution": "Check whether the device has been managed."
    },
    {
        "type": 'FusionDirector.1.0.IRMAuthorizationFailed',
        "Message": "Authentication failed. The user name ({1}) or the password is incorrect.",
        "NumberOfArgs": 1,
        "Resolution": "Ensure that the user name and password are correct and try again."
    },
    {
        "type": 'FusionDirector.1.0.IRMIpv4Repeat',
        "Message": "The cabinet whose IP address is {1} has been managed. Do not manage it again.",
        "NumberOfArgs": 1,
        "Resolution": "--"
    },
    {
        "type": 'FusionDirector.1.0.IRMSerialNumberRepeat',
        "Message": "The value of this parameter is the same as the value of ({1}) of the managed iRM.",
        "NumberOfArgs": 1,
        "Resolution": "Ensure that the sequence number of the iRM to be managed is unique and submit the request again."
    },
    {
        "type": 'FusionDirector.1.0.IRMSerialNumberMiss',
        "Message": "The sequence number of the iRM to be managed is missing.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the sequence number of the iRM to be managed exists and is unique. Submit the request again."
    },
    {
        "type": 'FusionDirector.1.0.IRMSubscriptionFailed',
        "Message": "Failed to subscribe to the iRM event.",
        "NumberOfArgs": 0,
        "Resolution": "Check whether the number of iRM event subscriptions reaches the maximum. If yes, delete invalid subscriptions and then manage them again."
    },
    {
        "type": 'FusionDirector.1.0.IRMCouldNotConnectToIrm',
        "Message": "Failed to communicate with the iRM.",
        "NumberOfArgs": 3,
        "Resolution": "Check whether the IP({1}) of the iRM is reachable and whether the protocol ({2}) and port number ({3}) are correct."
    },
    {
        "type": 'FusionDirector.1.0.DCMgmtDateCenterError',
        "Message": "Data center verification failed. The data center ({1}) is incorrect.",
        "NumberOfArgs": 1,
        "Resolution": "Select a correct data center and submit the request again."
    },
    {
        "type": 'FusionDirector.1.0.DCMgmtNotSupport',
        "Message": "This type of cabinet cannot be added.",
        "NumberOfArgs": 0,
        "Resolution": "The device type does not support management. Ensure that the cabinet type is correct."
    },
    {
        "type": 'FusionDirector.1.0.DCMgmtRackManagedByOtherFD',
        "Message": "The cabinet has been managed by another FusionDirector system.",
        "NumberOfArgs": 0,
        "Resolution": "To avoid conflicts, the cabinet can be managed by only one FusionDirector system."
    },
    {
        "type": "Device.1.0.SettingThermal",
        "Message": "The device is setting the cooling resource.",
        "NumberOfArgs": 0,
        "Resolution": "Wait until the operation on the device is complete and try again."
    },
    {
        "type": "Device.1.0.SettingDiagnosticService",
        "Message": "The device is setting diagnostics service resource.",
        "NumberOfArgs": 0,
        "Resolution": "Wait until the operation on the device is complete and try again."
    },
    {
        "type": "Device.1.0.SettingAccountService",
        "Message": "The device is setting account service information.",
        "NumberOfArgs": 0,
        "Resolution": "Wait until the operation on the device is complete and try again."
    },
    {
        "type": "Device.1.0.SettingSnmpService",
        "Message": "The device is setting SNMP.",
        "NumberOfArgs": 0,
        "Resolution": "Wait until the operation on the device is complete and try again."
    },
    {
        "type": "Config.1.0.ConfigDNSModeErr",
        "Message": "Failed to configure the mode for obtaining the DNS server information because the {1} mode of the BMC is static.",
        "NumberOfArgs": 1,
        "Resolution": "Change the BMC IP address mode to DHCP or change the DNS server information obtaining mode to manual, and then deliver the configuration task again."
    },
    {
        "type": "Config.1.0.ConfigNTPModeErr",
        "Message": "Failed to configure the NTP mode because the {1} mode of the BMC is static.",
        "NumberOfArgs": 1,
        "Resolution": "Change the BMC IP address mode to DHCP or change the NTP mode to manual, and then deliver the configuration task again."
    },
    {
        "type": "Config.1.0.ConfigResourceErr",
        "Message": "The {2} configuration fails because the number of resources in the {1} pool is insufficient.",
        "NumberOfArgs": 2,
        "Resolution": "Check the number of resources in the address pool, ensure that the number of resources in the address pool is sufficient, and deliver the configuration task again."
    },
    {
        "type": "Config.1.0.ConfigResourceMissing",
        "Message": "Failed to configure the {1} for the blade server because the {2} pool is not bound.",
        "NumberOfArgs": 2,
        "Resolution": "Bind the resource pool to the chassis and send the request again."
    },
    {
        "type": "Config.1.0.ConfigMZ220MZ221FailedErr",
        "Message": "Failed to configure MZ220 or MZ221.",
        "NumberOfArgs": 0,
        "Resolution": "Deliver the configuration again."
    },
    {
        "type": "Config.1.0.ConfigNetWorkErr",
        "Message": "Failed to clear the NIC uniqueness configuration.",
        "NumberOfArgs": 0,
        "Resolution": "Deliver the configuration again."
    },
    {
        "type": 'FusionDirector.1.0.DeviceCategoryDifferent',
        "Message": "The selected device category is inconsistent with the category of the device that failed to be imported last time.",
        "NumberOfArgs": 0,
        "Resolution": "Delete the device that failed to be imported last time, select the correct device category, and submit the request again."
    },
    {
        "type": 'FusionDirector.1.0.DevMgmtRedfishResourceMiss',
        "Message": "Lack of necessary redfish resources.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the redfish of the current device contains the /redfish/v1/Systems, /redfish/v1/Managers, and /redfish/v1/Chassis resources. Otherwise, the device cannot be managed."
    },
    {
        "type": 'FusionDirector.1.0.DevMgmtCategoryError',
        "Message": "The selected device category is inconsistent with the actual device category.",
        "NumberOfArgs": 0,
        "Resolution": "Delete the device, select a correct device category, and submit the request again."
    },
    {
        "type": "Config.1.0.ChangePowerParamFailedErr",
        "Message": "Failed to convert data.",
        "NumberOfArgs": 0,
        "Resolution": "Send the request again."
    },
    {
        "type": "Config.1.0.ConfigEditionChangeErr",
        "Message": "The {2} configuration fails because the {1} version is too early.",
        "NumberOfArgs": 2,
        "Resolution": "Download the latest version from the Support, upgrade the version, and deliver the configuration again."
    },
    {
        "type": "Config.1.0.ConfigPowerFailedErr",
        "Message": "Failed to configure the power mode.",
        "NumberOfArgs": 0,
        "Resolution": "Send the configuration again."
    },
    {
        "type": "Config.1.0.CheckPowerEnableConfigFailedErr",
        "Message": "Failed to obtain configuration parameters.",
        "NumberOfArgs": 0,
        "Resolution": "Check the network and device and send the request again."
    },
    {
        "type": "Config.1.0.CheckPowerCountFailedErr",
        "Message": "The number of PSUs is incorrect.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that there are two PSUs on the device and then deliver the configuration again."
    },
    {
        "type": "Config.1.0.PowerStateCheckErr",
        "Message": "The PSU status is abnormal.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the PSU is in position and a power cable is connected to it, and then send the configuration again."
    },
    {
        "type": "Config.1.0.PowerVoltageNotSupport",
        "Message": "The voltage of the active and standby power supplies does not meet the requirements.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the voltage of the standby power supply is at least 5 V higher than the active power supply."
    },
    {
        "type": 'Enclosure.1.0.NotEnoughLicense',
        "Message": "Failed to manage the blade server because the server capacity exceeds the threshold.",
        "NumberOfArgs": 0,
        "Resolution": "Please expand the capacity of the license server."
    },
    {
        "type": 'FusionDirector.1.0.DevMgmtModelTypeMiss',
        "Message": "The server model cannot be identified.",
        "NumberOfArgs": 0,
        "Resolution": "Contact Huawei maintenance engineers to add the model and manage the server again."
    },
    {
        "type": 'FusionDirector.1.0.SPIsBeingUpgraded',
        "Message": "This operation is not supported because Smart Provisioning is being upgraded.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that Smart Provisioning is not being upgraded and submit the request again."
    },
    {
        "type": 'FusionDirector.1.0.UMSIsExclusivelyUsed',
        "Message": "This operation is not supported because the Smart Provisioning is running.",
        "NumberOfArgs": 0,
        "Resolution": "Exit Smart Provisioning and submit the request again."
    },
    {
        "type": 'Examine.1.0.BaselineFormatError',
        "Message": "Incorrect server model format.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the server model is correct and submit the request again."
    },
    {
        "type": 'Examine.1.0.ServerPropertiesError',
        "Message": "The server properties do not match the model.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the server model properties are correct and submit the request again."
    },
    {
        "type": 'Examine.1.0.GetServerModelFailed',
        "Message": "Failed to obtain the server model.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the server model exists and submit the request again."
    },
    {
        "type": 'Planning.1.0.EncryptError',
        "Message": "Failed to encrypt the planning template.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the service is normal and send the request again."
    },
    {
        "type": 'Planning.1.0.MsgIDApplyResourceError',
        "Message": "Failed to apply for IP addresses or location resources in the planning template.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the service is normal and send the request again."
    },
    {
        "type": '"Planning.1.0.WriteDBError',
        "Message": "Failed to write data to the template database.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the service is normal and send the request again."
    },
    {
        "type": 'Planning.1.0.ModelCheckError',
        "Message": "Failed to check the planning template.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the service is normal and send the request again."
    },
    {
        "type": 'Planning.1.0.UpdateDBError',
        "Message": "Failed to update the planning template in the database.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the service is normal and send the request again."
    },
    {
        "type": 'Planning.1.0.WriteDHCPServerError',
        "Message": "Failed to write the planning template to the DHCP service.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the service is normal and send the request again."
    },
    {
        "type": 'Enclosure.1.0.SetPermitPowerOnFailed',
        "Message": "Failed to configure controlled power-on for the blade.",
        "NumberOfArgs": 0,
        "Resolution": "Contact Huawei engineers."
    },
    {
        "type": 'Enclosure.1.0.SetFanSettingFailed',
        "Message": "Failed to configure fan settings.",
        "NumberOfArgs": 0,
        "Resolution": "Contact Huawei engineers."
    },
    {
        "type": 'Enclosure.1.0.SetPSUModeFinalFailed',
        "Message": "Failed to configure the PSU hibernation mode.",
        "NumberOfArgs": 0,
        "Resolution": "Contact Huawei engineers."
    },
    {
        "type": 'Enclosure.1.0.SetPSUModeRequirementHealthFailed',
        "Message": "Failed to configure the PSU hibernation mode.",
        "NumberOfArgs": 0,
        "Resolution": "The PSU has alarms and cannot be set to hibernation mode."
    },
    {
        "type": 'Enclosure.1.0.SetPSUModeRequirementTotalCountFailed',
        "Message": "Failed to configure the PSU hibernation mode.",
        "NumberOfArgs": 0,
        "Resolution": "The hibernation mode cannot be set when the number of installed PSUs is less than three."
    },
    {
        "type": 'Enclosure.1.0.SetPSUModeRequirementLeftRightCountFailed',
        "Message": "Failed to configure the PSU hibernation mode.",
        "NumberOfArgs": 0,
        "Resolution": "The hibernation mode cannot be set when the number of installed PSUs on the left is less than one or is not equal to that on the right."
    },
    {
        "type": 'Enclosure.1.0.SetPSUModeRequirementEvenFailed',
        "Message": "Failed to configure the PSU hibernation mode.",
        "NumberOfArgs": 0,
        "Resolution": "The hibernation mode cannot be set to N+N when the number of installed PSUs is not an even number."
    },
    {
        "type": 'Enclosure.1.0.SetPowerCappingFinalFailed',
        "Message": "Failed to configure power capping.",
        "NumberOfArgs": 0,
        "Resolution": "Contact Huawei engineers."
    },
    {
        "type": 'Enclosure.1.0.GetRestClientFailed',
        "Message": "Failed to obtain the RestClient.",
        "NumberOfArgs": 0,
        "Resolution": "Contact Huawei engineers."
    },
    /************************************升级********************************/
    {
        "type": "Upgrade.1.0.UpgradeSendPowerOffComputerStep",
        "Message": "{1}: The command for powering off the host operating system has been issued.",
        "NumberOfArgs": 1
    },
    {
        "type": "Upgrade.1.0.UpgradePowerOffComputerStep",
        "Message": "{1}: The host operating system has been powered off.",
        "NumberOfArgs": 1
    },
    {
        "type": "Upgrade.1.0.UpgradePowerOffForceComputerStep",
        "Message": "{1}: The host operating system cannot be powered off within {2} seconds and is then forcibly powered off successfully.",
        "NumberOfArgs": 2
    },
    {
        "type": "Upgrade.1.0.UpgradePowerOffErrStep",
        "Message": "{1}: Failed to power off the host operating system.",
        "NumberOfArgs": 1
    },
    {
        "type": "Upgrade.1.0.UpgradeSendPowerOnComputerStep",
        "Message": "{1}: The command for powering on the server has been issued.",
        "NumberOfArgs": 1
    },
    {
        "type": "Upgrade.1.0.UpgradePowerOnComputerStep",
        "Message": "{1}: The host operating system has been powered on.",
        "NumberOfArgs": 1
    },
    {
        "type": "Upgrade.1.0.UpgradePowerOnComputerErrStep",
        "Message": "{1}: Failed to power on the host operating system.",
        "NumberOfArgs": 1
    },
    {
        "type": "Upgrade.1.0.UpgradeGetComputerPowerStatusErrStep",
        "Message": "{1}: Failed to obtain the power status of the host operating system.",
        "NumberOfArgs": 1
    },
    {
        "type": "Upgrade.1.0.UpgradeActiveAllByPowerOffAtLaterActiveStep",
        "Message": "Check that the operating system of the host is powered off and the policy takes effect later. All upgraded components take effect immediately.",
        "NumberOfArgs": 0
    },
    {
        "type": "Upgrade.1.0.AllUpgradeFailErr",
        "Message": "All upgrade failed.",
        "NumberOfArgs": 0,
        "Resolution": "For details, contact Huawei engineers."
    },
    {
        "type": "Upgrade.1.0.OperateDBErr",
        "Message": "Failed to operate the database.",
        "NumberOfArgs": 0,
        "Resolution": "Check the database connection."
    },
    {
        "type": "Upgrade.1.0.UpgradeSuccessStep",
        "Message": "{1} update: The update is successful.",
        "NumberOfArgs": 1
    },
    {
        "type": "Upgrade.1.0.UpgradingStep",
        "Message": "{1}update：starts update{2}, Version：{3}->{4}",
        "NumberOfArgs": 4
    },
    {
        "type": "Upgrade.1.0.RequestParaErrStep",
        "Message": "{1} update: Failed to assemble update parameters.",
        "NumberOfArgs": 0
    },
    {
        "type": "Upgrade.1.0.DeviceStatusErrStep",
        "Message": "{1} update: Failed to obtain device parameters.",
        "NumberOfArgs": 1
    },
    {
        "type": "Upgrade.1.0.VersionEqualStep",
        "Message": "{1} update: The target firmware version ({2}) is the same as the device version,the upgrade is not performed.",
        "NumberOfArgs": 2
    },
    {
        "type": "Upgrade.1.0.NoActiveStep",
        "Message": "{1} update: The firmware is in the \"To Take Effect\" state.",
        "NumberOfArgs": 1
    },
    {
        "type": "Upgrade.1.0.UpgradeRequestErrStep",
        "Message": "{1} update: Failed to deliver the update request.",
        "NumberOfArgs": 1
    },
    {
        "type": "Upgrade.1.0.UpgradeRequestSuccessStep",
        "Message": "{1} update: The update request is delivered successfully.",
        "NumberOfArgs": 1
    },
    {
        "type": "Upgrade.1.0.UpgradeTimeOutStep",
        "Message": "{1} update: Update timed out.",
        "NumberOfArgs": 1
    },
    {
        "type": "Upgrade.1.0.DevicePowerOffStep",
        "Message": "{1} update: The host operating system is powered off and waits for the CPLD to take effect automatically.",
        "NumberOfArgs": 1
    },
    {
        "type": "Upgrade.1.0.SetBootFromSPStep",
        "Message": "{1} update: Setting the host operating system to start from the SP.",
        "NumberOfArgs": 1
    },
    {
        "type": "Upgrade.1.0.StartActiveStep",
        "Message": "The {1} update starts to take effect and the firmware to take effect is {2}.",
        "NumberOfArgs": 1
    },
    {
        "type": "Upgrade.1.0.UpdateStatusErrStep",
        "Message": "Failed to update the status ({1}).",
        "NumberOfArgs": 1
    },
    {
        "type": "Upgrade.1.0.OneFirmwareActiveSuccessStep",
        "Message": "The {1} takes effect successfully",
        "NumberOfArgs": 1
    },
    {
        "type": "Upgrade.1.0.ActiveErrStep",
        "Message": "The task for making the update take effect is complete. Sucessful: {1}; Failed: {2}",
        "NumberOfArgs": 2
    },
    {
        "type": "Upgrade.1.0.ActiveRequestSuccessStep",
        "Message": "Command issued successfully.",
        "NumberOfArgs": 0
    },
    {
        "type": "Upgrade.1.0.ActiveRequestErrStep",
        "Message": "Failed to deliver the effective command.",
        "NumberOfArgs": 0
    },
    {
        "type": "Upgrade.1.0.UpgradeCompleteStep",
        "Message": "{1} update: The update is complete.",
        "NumberOfArgs": 1
    },
    {
        "type": 'FusionDirector.1.0.BMCOperationFailed',
        "Message": "BMC operation failed. Possible causes: 1. The Smart Provisioning is running. 2. The virtual USB is occupied." ,
        "NumberOfArgs": 0,
        "Resolution": "Exit Smart Provisioning or disconnect the virtual USB, and submit the request again."
    },
    /************************************升级********************************/
    {
        "type":"Planning.1.0.ResourceURIInWrongFormat",
        "Message ":"Incorrect resource URI format.",
        "NumberOfArgs": 0,
        "Resolution": "Modify the resource path and submit the request again."
    },
    {
        "type":"Planning.1.0.ResourceNotExist",
        "Message ":"The resource does not exist.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the resource exists and resend the request."
    },
    {
        "type":"Planning.1.0.InsufficientPrivilege",
        "Message ":"Insufficient permission for performing operations on the device.",
        "NumberOfArgs": 0,
        "Resolution": "Check the operation permission and scope, and try again after the permission is added or the scope is extended."
    },
    {
        "type": "Upgrade.1.0.WaitDownload",
        "Message": "Waiting for download.",
        "NumberOfArgs": 0,
        "Resolution": "Please wait."
    },
    {
        "type": "Upgrade.1.0.ReachMaxCap",
        "Message": "The space usage is about to reach the upper limit.",
        "NumberOfArgs": 0,
        "Resolution": "Clear the update package."
    },
    {
        "type": "Upgrade.1.0.DownloadFilePathNullErr",
        "Message": "The download package path is empty.",
        "NumberOfArgs": 0,
        "Resolution": "Check whether the download path is correct."
    },
    {
        "type": "Upgrade.1.0.DownloadURLNullErr",
        "Message": "The online download address is empty.",
        "NumberOfArgs": 0,
        "Resolution": "On the firmware package management page, reconfigure the download path."
    },
    {
        "type": "Upgrade.1.0.DownloadAscFilePathNullErr",
        "Message": "The signature file path is empty.",
        "NumberOfArgs": 0,
        "Resolution": "Check whether the verification file path is correct."
    },
    {
        "type": "Upgrade.1.0.DownloadImportErr",
        "Message": "Failed to import the downloaded file.",
        "NumberOfArgs": 0,
        "Resolution": "Check whether the download package is correct"
    },


    /************************************第一条误改********************************/
    {
        "type": 'Base.1.0.GeneralError',
        "Message": "Internal error.",
        "NumberOfArgs": 0,
        "Resolution": "Contact Huawei engineers."
    },
    /************************************第一条误改********************************/
    {
        "type": 'FusionDirector.1.0.DevMgmtDeviceMissingUUID',
        "Message": "The BMC version is too early or the UUID of the manager resource on the server does not exist. Management is not supported.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the BMC version is later than 2.57 and the manager resource has UUID. Submit the request again."
    },
    {
        "type": 'FusionDirector.1.0.DevMgmtSubscriptionFailed',
        "Message": "Failed to subscribe to the BMC. The possible cause is that the BMC subscription is full.",
        "NumberOfArgs": 0,
        "Resolution": "Check whether the bmc subscription is full, delete invalid bmc subscription, and try again."
    },
    {
        "type": 'RestartOperationID',
        "Message": "The system is restarted.",
        "NumberOfArgs": 0,
        "Resolution": "Check whether the system is restarted."
    },
    {
        "type": 'Backup.1.0.UploadBackupArchiveFailed',
        "Message": "Check whether the system is restarted.",
        "NumberOfArgs": 0,
        "Resolution": "Failed to upload the backup package to the remote host."

    },



    {
        "type": 'Base.1.0.Success',
        "Message": "The request is successfully completed.",
        "NumberOfArgs": 0,
        "Resolution": "None"
    },
    {
        "type": 'Base.1.0.Created',
        "Message": "Resources have been created.",
        "NumberOfArgs": 0,
        "Resolution": "None"
    },
    {
        "type": "Base.1.0.PropertyDuplicate",
        "Message": "Internal error. The {1} attribute is duplicated in the request.",
        "NumberOfArgs": 1,
        "Resolution": "Delete duplicate attribute from the request body and submit the request again."
    },
    {
        "type": "Base.1.0.PropertyUnknown",
        "Message": "The {1} attribute is not in the list of valid attributes of the resource.",
        "NumberOfArgs": 1,
        "Resolution": "Delete the unknown attribute from the request body and submit the request again."
    },
    {
        "type": "Base.1.0.PropertyValueTypeError",
        "Message": "The type of the value {1} of the {2} attribute is not allowed by the attribute.",
        "NumberOfArgs": 2,
        "Resolution": "Correct the attribute value in the request body and submit the request again."
    },
    {
        "type": "Base.1.0.PropertyValueFormatError",
        "Message": "The format of the value {1} of the {2} attribute is not allowed by the attribute.",
        "NumberOfArgs": 2,
        "Resolution": "Correct the attribute value in the request body and submit the request again."
    },
    {
        "type": "Base.1.0.PropertyValueNotInList",
        "Message": "The value {1} of the {2} attribute is not in the list of acceptable values.",
        "NumberOfArgs": 2,
        "Resolution": "Select a value from the enumeration list and submit the request again."
    },
    {
        "type": "Base.1.0.PropertyNotWritable",
        "Message": "The {1} attribute is read-only and cannot be assigned with a value.",
        "NumberOfArgs": 1,
        "Resolution": "Remove the attribute from the request body and submit the request again."
    },
    {
        "type": "Base.1.0.PropertyMissing",
        "Message": "The {1} attribute is read-only and cannot be assigned with a value.",
        "NumberOfArgs": 1,
        "Resolution": "Ensure that the attribute is valid in the request body and submit the request again."
    },
    {
        "type": "Base.1.0.MalformedJSON",
        "Message": "The submitted request body is JSON in incorrect format and the service analysis cannot be received.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the request body is valid JSON and submit the request again."
    },
    {
        "type": "Base.1.0.ActionNotSupported",
        "Message": "The resource does not support the {1} operation.",
        "NumberOfArgs": 1,
        "Resolution": "The operation cannot be resubmitted for implementation. The action may be invalid, the target is an incorrect resource, or the assistance is an implementation document."
    },
    {
        "type": "Base.1.0.ActionParameterMissing",
        "Message": "The {1} operation requires that the {2} parameter be included in the request.",
        "NumberOfArgs": 2,
        "Resolution": "Ensure that the required parameter is included in the request body and submit the request again."
    },
    {
        "type": "Base.1.0.ActionParameterDuplicate",
        "Message": "The {2} parameter has more than one value of the {1} operation.",
        "NumberOfArgs": 2,
        "Resolution": "Ensure that only one instance of the parameter is used in the request body and submit the request again."
    },
    {
        "type": "Base.1.0.ActionParameterUnknown",
        "Message": "The {1} operation is submitted with the invalid parameter {2}.",
        "NumberOfArgs": 2,
        "Resolution": "Correct the invalid parameter and submit the request again."
    },
    {
        "type": "Base.1.0.ActionParameterValueTypeError",
        "Message": "The type of the value {1} of the {2} parameter in the {3} operation is not allowed by the parameter.",
        "NumberOfArgs": 3,
        "Resolution": "Modify the parameter value in the request body and submit the request again."
    },
    {
        "type": "Base.1.0.ActionParameterValueFormatError",
        "Message": "The format of the value {1} of the {2} parameter in the {3} operation is not allowed by the parameter.",
        "NumberOfArgs": 3,
        "Resolution": "Modify the parameter value in the request body and submit the request again."
    },
    {
        "type": "Base.1.0.ActionParameterNotSupported",
        "Message": "The target resource does not support the {1} parameter of the {2} operation.",
        "NumberOfArgs": 2,
        "Resolution": "Delete the parameter and submit the request again."
    },
    {
        "type": "Base.1.0.QueryParameterValueTypeError",
        "Message": "The type of the value {1} of the {2} parameter is not allowed by the parameter.",
        "NumberOfArgs": 2,
        "Resolution": "Change the value of the parameter in the request and submit the request again."
    },
    {
        "type": "Base.1.0.QueryParameterValueFormatError",
        "Message": "The format of the value {1} of the {2} parameter is not allowed by the parameter.",
        "NumberOfArgs": 2,
        "Resolution": "Change the value of the parameter in the request and submit the request again."
    },
    {
        "type": "Base.1.0.QueryParameterOutOfRange",
        "Message": "The value {1} of the {2} query parameter is out of the range {3}.",
        "NumberOfArgs": 3,
        "Resolution": "Decrease the value of the query parameter to a value within the range, for example, a value less than or equal to the number of resources in the collection or start value or count value of a page within the valid page range."
    },
    {
        "type": "Base.1.0.QueryNotSupportedOnResource",
        "Message": "The requested resource cannot be queried.",
        "NumberOfArgs": 0,
        "Resolution": "Delete the query parameter and submit the request again."
    },
    {
        "type": "Base.1.0.QueryNotSupported",
        "Message": "The query operation is not supported.",
        "NumberOfArgs": 0,
        "Resolution": "Delete the query parameter and submit the request again."
    },
    {
        "type": "Base.1.0.SessionLimitExceeded",
        "Message": "Failed to set the session because the number of concurrent sessions exceeds the limit.",
        "NumberOfArgs": 0,
        "Resolution": "Reduce the number of sessions before attempting to establish a session, or increase the upper limit on concurrent sessions (if supported)."
    },
    {
        "type": "Base.1.0.EventSubscriptionLimitExceeded",
        "Message": "Failed to subscribe to the event because the number of concurrent subscriptions exceeds the limit.",
        "NumberOfArgs": 0,
        "Resolution": "Reduce the number of subscriptions before attempting to set up an event subscription or increase the upper limit on concurrent subscriptions (if supported)"
    },
    {
        "type": "Base.1.0.ResourceCannotBeDeleted",
        "Message": "Failed to delete the requested resource.",
        "NumberOfArgs": 0,
        "Resolution": "Do not attempt to delete non-deletable resources."
    },
    {
        "type": "Base.1.0.ResourceInUse",
        "Message": "Failed to change the requested resource because the resource is being used or is being converted.",
        "NumberOfArgs": 0,
        "Resolution": "Delete the condition and submit the request again."
    },
    {
        "type": "Base.1.0.ResourceAlreadyExists",
        "Message": "The requested resource already exists.",
        "NumberOfArgs": 0,
        "Resolution": "When a resource has been created, do not create it again."
    },
    {
        "type": "Base.1.0.CreateFailedMissingReqProperties",
        "Message": "Failed to create the operation because the required attribute {1} is absent in the request.",
        "NumberOfArgs": 1,
        "Resolution": "Correct the body to contain the necessary attribute with a valid value and submit the request again."
    },
    {
        "type": "Base.1.0.CreateLimitReachedForResource",
        "Message": "Failed to create the resource because the resource has reached the upper limit.",
        "NumberOfArgs": 0,
        "Resolution": "Delete the resource and submit the request again."
    },
    {
        "type": "Base.1.0.ServiceShuttingDown",
        "Message": "Operation failed. The service is being stopped and cannot receive the transferred request.",
        "NumberOfArgs": 0,
        "Resolution": "When the service becomes available, if the operation fails, submit the request again."
    },
    {
        "type": "Base.1.0.ServiceInUnknownState",
        "Message": "Operation failed. The service is in an unknown state and cannot receive incoming requests.",
        "NumberOfArgs": 0,
        "Resolution": "Restart the service and submit the request again."
    },
    {
        "type": "Base.1.0.NoValidSession",
        "Message": "No valid session is created in the implementation.",
        "NumberOfArgs": 0,
        "Resolution": "Before attempting any operation, set it as a session."
    },
    {
        "type": "Base.1.0.InsufficientPrivilege",
        "Message": "The permission of the account or credential associated with the current session is insufficient. The requested operation cannot be performed.",
        "NumberOfArgs": 0,
        "Resolution": "Cancel the operation, or change the associated access permission and submit the request again."
    },
    {
        "type": "Base.1.0.AccountModified",
        "Message": "The account has been successfully modified.",
        "NumberOfArgs": 0,
        "Resolution": "None"
    },
    {
        "type": "Base.1.0.AccountNotModified",
        "Message": "Failed to request for the account modification.",
        "NumberOfArgs": 0,
        "Resolution": "The modification may fail because insufficient permissions or incorrect request body."
    },
    {
        "type": "Base.1.0.AccountRemoved",
        "Message": "The account has been deleted.",
        "NumberOfArgs": 0,
        "Resolution": "None"
    },
    {
        "type": "Base.1.0.AccountForSessionNoLongerExists",
        "Message": "The account of the session has been deleted. Therefore, the session has been deleted.",
        "NumberOfArgs": 0,
        "Resolution": "Use a valid account for connection."
    },
    {
        "type": "Base.1.0.InvalidObject",
        "Message": "The object on the {1} is invalid.",
        "NumberOfArgs": 1,
        "Resolution": "The object format or the URI is incorrect. Correct the condition and submit the request again."
    },
    {
        "type": "Base.1.0.InternalError",
        "Message": "Internal error.",
        "NumberOfArgs": 0,
        "Resolution": "Contact Huawei engineers."
    },
    {
        "type": "Base.1.0.UnrecognizedRequestBody",
        "Message": "The service detects a request body that has an unknown format error.",
        "NumberOfArgs": 0,
        "Resolution": "Correct the request body and submit the request again."
    },
    {
        "type": "Base.1.0.ResourceMissingAtURI",
        "Message": "The resource of URI{1} cannot be found.",
        "NumberOfArgs": 1,
        "Resolution": "Use a valid resource in the URI or correct the URI, and submit the request again."
    },
    {
        "type": "Base.1.0.ResourceAtUriInUnknownFormat",
        "Message": "The format of the resources in the {1} cannot be identified by the service.",
        "NumberOfArgs": 1,
        "Resolution": "In the URL, use images, resources, or files that can be identified by the service."
    },
    {
        "type": "Base.1.0.ResourceAtUriUnauthorized",
        "Message": "When accessing the resources in the {1}, the service receives an authorization error {2}.",
        "NumberOfArgs": 2,
        "Resolution": "Ensure that appropriate access permissions are provided for the service so that it can access the URI."
    },
    {
        "type": "Base.1.0.CouldNotEstablishConnection",
        "Message": "The connection between the service and the URI {1} is not established.",
        "NumberOfArgs": 1,
        "Resolution": "Ensure that the URI contains valid and accessible node names, protocol information, and other URI information."
    },
    {
        "type": "Base.1.0.SourceDoesNotSupportProtocol",
        "Message": "The other end of the connection on the {1} does not support the specified protocol {2}.",
        "NumberOfArgs": 2,
        "Resolution": "Change the protocol or URI. "
    },
    {
        "type": "Base.1.0.AccessDenied",
        "Message": "When attempting to establish a connection to {1}, the service is denied access.",
        "NumberOfArgs": 1,
        "Resolution": "Ensure that the URI is correct and that the service has appropriate credentials."
    },
    {
        "type": "Base.1.0.ServiceTemporarilyUnavailable",
        "Message": "The service is unavailable temporarily. Try again within {1} seconds.",
        "NumberOfArgs": 1,
        "Resolution": "Wait for the specified retry duration and try again."
    },
    {
        "type": "Base.1.0.InvalidIndex",
        "Message": "The index {1} is not a valid offset in the array.",
        "NumberOfArgs": 1,
        "Resolution": "Verify that the provided index value is within the boundary of the array."
    },
    {
        "type": "Base.1.0.PropertyValueModified",
        "Message": "The value of the {1} attribute is {2} because the service is modified.",
        "NumberOfArgs": 2,
        "Resolution": "None"
    },
    //profile
    {
        "type": "Base.1.0.OperationTimeOut",
        "Message": "{1} operation timed out.",
        "NumberOfArgs": 1,
        "Resolution": "Submit the request again."
    },
    {
        "type": "Base.1.0.OperationFailed",
        "Message": "The operation on {1} fails due to {2}.",
        "NumberOfArgs": 2,
        "Resolution": "Submit the request again."
    },
    //os
    {
        "type": "Base.1.0.CheckResourceFail",
        "Message": "Failed to verify the resource file.",
        "NumberOfArgs": 0,
        "Resolution": "Check whether the file is damaged or whether the entered verification code is correct."
    },
    //baseline
    {
        "type": "Base.1.0.BaselineConflict",
        "Message": "Failed to create a baseline or modify an automatic update policy.",
        "NumberOfArgs": 0,
        "Resolution": "Check the baseline file and ensure that there is no conflicts."
    },
    //baselineCreate
    {
        "type": "Base.1.0.ModuleConflict",
        "Message": "Module {1} conflict. Operation failed.",
        "NumberOfArgs": 1,
        "Resolution": "Check the baseline file and ensure that modules of the same device do not conflict with each other."
    },
    //baselineCreate
    {
        "type": "Base.1.0.iBMC.1.0.PasswordNotSatisfyComplexity",
        "Message": "The password does not meet the complexity requirements.",
        "NumberOfArgs": 1,
        "Resolution": "The password must contain 8 to 20 characters, including at least two types of the following characters: uppercase letters, lowercase letters, digits, and must have at least one space or one of the following special characters: `~!@#$%^&*()-_=+\\|[{}];: '\",<.>/? The password cannot be the same as the username or the username in reverse order."
    },
    //baselineCreate
    {
        "type": "Base.1.0.1.0.PasswordNotSatisfyComplexity",
        "Message": "The password does not meet the complexity requirements.",
        "NumberOfArgs": 1,
        "Resolution": "The password must contain 8 to 20 characters, including at least two types of the following characters: uppercase letters, lowercase letters, digits, and must have at least one space or one of the following special characters: `~!@#$%^&*()-_=+\\|[{}];: '\",<.>/? The password cannot be the same as the username or the username in reverse order. The new password must have at least two different characters compared with the old password."
    },
    //    升级页面最新适配
    {
        "type": "Base.1.0.UnknownError",
        "Message": "An unknown bottom-layer error occurred on the device.",
        "NumberOfArgs": 0,
        "Resolution": "Try again. If the fault persists, contact Huawei engineers."
    },
    {
        "type": "Base.1.0.FilenameError",
        "Message": "The length of the update package name exceeds the upper limit.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure the length of the update package name meets the requirement and try again. If the error persists, contact Huawei engineers."
    },
    {
        "type": "Base.1.0.FileLengthError",
        "Message": "The size of the update package cannot be obtained, the size of the update package exceeds the limit, or the memory is insufficient.",
        "NumberOfArgs": 0,
        "Resolution": "Check the size of the update package and try again. If the error persists, contact Huawei engineers."
    },
    {
        "type": "Base.1.0.FileError",
        "Message": "File conversion failed in the update package.",
        "NumberOfArgs": 0,
        "Resolution": "Use a correct the update package file and try again. If the error persists, contact Huawei engineers."
    },
    {
        "type": "Base.1.0.ProtocolError",
        "Message": "During the conversion of the update package file, the conversion protocol cannot be used in the current environment.",
        "NumberOfArgs": 0,
        "Resolution": "Use a correct the update package file and try again. If the error persists, contact Huawei engineers."
    },
    {
        "type": "Base.1.0.FilePathError",
        "Message": "The update package path is incorrect.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure the path of the update package is correct and try again. If the error persists, contact Huawei engineers."
    },
    {
        "type": "Base.1.0.UpgradeFileError",
        "Message": "The update package does not exist.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the update package exists and try again. If the error persists, contact Huawei engineers."
    },
    {
        "type": "Base.1.0.InvalidFileError",
        "Message": "Invalid update file.",
        "NumberOfArgs": 0,
        "Resolution": "Use a valid update package and try again. If the error persists, contact Huawei engineers."
    },
    {
        "type": "Base.1.0.MemoryError",
        "Message": "The memory capacity is insufficient.",
        "NumberOfArgs": 0,
        "Resolution": "Try again. If the fault persists, contact Huawei engineers."
    },
    {
        "type": "Base.1.0.OSError",
        "Message": "After the OS is shut down, an error occurred during the BIOS update.",
        "NumberOfArgs": 0,
        "Resolution": "Try again. If the fault persists, contact Huawei engineers."
    },
    {
        "type": "Base.1.0.VersionError",
        "Message": "The firmware version does not match.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the firmware version is correct and try again. If the error persists, contact Huawei technical support."
    },
    {
        "type": "Base.1.0.MatchError",
        "Message": "The update package does not match the device to be updated.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the update package matches the device to be updated and try again. If the error persists, contact Huawei engineers."
    },
    {
        "type": "Base.1.0.BIOSError",
        "Message": "The BIOS fails because the ME status is incorrect.",
        "NumberOfArgs": 0,
        "Resolution": "Try again. If the fault persists, contact Huawei engineers."
    },
    {
        "type": "Base.1.0.UpgradeProgressError",
        "Message": "An error occurred during the update.",
        "NumberOfArgs": 0,
        "Resolution": "Try again. If the fault persists, contact Huawei engineers."
    },
    {
        "type": "Base.1.0.UpgradeError",
        "Message": "Update failed",
        "NumberOfArgs": 0,
        "Resolution": "Try again. If the fault persists, contact Huawei engineers."
    },
    //    chh
    {
        "type": 'Examine.1.0.GetServerInfoFailed',
        "Message": "Failed to obtain the server information. The server is {1}.",
        "NumberOfArgs": 1,
        "Resolution": "Ensure that the server is managed properly and submit the request again."

    },
    {
        "type": 'Examine.1.0.SaveExamineResultsFailed',
        "Message": "Failed to save the check result. The server is {1}.",
        "NumberOfArgs": 1,
        "Resolution": "Ensure that the server is managed properly and submit the request again."
    },
    {
        "type": 'Examine.1.0.ChangeCMDBStatusFailed',
        "Message": "Failed to set the CMDB status. The server is {1}.",
        "NumberOfArgs": 1,
        "Resolution": "Ensure that the network connection is normal, the user permission meets the requirements, and the device is recorded in the CMDB, and submit the request again."
    },
    {
        "type": 'Examine.1.0.DeviceOffline',
        "Message": "The server is offline and cannot be checked. The server is {1}.",
        "NumberOfArgs": 1,
        "Resolution": "Ensure that the server is managed properly and submit the request again."

    },
    {
        "type": 'Examine.1.0.DeviceLocked',
        "Message": "The server is locked and cannot be checked. The server is {1}.",
        "NumberOfArgs": 1,
        "Resolution": "Ensure that the server is managed properly and submit the request again."

    },
    {
        "type": 'Examine.1.0.GetCMDBStatusFailed',
        "Message": "Failed to obtain the CMDB status. The server is {1}.",
        "NumberOfArgs": 1,
        "Resolution": "Ensure that the network connection is normal, the user permission meets the requirements, and the device is recorded in the CMDB, and submit the request again."
    },
    {
        "type": 'Examine.1.0.ExportSPRaidFailed',
        "Message": "Failed to export the LSI SAS3008 RAID information. The server is {1}.",
        "NumberOfArgs": 1,
        "Resolution": "Ensure that the server is managed properly and submit the request again."
    },
    {
        "type": 'Examine.1.0.SPRaidModelError',
        "Message": "The RAID does not support out-of-band management and the RAID controller card is not LSI SAS3008. The server is {1}.",
        "NumberOfArgs": 1,
        "Resolution": "In-band RAID controller cards, expect LSI SAS3008, cannot be checked."
    },
    {
        "type": 'Examine.1.0.ResetInBandFailed',
        "Message": "Server in-band restart failed. The server is {1}.",
        "NumberOfArgs": 1,
        "Resolution": "Ensure that the server is managed properly and submit the request again."
    },
    {
        "type": 'Examine.1.0.PatchSPServiceFailed',
        "Message": "Failed to set the restart option for the server. The server is {1}.",
        "NumberOfArgs": 1,
        "Resolution": "Ensure that the server is managed properly and submit the request again."
    },
    {
        "type": 'Examine.1.0.GetSPResultFailed',
        "Message": "Failed to obtain the LSI SAS3008 export task information. The server is {1}.",
        "NumberOfArgs": 1,
        "Resolution": "Ensure that the server is managed properly and submit the request again."
    },
    {
        "type": 'Examine.1.0.GetSPTaskResultTimeout',
        "Message": "Obtaining the LSI SAS3008 export task information timed out. The server is {1}.",
        "NumberOfArgs": 1,
        "Resolution": "Reduce the number of check servers and submit the request again."
    },
    {
        "type": 'Examine.1.0.SPTaskFailed',
        "Message": "Failed to export the LSI SAS3008 information. The server is {1}.",
        "NumberOfArgs": 1,
        "Resolution": "Ensure that no other operation is performed on the server during the check and submit the request again."
    },
    {
        "type": 'Examine.1.0.CMDBStatusNotOnRack',
        "Message": "The server CMDB is in the removed state. The server is {1}.",
        "NumberOfArgs": 1,
        "Resolution": "Ensure that the server is in the installed state and submit the request again."
    },
    {
        "type": 'Examine.1.0.GetOptionIDFailed',
        "Message": "Failed to lock the server. The server is {1}.",
        "NumberOfArgs": 1,
        "Resolution": "Ensure that the server is managed properly and submit the request again."
    },
    {
        "type": 'Examine.1.0.CheckBIOSVersionFailed',
        "Message": "The server BIOS version {1} is too early. The BIOS version must be later than 0.39.",
        "NumberOfArgs": 1,
        "Resolution": "Update the server BIOS firmware and submit the request again."
    },
    {
        "type": 'Examine.1.0.CheckSPVersionFailed',
        "Message": "The server SP version {1} is too early. The SP version must be 1.13 or later.",
        "NumberOfArgs": 1,
        "Resolution": "Update the SP version of the server and submit the request again."
    },
    {
        "type": 'Examine.1.0.InternalError',
        "Message": "The request fails due to an internal error.",
        "NumberOfArgs": 1,
        "Resolution": "Submit the request again. If the problem recurs, restart the service."
    },
    {
        "type": 'Examine.1.0.InsufficientPrivilege',
        "Message": "Insufficient permission for performing operations on the device. The device is {1}.",
        "NumberOfArgs": 1,
        "Resolution": "Check the operation permission and scope, and try again after the permission is added or the scope is extended."
    },
    //    设备管理
    {
        "type": "FusionDirector.1.0.DevMgmtInternalError",
        "Message": "Internal error.",
        "NumberOfArgs": 0,
        "Resolution": "Contact Huawei engineers."
    },
    {
        "type": "FusionDirector.1.0.DevMgmtMissingServerInfo",
        "Message": "Server management information is lost.",
        "NumberOfArgs": 0,
        "Resolution": "Delete the server and add it to FusionDirector again."
    },
    {
        "type": "FusionDirector.1.0.DevMgmtConnectTimeout",
        "Message": "Connecting to the server timed out.",
        "NumberOfArgs": 0,
        "Resolution": "Check the server connection status."
    },
    {
        "type": "FusionDirector.1.0.DevMgmtAuthenticationFailed",
        "Message": "Authentication failed.",
        "NumberOfArgs": 0,
        "Resolution": "Incorrect username or password."
    },
    {
        "type": "FusionDirector.1.0.DevMgmtNotSupport",
        "Message": "Unknown model.",
        "NumberOfArgs": 0,
        "Resolution": "The devices of this type cannot be managed in FusionDirector."
    },
    {
        "type": "FusionDirector.1.0.DevMgmtGetServerUUIDFailed",
        "Message": "Failed to obtain the server UUID.",
        "NumberOfArgs": 0,
        "Resolution": "Check whether the server exists."
    },
    {
        "type": "FusionDirector.1.0.DevMgmtServerBeGoverning",
        "Message": "The device is being managed.",
        "NumberOfArgs": 0,
        "Resolution": "Operation restricted. Try again later."
    },
    {
        "type": "FusionDirector.1.0.DevMgmtServerHasBeenGoverned",
        "Message": "The server has been managed.",
        "NumberOfArgs": 0,
        "Resolution": "Do not add the server for management repeatedly."
    },
    {
        "type": "FusionDirector.1.0.DevMgmtFDRestart",
        "Message": "FusionDirector restarts.",
        "NumberOfArgs": 0,
        "Resolution": "None"
    },
    {
        "type": "DevMgmt.1.0.UnDefined",
        "Message": "Undefined error type.",
        "NumberOfArgs": 0,
        "Resolution": "Contact Huawei engineers."
    },
    {
        "type": "FusionDirector.1.0.DevMgmtOvertime",
        "Message": "Management timed out.",
        "NumberOfArgs": 0,
        "Resolution": "Delete the server and add it again."
    },
    {
        "type": "FusionDirector.1.0.DevMgmtServerManagedByOtherFD",
        "Message": "The server has been managed by another FusionDirector.",
        "NumberOfArgs": 0,
        "Resolution": "To prevent conflicts, a server can be managed by only one FusionDirector. If you want to manage the server, select the mandatory management option during retry."
    },
    //    系统升级
    {
        "type": "FDUpgrade.1.0.CheckEnvironmentFailed",
        "Message": "Environment check failed before the update.",
        "NumberOfArgs": 0,
        "Resolution": "Check whether the available disk space is sufficient."
    },
    {
        "type": "FDUpgrade.1.0.CheckEnvironmentSuccess",
        "Message": "The environment check is successful before the update.",
        "NumberOfArgs": 0,
        "Resolution": "None."
    },
    {
        "type": "FDUpgrade.1.0.CheckPackageFailed",
        "Message": "Failed to verify the update package.",
        "NumberOfArgs": 0,
        "Resolution": "Check whether the update package is valid."
    },
    {
        "type": "FDUpgrade.1.0.CheckPackageSuccess",
        "Message": "The update package is verified successfully.",
        "NumberOfArgs": 0,
        "Resolution": "None."
    },
    {
        "type": "FDUpgrade.1.0.UnzipPackageFailed",
        "Message": "Failed to decompress the update package.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the format of the update package is correct."
    },
    {
        "type": "FDUpgrade.1.0.UnzipPackageSuccess",
        "Message": "The update package is decompressed successfully.",
        "NumberOfArgs": 0,
        "Resolution": "None."
    },
    {
        "type": "FDUpgrade.1.0.UpgradeFailed",
        "Message": "Update failed.",
        "NumberOfArgs": 0,
        "Resolution": "Check whether the update package is available."
    },
    {
        "type": "FDUpgrade.1.0.UpgradeSuccess",
        "Message": "Update successful.",
        "NumberOfArgs": 0,
        "Resolution": "None."
    },
    //    配置规划
    {
        "type": 'ConfigService.1.0.ImportPlanningEncryptError',
        "Message": "Failed to encrypt the user information.",
        "NumberOfArgs": 0,
        "Resolution": "Submit the request again."

    },
    {
        "type": 'ConfigService.1.0.ImportPlanningWriteDBError',
        "Message": "Failed to write data to the database.",
        "NumberOfArgs": 0,
        "Resolution": "Submit the request again."
    },
    {
        "type": 'ConfigService.1.0.ImportPlanningWriteDHCPServerError',
        "Message": "Failed to write data to the dependent third-party service.",
        "NumberOfArgs": 0,
        "Resolution": "Submit the request again."
    },
    //    wei
    {
        "type": "Device.1.0.Updating",
        "Message": "The device is being updated.",
        "NumberOfArgs": 0,
        "Resolution": "Wait until the operation on the device is complete and try again."
    },
    {
        "type": "Device.1.0.DeployingProfile",
        "Message": "The profile is being applied on the device.",
        "NumberOfArgs": 0,
        "Resolution": "Wait until the operation on the device is complete and try again."
    },
    {
        "type": "Device.1.0.DeployingOS",
        "Message": "The OS is being installed on the device.",
        "NumberOfArgs": 0,
        "Resolution": "Wait until the operation on the device is complete and try again."
    },
    {
        "type": "Device.1.0.Reseting",
        "Message": "The device is being powered on or off.",
        "NumberOfArgs": 0,
        "Resolution": "Wait until the operation on the device is complete and try again."
    },
    {
        "type": "Device.1.0.CreatingBonding",
        "Message": "Network port binding is being created on the device.",
        "NumberOfArgs": 0,
        "Resolution": "Wait until the operation on the device is complete and try again."
    },
    {
        "type": "Device.1.0.ModifyingEthInfo",
        "Message": "The Ethernet port information is being modified on the device.",
        "NumberOfArgs": 0,
        "Resolution": "Wait until the operation on the device is complete and try again."
    },
    {
        "type": "Device.1.0.CreatingVLAN",
        "Message": "A VLAN network port is being created on the device.",
        "NumberOfArgs": 0,
        "Resolution": "Wait until the operation on the device is complete and try again."
    },
    {
        "type": "Device.1.0.ModifyingVLAN",
        "Message": "The information about the VLAN network port is being modified on the device.",
        "NumberOfArgs": 0,
        "Resolution": "Wait until the operation on the device is complete and try again."
    },
    {
        "type": "Device.1.0.SettingOSInstallParameter",
        "Message": "The OS parameters for SP deployment is being set on the device.",
        "NumberOfArgs": 0,
        "Resolution": "Wait until the operation on the device is complete and try again."
    },
    {
        "type": "Device.1.0.SettingCloneParameter",
        "Message": "The SP OS clone parameters are being set on the device.",
        "NumberOfArgs": 0,
        "Resolution": "Wait until the operation on the device is complete and try again."
    },
    {
        "type": "Device.1.0.SettingRecoverParameter",
        "Message": "The SP fast OS deployment parameters are being set on the device.",
        "NumberOfArgs": 0,
        "Resolution": "Wait until the operation on the device is complete and try again."
    },
    {
        "type": "Device.1.0.SettingVirtualMedia",
        "Message": "The device is mounting virtual media.",
        "NumberOfArgs": 0,
        "Resolution": "Wait until the operation on the device is complete and try again."
    },
    {
        "type": "Device.1.0.CreatingVolume",
        "Message": "The device is creating a logical disk.",
        "NumberOfArgs": 0,
        "Resolution": "Wait until the operation on the device is complete and try again."
    },
    {
        "type": "Device.1.0.ActivatingFirmware",
        "Message": "The firmware version is taking effect.",
        "NumberOfArgs": 0,
        "Resolution": "Wait until the operation on the device is complete and try again."
    },
    {
        "type": "Device.1.0.ModifyingAccount",
        "Message": "The default account information is being modified on the device.",
        "NumberOfArgs": 0,
        "Resolution": "Wait until the operation on the device is complete and try again."
    },
    {
        "type": "Device.1.0.ModifyingBonding",
        "Message": "The binding information of the network port is being modified on the device.",
        "NumberOfArgs": 0,
        "Resolution": "Wait until the operation on the device is complete and try again."
    },
    {
        "type": "Device.1.0.SettingBIOS",
        "Message": "The BIOS configuration is being modified on the device.",
        "NumberOfArgs": 0,
        "Resolution": "Wait until the operation on the device is complete and try again."
    },
    {
        "type": "Device.1.0.ModifyingSP",
        "Message": "The SP information is being configured on the device.",
        "NumberOfArgs": 0,
        "Resolution": "Wait until the operation on the device is complete and try again."
    },
    {
        "type": "Device.1.0.ModifyingVolume",
        "Message": "The logical disk information is being modified on the device.",
        "NumberOfArgs": 0,
        "Resolution": "Wait until the operation on the device is complete and try again."
    },
    {
        "type": "Device.1.0.DeletingBonding",
        "Message": "The network port binding is being deleted from the device.",
        "NumberOfArgs": 0,
        "Resolution": "Wait until the operation on the device is complete and try again."
    },
    {
        "type": "Device.1.0.DeletingVLAN",
        "Message": "The VLAN network port is being deleted from the device.",
        "NumberOfArgs": 0,
        "Resolution": "Wait until the operation on the device is complete and try again."
    },
    {
        "type": "Device.1.0.DeletingVolume",
        "Message": "The logical disk is being deleted from the device.",
        "NumberOfArgs": 0,
        "Resolution": "Wait until the operation on the device is complete and try again."
    },
    {
        "type": "Device.1.0.DeletingDevice",
        "Message": "The device is being deleted.",
        "NumberOfArgs": 0,
        "Resolution": "Wait until the operation on the device is complete and try again."
    },
    {
        "type": "Node.1.0.OperateDatabseError",
        "Message": "Failed to access the database.",
        "NumberOfArgs": 0,
        "Resolution": "Submit the request again."
    },
    {
        "type": "Task.1.0.Timeout",
        "Message": "Task execution timed out.",
        "NumberOfArgs": 0,
        "Resolution": "Please resubmit the request."
    },
    {
        "type": "Task.1.0.ServiceRestart",
        "Message": "FusionDirector is restarted.",
        "NumberOfArgs": 0,
        "Resolution": "Perform the action again."
    },
    {
        "type": "Deploy.1.0.OperateRedisError",
        "Message": "Failed to read the cache data.",
        "NumberOfArgs": 0,
        "Resolution": "Submit the request again."
    },
    {
        "type": "Deploy.1.0.ImageSizeError",
        "Message": "Invalid image size.",
        "NumberOfArgs": 0,
        "Resolution": "Upload a new image and submit the request again."
    },
    {
        "type": "Deploy.1.0.CheckCodeError",
        "Message": "Invalid image verification code.",
        "NumberOfArgs": 0,
        "Resolution": "Enter a correct verification code and submit the request again."
    },
    {
        "type": "Deploy.1.0.MoveImageError",
        "Message": "Failed to move the image.",
        "NumberOfArgs": 0,
        "Resolution": "Submit the request again."
    },
    {
        "type": "Deploy.1.0.OperateDatabseError",
        "Message": "Failed to access the database.",
        "NumberOfArgs": 0,
        "Resolution": "Submit the request again."
    },
    {
        "type": "Task.1.0.InternalError",
        "Message": "Internal error.",
        "NumberOfArgs": 0,
        "Resolution": "Submit the request again."
    },
    {
        "type": "Deploy.1.0.IllegalParameter",
        "Message": "Invalid task parameter. The parameter is {1}.",
        "NumberOfArgs": 1,
        "Resolution": "Modify the parameter and submit the request again."
    },
    {
        "type": "Deploy.1.0.CheckDeviceFailed",
        "Message": "Failed to verify the device information.",
        "NumberOfArgs": 0,
        "Resolution": "Submit the request again."
    },
    {
        "type": "Deploy.1.0.SetDeployParamError",
        "Message": "Failed to set deployment parameters.",
        "NumberOfArgs": 0,
        "Resolution": "Submit the request again."
    },
    {
        "type": "Deploy.1.0.LinkVirMediaError",
        "Message": "Failed to mount the virtual media.",
        "NumberOfArgs": 0,
        "Resolution": "Submit the request again."
    },
    {
        "type": "Deploy.1.0.SetSPStartError",
        "Message": "Failed to start and restart the device on the SP.",
        "NumberOfArgs": 0,
        "Resolution": "Submit the request again."
    },
    {
        "type": "Deploy.1.0.DeployOSFailed",
        "Message": "Failed to deploy the device. Possible causes are as follows: 1. The selected operating system language is not supported. 2. The image version number does not match. 3. The boot disk is not set.",
        "NumberOfArgs": 0,
        "Resolution": "Please resubmit the request."
    },
    {
        "type": "Device.1.0.DeviceFault",
        "Message": "The device is faulty.",
        "NumberOfArgs": 0,
        "Resolution": "Check the device and submit the request again."
    },

    //ibmc庄户管理
    {
        "type": 'iBMC.1.0.PasswordNotSatisfyComplexity',
        "Message": "The password complexity does not comply with the password complexity rules of the device.",
        "NumberOfArgs": 1,
        "Resolution": "Change the password based on the password complexity rules of the device and submit the request again."
    },
    {
        "type": 'Base.1.0.ResourceAlreadyExists',
        "Message": "The username already exists.",
        "NumberOfArgs": 1,
        "Resolution": "Change the username and submit the request again."
    },
    {
        "type": 'iBMC.1.0.InvalidPasswordSameWithHistory',
        "Message": "Invalid password. The password cannot be the same as the historical password.",
        "NumberOfArgs": 1,
        "Resolution": "Change the password and submit the request again."
    },

    {
        "type": 'iBMC.1.0.PropertyValueExceedsMaxLength',
        "Message": "The username and password cannot exceed 16 characters.",
        "NumberOfArgs": 1,
        "Resolution": "Use a valid username and submit the request again."
    },
    {
        "type": 'iBMC.1.0.InvalidPassword',
        "Message": "The password is invalid or is null.",
        "NumberOfArgs": 1,
        "Resolution": "Use a correct password to try again."
    },
    {
        "type": 'iBMC.1.0.PasswordInWeakPWDDict',
        "Message": "Weak password.",
        "NumberOfArgs": 1,
        "Resolution": "Change the password and submit the request again."
    },
    {
        "type": 'Enclosure.1.0.TaskSubCallFail',
        "Message": "Failed to query the progress.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the device connection is normal, refresh the chassis, and submit the request again."

    },
    {
        "type": 'Enclosure.1.0.TaskExecFail',
        "Message": "Task failed.",
        "NumberOfArgs": 0,
        "Resolution": "Contact Huawei engineers."
    },
    {
        "type": 'Enclosure.1.0.TaskExecTimeout',
        "Message": "Task execution timed out.",
        "NumberOfArgs": 0,
        "Resolution": "Contact Huawei engineers."
    },
    {
        "type": 'Enclosure.1.0.TaskApplyFail',
        "Message": "Chassis configuration delivery partially failed. Failure: {1}; Success: {2}",
        "NumberOfArgs": 2,
        "Resolution": "Deliver the configuration again for the failure modules."
    },
    //日志
    {
        "type": 'Examine.1.0.QueryMacTableFailed',
        "Message": "Failed to query the MAC address entry. The device is {1}.",
        "NumberOfArgs": 1,
        "Resolution": "Ensure that the switch module functions properly and submit the request again."
    },
    {
        "type": 'Examine.1.0.CollectSwitchLogFailed',
        "Message": "Failed to collect switch logs. The switch module is {1}.",
        "NumberOfArgs": 1,
        "Resolution": "Ensure that the switch module functions properly and submit the request again."
    },
    {
        "type": 'Examine.1.0.CollectSwitchLogBySlotFailed',
        "Message": "Failed to collect switch logs. The chassis ID is {1}.",
        "NumberOfArgs": 1,
        "Resolution": "Ensure that the switch module functions properly and submit the request again."
    },
    {
        "type": 'Examine.1.0.CollectSwitchLogBySlotPartiallyFinish',
        "Message": "The log collection of the switch module is partially successful. The failed planes are: {1}",
        "NumberOfArgs": 1,
        "Resolution": "Ensure that the switch module functions properly and submit the request again."
    },
    {
        "type": 'Examine.1.0.Timeout',
        "Message": "Operation timed out.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the device functions properly and submit the request again."
    },
    {
        "type": "Device.1.0.ModifyingBMCIPv4",
        "Message": "The IPv4 address of the management network port is being modified on the device.",
        "NumberOfArgs": 0,
        "Resolution": "The IPv4 address of the management network port is being modified on the device. Please try again later."
    },
    {
        "type": 'FusionDirector.1.0.DevMgmtMacOrSnMiss',
        "Message": "The MAC address or SN of the device is missing.",
        "NumberOfArgs": 0,
        "Resolution": "Check whether the MAC address or SN of the device is correct."
    },
    {
        "type": "Upgrade.1.0.UnknownErr",
        "Message": "Unknown error.",
        "NumberOfArgs": 0,
        "Resolution": "Contact Huawei engineers."
    },
    {
        "type": "Upgrade.1.0.UpgradeFailedErr",
        "Message": "Update task timed out.",
        "NumberOfArgs": 0,
        "Resolution": "Deliver the update task again."
    },
    {
        "type": "Upgrade.1.0.TaskTimeOutErr",
        "Message": "Task processing timed out.",
        "NumberOfArgs": 0,
        "Resolution": "Deliver the update task again."
    },
    {
        "type": "Upgrade.1.0.DoActiveProcessing",
        "Message": "The effective task is being executed.",
        "NumberOfArgs": 0,
        "Resolution": "None"
    },
    {
        "type": "Upgrade.1.0.DoActiveFailedErr",
        "Message": "Task failed.",
        "NumberOfArgs": 0,
        "Resolution": "None"
    },
    {
        "type": "Upgrade.1.0.SetDeviceLockFailedErr",
        "Message": "Failed to operate the device.",
        "NumberOfArgs": 0,
        "Resolution": "Deliver the update task again."
    },
    {
        "type": "Upgrade.1.0.GetDeviceLockFailedErr",
        "Message": "Operation conflict. Other operations are being performed on the device.",
        "NumberOfArgs": 0,
        "Resolution": "Check whether other configurations are being performed on the device. If the device is idle, deliver the update task again."
    },
    {
        "type": "Upgrade.1.0.PostFirmwareActivateFailedErr",
        "Message": "Failed to deliver the effective command.",
        "NumberOfArgs": 0,
        "Resolution": "Deliver the update task again."
    },
    {
        "type": "Upgrade.1.0.UpgradeFinish",
        "Message": "Update successful.",
        "NumberOfArgs": 0,
        "Resolution": "None"
    },
    {
        "type": "Upgrade.1.0.DoUpgradeProcessing",
        "Message": "The update task is being executed.",
        "NumberOfArgs": 0,
        "Resolution": "None"
    },
    {
        "type": "Upgrade.1.0.GetDeivceInfoFailedErr",
        "Message": "Failed to obtain the information about the device to be updated.",
        "NumberOfArgs": 0,
        "Resolution": "Check the update device and deliver the update task again."
    },
    {
        "type": "Upgrade.1.0.GetDeivceIDFailedErr",
        "Message": "Failed to obtain the ID of the device to be updated.",
        "NumberOfArgs": 0,
        "Resolution": "Check the update device and deliver the update task again."
    },
    {
        "type": "Upgrade.1.0.GetActiveStatusAndVersionByIDFailedErr",
        "Message": "Failed to obtain the device effective status.",
        "NumberOfArgs": 0,
        "Resolution": "Deliver the update task again."
    },
    {
        "type": "Upgrade.1.0.DeviceActiveStatusIsNoActive",
        "Message": "The device is in the to-take-effect state and cannot be updated.",
        "NumberOfArgs": 0,
        "Resolution": "Manually make the device take effect and then perform the update task."
    },
    {
        "type": "Upgrade.1.0.PostUpgradeFailedErr",
        "Message": "Failed to deliver the update task.",
        "NumberOfArgs": 0,
        "Resolution": "Check the network or the device to be updated and deliver the update task again."
    },
    {
        "type": "Upgrade.1.0.GetNewJsonFailedErr",
        "Message": "An internal error occurred during the update.",
        "NumberOfArgs": 0,
        "Resolution": "Deliver the update task again."
    },
    {
        "type": "Upgrade.1.0.GetMissedDeviceIDsFailedErr",
        "Message": "An internal error occurred during the update.",
        "NumberOfArgs": 0,
        "Resolution": "Deliver the update task again."
    },
    {
        "type": "Upgrade.1.0.GetUpgProgressFailedErr",
        "Message": "An internal error occurred in task management when the update progress is being obtained.",
        "NumberOfArgs": 0,
        "Resolution": "Deliver the update task again."
    },
    {
        "type": "Upgrade.1.0.GetUpgProgressRespFailedErr",
        "Message": "Failed to obtain the MCU update progress.",
        "NumberOfArgs": 0,
        "Resolution": "Deliver the update task again."
    },
    {
        "type": "Upgrade.1.0.UnmarshalFailedErr",
        "Message": "Failed to convert the task information in deserialization mode.",
        "NumberOfArgs": 0,
        "Resolution": "Deliver the update task again."
    },
    {
        "type": "Upgrade.1.0.GetProgressInfoFailedErr",
        "Message": "An internal error occurred when obtaining the update progress.",
        "NumberOfArgs": 0,
        "Resolution": "Deliver the update task again."
    },
    {
        "type": "Upgrade.1.0.GetProgressInfoStatusFailedErr",
        "Message": "Failed to obtain the update status in the update information.",
        "NumberOfArgs": 0,
        "Resolution": "Deliver the update task again."
    },
    {
        "type": "Upgrade.1.0.GetProgressInfoProgressFailedErr",
        "Message": "Failed to obtain the update progress in the update information.",
        "NumberOfArgs": 0,
        "Resolution": "Deliver the update task again."
    },
    {
        "type": "Upgrade.1.0.GetProgressDataFailedErr",
        "Message": "An internal error occurred when obtaining the update progress.",
        "NumberOfArgs": 0,
        "Resolution": "Deliver the update task again."
    },
    {
        "type": "Upgrade.1.0.GetProgressMesgsFailedErr",
        "Message": "Failed to obtain the update progress.",
        "NumberOfArgs": 0,
        "Resolution": "Deliver the update task again."
    },
    {
        "type": "Upgrade.1.0.GetProgressMesgFailedErr",
        "Message": "Failed to obtain the update progress.",
        "NumberOfArgs": 0,
        "Resolution": "Deliver the update task again."
    },
    {
        "type": "Upgrade.1.0.Message2MessageIdFailedErr",
        "Message": "Failed to obtain the update progress. An internal error occurred.",
        "NumberOfArgs": 0,
        "Resolution": "Deliver the update task again."
    },
    {
        "type": "Upgrade.1.0.DoUpgradeFailedErr",
        "Message": "Update task failed. An internal error occurred.",
        "NumberOfArgs": 0,
        "Resolution": "Deliver the update task again."
    },
    {
        "type": "Upgrade.1.0.StartUpgrade",
        "Message": "The update task is started.",
        "NumberOfArgs": 0,
        "Resolution": "None"
    },
    {
        "type": "Upgrade.1.0.StartActive",
        "Message": "The effective task is started.",
        "NumberOfArgs": 0,
        "Resolution": "None"
    },
    {
        "type": "Upgrade.1.0.StartImportFile",
        "Message": "The file import task is started.",
        "NumberOfArgs": 0,
        "Resolution": ""
    },
    {
        "type": "Upgrade.1.0.StartSubUpgrade",
        "Message": "The update subtask is started.",
        "NumberOfArgs": 0,
        "Resolution": "None"
    },
    {
        "type": "Upgrade.1.0.DoUploadFileFailedErr",
        "Message": "Failed to import the file.",
        "NumberOfArgs": 0,
        "Resolution": "Import the file again."
    },
    {
        "type": "Upgrade.1.0.DoUploadFileProcessing",
        "Message": "The file is being imported.",
        "NumberOfArgs": 0,
        "Resolution": "None"
    },
    {
        "type": "Upgrade.1.0.UploadFileOK",
        "Message": "File imported successfully.",
        "NumberOfArgs": 0,
        "Resolution": "None"
    },
    {
        "type": "Upgrade.1.0.GetActiveModeByPathErr",
        "Message": "Failed to obtain the firmware package effective information.",
        "NumberOfArgs": 0,
        "Resolution": "Check the firmware package and deliver the update task again."
    },
    {
        "type": "Upgrade.1.0.UpgradeSameVersionFailedErr",
        "Message": "Update failed because the source and target versions are the same.",
        "NumberOfArgs": 0,
        "Resolution": "Filter out the update tasks that have the same source and target versions."
    },
    {
        "type": "Upgrade.1.0.UpgradingEnclosureLockErr",
        "Message": "Internal error.",
        "NumberOfArgs": 0,
        "Resolution": "Deliver the upgrade task again."
    },
    {
        "type": "Upgrade.1.0.BuildAsyncTaskSignatureErr",
        "Message": "Internal error.",
        "NumberOfArgs": 0,
        "Resolution": "Deliver the upgrade task again."
    },
    {
        "type": "Upgrade.1.0.SendAsyncTaskSignatureErr",
        "Message": "Internal error.",
        "NumberOfArgs": 0,
        "Resolution": "Deliver the upgrade task again."
    },
    {
        "type": "Upgrade.1.0.PostUpgradeRequestErr",
        "Message": "Failed to deliver the update task.",
        "NumberOfArgs": 0,
        "Resolution": "Check the network or the device to be updated and deliver the update task again."
    },
    {
        "type": "Upgrade.1.0.UpgradeResponseCodeErr",
        "Message": "Failed to deliver the update task.",
        "NumberOfArgs": 0,
        "Resolution": "Check the network or the device to be updated and deliver the update task again."
    },
    {
        "type": "Upgrade.1.0.DeviceNotUpgradeErr",
        "Message": "The device is not updated.",
        "NumberOfArgs": 0,
        "Resolution": "Deliver the update task again."
    },
    {
        "type": "Upgrade.1.0.DoUpgradeFinish",
        "Message": "Update successful.",
        "NumberOfArgs": 0,
        "Resolution": "None"
    },
    {
        "type": "Upgrade.1.0.DoActiveFinish",
        "Message": "Taken effect successfully.",
        "NumberOfArgs": 0,
        "Resolution": "None"
    },
    {
        "type": "Upgrade.1.0.CheckManagerUpgradeStatusErr",
        "Message": "The update of the management module is incorrect and does not take effect.",
        "NumberOfArgs": 0,
        "Resolution": "Check the network or the device to be updated and deliver the update task again."
    },
    {
        "type": "Upgrade.1.0.CheckUpgradeParaErr",
        "Message": "Incorrect update parameter.",
        "NumberOfArgs": 0,
        "Resolution": "Deliver the update task again."
    },
    {
        "type": 'iBMC.1.0.FruNotExist',
        "Message": "The switch plane {1} does not exist.",
        "NumberOfArgs": 1,
        "Resolution": "Ensure that the switch plane exists and try again."

    },
    {
        "type": 'iBMC.1.0.ActionFailedByPowerOff',
        "Message": "Switch plane power control operation failed. The switch plane is powered off now.",
        "NumberOfArgs": 1,
        "Resolution": "Ensure that the device is powered on and try again."
    },
    {
        "type": "iBMC.1.0.BladeNotPresent",
        "Message": "The board is not in position.",
        "NumberOfArgs": 0,
        "Resolution" : "Select a board that is in position."
    },
    {
        "type": "iBMC.1.0.PowerCappingValueLessThanAllowed",
        "Message": "The current power capping value is smaller than the minimum value {2}.",
        "NumberOfArgs": 2,
        "Resolution" : "Change the power capping value and submit the request again."
    },
    {
        "type": "iBMC.1.0.PowerCappingValueGreatThanCapacity",
        "Message": "The current power capping value {1} is greater than the maximum value {2}. ",
        "NumberOfArgs": 2,
        "Resolution" : "Change the power capping value and submit the request again."
    },
    {
        "type": "iBMC.1.0.CapacityValueLessThanDemand",
        "Message": "The maximum power {1} is smaller than the required value {2}. ",
        "NumberOfArgs": 2,
        "Resolution" : "Change the power capping value and submit the request again."
    },
    {
        "type": "iBMC.1.0.PowerCappingValueSetFailed",
        "Message": "Failed to set the chassis power capping value.",
        "NumberOfArgs": 0,
        "Resolution" : "Contact Huawei engineers."
    },
    {
        "type": "iBMC.1.0.PowerCappingBladeValueSetFailed",
        "Message": "Failed to set the blade power capping value.",
        "NumberOfArgs": 0,
        "Resolution" : "Contact Huawei engineers."
    },
    {
        "type": "iBMC.1.0.NoPowerCappingValueForTheBlade",
        "Message": "The remaining power capping value is insufficient.",
        "NumberOfArgs": 0,
        "Resolution" : "Change the power capping value and submit the request again."
    },
    {
        "type": "iBMC.1.0.SmartCoolingModeConflictWithControlMode",
        "Message": "The intelligent cooling mode and manual mode cannot be used at the same time.",
        "NumberOfArgs": 0,
        "Resolution" : "Change the power capping mode and submit the request again."
    },
    {
        "type": "Upgrade.1.0.CheckDoUpgradeNumErr",
        "Message": "Failed to obtain the number of current update tasks.",
        "NumberOfArgs": 0,
        "Resolution": "Deliver the update task again."
    },
    {
        "type": "Config.1.0.UnknownErr",
        "Message": "Unknown error.",
        "NumberOfArgs": 0,
        "Resolution": "Contact Huawei engineers to locate the fault."
    },
    {
        "type": "Config.1.0.TaskTimeOutErr",
        "Message": "Task processing timed out.",
        "NumberOfArgs": 0,
        "Resolution": "Deliver the configuration again."
    },
    {
        "type": "Config.1.0.BIOSActiveFailedErr",
        "Message": "The BIOS fails to take effect.",
        "NumberOfArgs": 0,
        "Resolution": "Deliver the configuration again."
    },
    {
        "type": "Config.1.0.RAIDConfigFailedErr",
        "Message": "RAID configuration failed.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the disk status is normal and deliver the configuration again."
    },
    {
        "type": "Config.1.0.ResetFailedErr",
        "Message": "Failed to issue the restart command.",
        "NumberOfArgs": 0,
        "Resolution": "Deliver the configuration again."
    },
    {
        "type": "Config.1.0.RAIDInfoCheckingFailedErr",
        "Message": "RAID verification failed.",
        "NumberOfArgs": 0,
        "Resolution": "Check the RAID configuration and deliver the configuration task again."
    },
    {
        "type": "Config.1.0.RAIDInfoCheckNotPassErr",
        "Message": "Failed to pass the RAID check.",
        "NumberOfArgs": 0,
        "Resolution": "Check the RAID configuration and deliver the configuration task again."
    },
    {
        "type": "Config.1.0.MEZZConfigFailedErr",
        "Message": "Mezzanine card configuration failed.",
        "NumberOfArgs": 0,
        "Resolution": "Check the mezzanine card configuration and deliver the configuration task again."
    },
    {
        "type": "Config.1.0.GetOperationIDFailedErr",
        "Message": "Operation conflict. Other operations are being performed on the device.",
        "NumberOfArgs": 0,
        "Resolution": "Check whether other configurations are being performed on the device. If the device is idle, deliver the configuration task again."
    },
    {
        "type": "Config.1.0.GetEthernetFailedErr",
        "Message": "Failed to obtain the configuration network information.",
        "NumberOfArgs": 0,
        "Resolution": "Check the network port and deliver the configuration task again."
    },
    {
        "type": "Config.1.0.ConfigEthernetFailedErr",
        "Message": "Failed to deliver the network configuration.",
        "NumberOfArgs": 0,
        "Resolution": "Check the network configuration and deliver the configuration task again."
    },
    {
        "type": "Config.1.0.GetErrInfoFromRespFailedErr",
        "Message": "The response body is abnormal.",
        "NumberOfArgs": 0,
        "Resolution": "Check the configuration and deliver the configuration task again."
    },
    {
        "type": "Config.1.0.GetFDAsNTPServerJs",
        "Message": " Failed to check whether the current device functions as the NTP server.",
        "NumberOfArgs": 0,
        "Resolution": "Deliver the configuration again."
    },
    {
        "type": "Config.1.0.MarshalFailedErr",
        "Message": "Failed to convert the configuration information serialization.",
        "NumberOfArgs": 0,
        "Resolution": "Deliver the configuration again."
    },
    {
        "type": "Config.1.0.GetSouthOutBandIPFromClusterFailedErr",
        "Message": "Failed to obtain the southbound IP address from the NTP configuration.",
        "NumberOfArgs": 0,
        "Resolution": "Deliver the configuration again."
    },
    {
        "type": "Config.1.0.UnmarshalFailedErr",
        "Message": "Failed to convert the configuration information in deserialization mode.",
        "NumberOfArgs": 0,
        "Resolution": "Deliver the configuration again."
    },
    {
        "type": "Config.1.0.ConfigNTPFailedErr",
        "Message": "Failed to configure NTP.",
        "NumberOfArgs": 0,
        "Resolution": "Deliver the configuration again."
    },
    {
        "type": "Config.1.0.JsonToStringFailedErr",
        "Message": "Failed to convert the JSON format to a string.",
        "NumberOfArgs": 0,
        "Resolution": "Deliver the configuration again."
    },
    {
        "type": "Config.1.0.ConfigParamFailedErr",
        "Message": "Failed to configure the {1}.",
        "NumberOfArgs": 1,
        "Resolution": "Modify the configuration parameters and deliver the configuration again."
    },
    {
        "type": "Config.1.0.GetNTPKeyFromClusterMgmtFailedErr",
        "Message": "Failed to obtain the NTP key from the cluster.",
        "NumberOfArgs": 0,
        "Resolution": "Deliver the configuration again."
    },
    {
        "type": "Config.1.0.GetNTPKeyURLFailedErr",
        "Message": "Failed to configure the NTP server key.",
        "NumberOfArgs": 0,
        "Resolution": "Check the key format and deliver the configuration again."
    },
    {
        "type": "Config.1.0.CheckLDAPEnableConfigFailedErr",
        "Message": "Failed to check the input format of the LDAP group application folder.",
        "NumberOfArgs": 0,
        "Resolution": "Change the format of the LDAP group application folder and deliver the configuration again."
    },
    {
        "type": "Config.1.0.GetLoginRuleFailedErr",
        "Message": "Failed to check the login rule.",
        "NumberOfArgs": 0,
        "Resolution": "Deliver the configuration again."
    },
    {
        "type": "Config.1.0.ConfigLDAPEnableFailedErr",
        "Message": "Failed to enable the LDAP function.",
        "NumberOfArgs": 0,
        "Resolution": "Deliver the configuration again."
    },
    {
        "type": "Config.1.0.ConfigLoginRuleFailedErr",
        "Message": "Failed to configure the login rule.",
        "NumberOfArgs": 0,
        "Resolution": "Deliver the configuration again."
    },
    {
        "type": "Config.1.0.CheckNTPAttrFailedErr",
        "Message": "Failed to obtain the NTP configuration attributes.",
        "NumberOfArgs": 0,
        "Resolution": "Deliver the configuration again."
    },
    {
        "type": "Config.1.0.ConfigNTPAttrFailedErr",
        "Message": "Failed to configure NTP attributes.",
        "NumberOfArgs": 0,
        "Resolution": "Deliver the configuration again."
    },
    {
        "type": "Config.1.0.GetFirstEthFailedErr",
        "Message": "Failed to obtain the configuration of the first network port.",
        "NumberOfArgs": 0,
        "Resolution": "Deliver the configuration again."
    },
    {
        "type": "Config.1.0.GetMezz520Or522DynamicDataMacFailedErr",
        "Message": "The MAC address of the MZ520 or MZ522 stateless data fails to be obtained.",
        "NumberOfArgs": 0,
        "Resolution": "Deliver the configuration again."
    },
    {
        "type": "Config.1.0.GetMezz520Or522DynamicDataWWNFailedErr",
        "Message": "The WWN of the MZ520 or MZ522 stateless data fails to be obtained.",
        "NumberOfArgs": 0,
        "Resolution": "Deliver the configuration again."
    },
    {
        "type": "Config.1.0.GetMezz520Or522DynamicDataVlanFailedErr",
        "Message": "The VLAN of the MZ520 or MZ522 stateless data fails to be obtained.",
        "NumberOfArgs": 0,
        "Resolution": "Deliver the configuration again."
    },

    {
        "type": "Config.1.0.ConfigFabricsModeFailedErr",
        "Message": "Failed to configure the topology mode.",
        "NumberOfArgs": 0,
        "Resolution": "Deliver the configuration again."
    },
    {
        "type": "Config.1.0.ConfigFabricesFailedErr",
        "Message": "Failed to configure the topology mode.",
        "NumberOfArgs": 0,
        "Resolution": "Deliver the configuration again."
    },
    {
        "type": "Config.1.0.InputModeFailedErr",
        "Message": "Failed to configure the input parameter {1}. Check the parameter settings and deliver the configuration again.",
        "NumberOfArgs": 1,
        "Resolution": "Deliver the configuration again."
    },
    //mkx
    {
        "type": 'Backup.1.0.GetClusterMasterNodeFailed',
        "Message": "Backup failed because the system environment is abnormal.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the system environment is normal and submit the request again."

    },
    {
        "type": 'Backup.1.0.ExportDataFromDBFailed',
        "Message": "Backup failed because the system environment is abnormal.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the database is running properly and submit the request again."
    },
    {
        "type": 'Backup.1.0.GetBackupFilesFailed',
        "Message": "Backup failed because the system environment is abnormal.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the system environment is normal and submit the request again."
    },
    {
        "type": 'Backup.1.0.CompressDataFailed',
        "Message": "An internal error occurred. The backup failed.",
        "NumberOfArgs": 0,
        "Resolution": "An internal error occurred. Contact Huawei engineers."

    },
    {
        "type": 'Restore.1.0.EnvCheckFailed',
        "Message": "Failed to check the restoration environment.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the version of the backup package is compatible with the current system version, and submit the request again."

    },
    {
        "type": 'Restore.1.0.EnvPrepareFailed',
        "Message": "Failed to prepare the restoration environment.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the backup package data is complete and submit the request again."

    },
    {
        "type": 'Restore.1.0.ImportDataToDBFailed',
        "Message": "Failed to restore the system because the system environment is abnormal.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the database is running properly and submit the request again."

    },
    {
        "type": 'Restore.1.0.RetoreServiceFilesFailed',
        "Message": "Failed to restore the system because the system environment is abnormal.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the system environment is normal and submit the request again."

    },
    {
        "type": 'Restore.1.0.UpdateSerivceFailed',
        "Message": "An internal error occurred. Restoring failed.",
        "NumberOfArgs": 0,
        "Resolution": "An internal error occurred. Contact Huawei engineers."

    },
    {
        "type": 'Upgrade.1.0.EnvCheckFailed',
        "Message": "Failed to check the update environment.",
        "NumberOfArgs": 0,
        "Resolution": "Check whether the disk space is sufficient and whether the version is compatible."

    },
    {
        "type": 'Upgrade.1.0.EnvPrepareFailed',
        "Message": "Failed to prepare the update environment.",
        "NumberOfArgs": 0,
        "Resolution": "Check whether the update package is complete and submit the request again."

    },
    {
        "type": 'Upgrade.1.0.UpgradeFailed',
        "Message": "Failed to take effect.",
        "NumberOfArgs": 0,
        "Resolution": "An internal error occurred. Contact Huawei engineers."

    },
    {
        "type": 'Activated.1.0.ActivatedFailed',
        "Message": "Failed to take effect.",
        "NumberOfArgs": 0,
        "Resolution": "An internal error occurred. Contact Huawei engineers."

    },
    {
        "type": 'Activated.1.0.VersionCheckedFailed',
        "Message": "Failed to check the version effective status.",
        "NumberOfArgs": 0,
        "Resolution": "An internal error occurred. Contact Huawei engineers."

    },
    {
        "type": 'Upgrade.1.0.DuplicateUpgradeFailed',
        "Message": "The version of the upgrade package is the same as the version to be validated.",
        "NumberOfArgs": 0,
        "Resolution": "Validate the current version of the system, or upload the upgrade package of another version and perform the upgrade again."

    },
    {
        "type": 'Upgrade.1.0.GetCurrentVersionFailed',
        "Message": "Current versions of clustered nodes are inconsistent.",
        "NumberOfArgs": 0,
        "Resolution": "None."

    },
    {
        "type": 'Upgrade.1.0.GetInactiveVersionFailed',
        "Message": "Effective versions of clustered nodes are inconsistent.",
        "NumberOfArgs": 0,
        "Resolution": "None."

    },
    //    lgy
    {
        "type": 'DevMgmt.1.0.ServerIsNotGoverned',
        "Message": "The server is not managed.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the server is managed properly and submit the request again."
    },
    {
        "type": 'DevMgmt.1.0.ServerStateIsNotOnline',
        "Message": "The server is offline.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the server is online and submit the request again."
    },
    {
        "type": 'DevMgmt.1.0.ServerCallBMCRestoreFactoryError',
        "Message": "Failed to restore the BMC to factory defaults.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the network connection is normal and the user permission meets the requirements, and submit the request again."
    },
    {
        "type": 'DevMgmt.1.0.ServerIsNotExist',
        "Message": "The service does not exist.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the server is managed properly and submit the request again."

    },
    {
        "type": 'DevMgmt.1.0.ServerLinkStateIsNotEnable',
        "Message": "The heartbeat of the server is lost.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the server is managed properly and submit the request again."

    },
    {
        "type": 'DevMgmt.1.0.ServerPowerStateIsOn',
        "Message": "The server is powered on in band.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the server is powered off in band and submit the request again."

    },
    {
        "type": 'DevMgmt.1.0.ServerReleaseRepeated',
        "Message": "Duplicate server logout request.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the server does not send a logout request and submit the request again."
    },
    {
        "type": 'DevMgmt.1.0.ServerDeleteFailed',
        "Message": "The server is restored to factory defaults successfully but fails to be removed.",
        "NumberOfArgs": 0,
        "Resolution": "Submit the request again or manually delete the server."
    },
    {
        "type": 'DevMgmt.1.0.CallBMCError',
        "Message": "Failed to call the server interface.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the network connection is normal and the user permission meets the requirements, and submit the request again."
    },
    {
        "type": 'Network.1.0.InternalError',
        "Message": "Internal error.",
        "NumberOfArgs": 0,
        "Resolution": "An internal error occurred. Contact Huawei engineers."
    },
    {
        "type": 'Network.1.0.QueryMacTableFailed',
        "Message": "Failed to query the MAC address entry. The device is {1}.",
        "NumberOfArgs": 1,
        "Resolution": "Ensure that the switch module functions properly and submit the request again."
    },
    {
        "type": 'Network.1.0.CollectSwitchLogFailed',
        "Message": "Failed to collect switch logs. The switch module is {1}.",
        "NumberOfArgs": 1,
        "Resolution": "Ensure that the switch module functions properly and submit the request again."
    },
    {
        "type": 'Network.1.0.CollectSwitchLogBySlotFailed',
        "Message": "Failed to collect switch logs. The chassis ID is {1}.",
        "NumberOfArgs": 1,
        "Resolution": "Ensure that the switch module functions properly and submit the request again."
    },
    {
        "type": 'Network.1.0.CollectSwitchLogBySlotPartiallyFinish',
        "Message": "The log collection of the switch module is partially successful. The failed planes are: {1}",
        "NumberOfArgs": 1,
        "Resolution": "Ensure that the switch module functions properly and submit the request again."
    },
    {
        "type": 'Network.1.0.Timeout',
        "Message": "Operation timed out.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the device functions properly and submit the request again."
    },
    {
        "type": 'Network.1.0.HealthCheckAbnormal',
        "Message": "The switch status is abnormal, and the update is aborted. The list of abnormal devices is as follows: {1}.",
        "NumberOfArgs": 1,
        "Resolution": "Ensure that the device status is normal and submit the request again."
    },
    {
        "type": 'Network.1.0.FirmwareUpgradeFailed',
        "Message": "Failed to update firmware.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the device status is normal and submit the request again."
    },
    {
        "type": 'Network.1.0.FirmwareUpgradeAbort',
        "Message": "Update aborted because the switch firmware update fails in the chassis.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the device status is normal and submit the request again."
    },
    {
        "type": 'LogMgmtService.1.0.DumpDeviceLogDumpFailed',
        "Message": "The device status is abnormal, and the log collection fails.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the device status is normal and submit the request again."
    },
    {
        "type": 'LogMgmtService.1.0.DumpFailed',
        "Message": "Failed to collect logs because the device is abnormal.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the device is normal and submit the request again."

    },
    {
        "type": 'LogMgmtService.1.0.DumpFailedGetBMCIp',
        "Message": "Log collection failed because the BMC IP address is incorrect.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the BMC IP address is correct and submit the request again."
    },
    {
        "type": 'LogMgmtService.1.0.DumpFailedCreatePathErr',
        "Message": "Failed to create the log collection path. Log collection failed.",
        "NumberOfArgs": 0,
        "Resolution": "Contact Huawei engineers."
    },
    {
        "type": 'LogMgmtService.1.0.DumpFailedGetUploadUrl',
        "Message": "Failed to obtain the log collection path. Log collection failed.",
        "NumberOfArgs": 0,
        "Resolution": "Contact Huawei engineers."
    },
    {
        "type": 'LogMgmtService.1.0.DumpFailedchassisBMC',
        "Message": "Failed to collect logs because the device is abnormal.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the device is normal and submit the request again."
    },
    {
        "type": 'LogMgmtService.1.0.DumpFailedchassisVrp',
        "Message": "The device status is abnormal, and the log collection fails.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the device status is normal and submit the request again."
    },
    {
        "type": 'LogMgmtService.1.0.DumpFailedchassisEmLog',
        "Message": "Log collection failed because the device is abnormal.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the device is normal and submit the request again."
    },
    {
        "type": 'LogMgmtService.1.0.DumpFailedchassisAppliance',
        "Message": "Failed to collect logs because the device is abnormal.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the device is normal and submit the request again."
    },
    {
        "type": 'LogMgmtService.1.0.FdLogDumpFailed',
        "Message": "The FusionDirector is abnormal, and logs fail to be collected.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the FusionDirector network communication is normal and submit the request again."
    },
    {
        "type": 'LogMgmtService.1.0.DumpFailedForChassis',
        "Message": "Failed to collect logs because the device is abnormal.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the device is normal and submit the request again."
    },
    {
        "type": 'LogMgmtService.1.0.DumpFailedForBmc',
        "Message": "Failed to collect logs because the device is abnormal.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the device is normal and submit the request again."
    },
    {
        "type": 'Deploy.1.0.ImageNameExists',
        "Message": "The image name already exists.",
        "NumberOfArgs": 0,
        "Resolution": "Change the image name and submit the request again."
    },
    {
        "type": 'Deploy.1.0.ReadServerInfoFailed',
        "Message": "Failed to read the device information.",
        "NumberOfArgs": 0,
        "Resolution": "Submit the request again."
    },
    {
        "type": 'Device.1.0.CloningOS',
        "Message": "The device is cloning an image.",
        "NumberOfArgs": 0,
        "Resolution": "Wait until the operation on the device is complete and try again."
    },
    {
        "type": 'Device.1.0.RecoveringOS',
        "Message": "The OS is being quickly deployed on the device.",
        "NumberOfArgs": 0,
        "Resolution": "Wait until the operation on the device is complete and try again."
    },
    {
        "type": 'Deploy.1.0.AllocateSPIPFailed',
        "Message": "Failed to apply for the SP network IP address.",
        "NumberOfArgs": 0,
        "Resolution": "Submit the request again."
    },
    {
        "type": 'Deploy.1.0.NotEnoughLicense',
        "Message": "No license is installed on the device.",
        "NumberOfArgs": 0,
        "Resolution": "Install the license and submit the request again."
    },
    {
        "type": 'Deploy.1.0.SPNotFount',
        "Message": "No SP is installed on the device.",
        "NumberOfArgs": 0,
        "Resolution": "Install the SP and submit the request again."
    },
    {
        "type": 'Deploy.1.0.DeviceNotSupportOperation',
        "Message": "The device configuration does not support this operation.",
        "NumberOfArgs": 0,
        "Resolution": "Select a device that supports the operation and submit the request again."
    },
    {
        "type": 'Deploy.1.0.DeviceNotOnLine',
        "Message": "The device is not online.",
        "NumberOfArgs": 0,
        "Resolution": "Bring the device online and submit the request again."
    },
    {
        "type": "Deploy.1.0.SetCloneParamError",
        "Message": "Failed to set clone parameters.",
        "NumberOfArgs": 0,
        "Resolution": "Submit the request again."
    },
    {
        "type": "Deploy.1.0.SetRecoverParamError",
        "Message": "Failed to set quick deployment parameters.",
        "NumberOfArgs": 0,
        "Resolution": "Submit the request again."
    },
    {
        "type": "Deploy.1.0.CloneOSFailed",
        "Message": "Failed to clone the OS.",
        "NumberOfArgs": 0,
        "Resolution": "Submit the request again."
    },
    {
        "type": "Deploy.1.0.RecoverOSFailed",
        "Message": "Failed to quickly deploy the OS.",
        "NumberOfArgs": 0,
        "Resolution": "Submit the request again."
    },
    {
        "type": "SP.1.0.BtrfsNotSupport",
        "Message": "The btrfs file system is not supported.",
        "NumberOfArgs": 0,
        "Resolution": "Submit the request again."
    },
    {
        "type": "SP.1.0.FetchCloneToolsFailed",
        "Message": "Failed to download the clone tool.",
        "NumberOfArgs": 0,
        "Resolution": "Submit the request again."
    },
    {
        "type": "SP.1.0.VerifyParaFailed",
        "Message": "The SP fails to verify the parameter.",
        "NumberOfArgs": 0,
        "Resolution": "Submit the request again."
    },
    {
        "type": "SP.1.0.SetNetworkFailed",
        "Message": "Failed to configure the SP network.",
        "NumberOfArgs": 0,
        "Resolution": "Submit the request again."
    },
    {
        "type": "SP.1.0.ExportConfigFailed",
        "Message": "Failed to export the RAID configuration.",
        "NumberOfArgs": 0,
        "Resolution": "Submit the request again."
    },
    {
        "type": "SP.1.0.UploadInitFailed",
        "Message": "Upload initialization failed.",
        "NumberOfArgs": 0,
        "Resolution": "Submit the request again."
    },
    {
        "type": "SP.1.0.StorageNotEnough",
        "Message": "The storage space is insufficient.",
        "NumberOfArgs": 0,
        "Resolution": "Submit the request again."
    },
    {
        "type": "SP.1.0.UploadImageFailed",
        "Message": "Failed to upload the image file.",
        "NumberOfArgs": 0,
        "Resolution": "Submit the request again."
    },
    {
        "type": "SP.1.0.TransferFailed",
        "Message": "Failed to download the image file.",
        "NumberOfArgs": 0,
        "Resolution": "Submit the request again."
    },
    {
        "type": "SP.1.0.ImportDeviceInfoFailed",
        "Message": "Failed to import system device information.",
        "NumberOfArgs": 0,
        "Resolution": "Submit the request again."
    },
    {
        "type": "Deploy.1.0.NotAuthorized",
        "Message": "You do not have the permission to operate the device.",
        "NumberOfArgs": 0,
        "Resolution": "Apply for the operation permission and submit the request again."
    },
    {
        "type": "SP.1.0.SPCheckOSVersionFailed",
        "Message": "Failed to verify the OS version.",
        "NumberOfArgs": 0,
        "Resolution": "Check the OS version and submit the request again."
    },
    {
        "type": 'Network.1.0.ApplyConflict',
        "Message": "The profile is being applied to the chassis.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the profile is applied to the chassis, and then submit the request again."
    },
    {
        "type": 'Network.1.0.ApplyDispatchFailed',
        "Message": "Failed to deliver the chassis configuration. Failure list:{1}.",
        "NumberOfArgs": 1,
        "Resolution": "Ensure that the device status is normal and submit the request again."
    },
    {
        "type": 'Network.1.0.ApplyBoardCheckAbnormal',
        "Message": "The chassis profile is inconsistent with the switch module configuration. The inconsistent slot list is as follows:{1}.",
        "NumberOfArgs": 1,
        "Resolution": "Ensure that the profile is consistent with the switch module configuration and submit the request again."
    },
    {
        'type': 'Scope.1.0.ResourceURIInWrongFormat',
        'Message': 'Incorrect resource URI format.',
        'NumberOfArgs': 0,
        'Resolution': 'Modify the resource URI and submit the request again.'
    },
    {
        'type': 'Scope.1.0.ResourceNotExist',
        'Message': 'The resource does not exist.',
        'NumberOfArgs': 0,
        'Resolution': 'Ensure that the resource exists and resend the request.'
    },
    {
        'type': 'Scope.1.0.InsufficientPrivilege',
        'Message': 'Insufficient permission for performing operations on the device. Ensure that you have sufficient permission and try again.',
        'NumberOfArgs': 0,
        'Resolution': 'Check the operation permission and scope, and try again after the permission is added or the scope is extended.'
    },
    {
        "type": 'Examine.1.0.DeviceDetached',
        "Message": "The server is unreachable and cannot be checked or the check result is determined. The device is {1}.",
        "NumberOfArgs": 1,
        "Resolution": "Ensure that the server is managed properly and submit the request again."

    },
    {
        "type": 'FusionDirector.1.0.OperationNotSupportedOnState',
        "Message": "The current status of the object does not support this operation.",
        "NumberOfArgs": 0,
        "Resolution": "Wait until the object is in the proper state and try again."
    },
    {
        "type": "Deploy.1.0.SPVersionTooEarly",
        "Message": "The Smart Provisioning version is too early.",
        "NumberOfArgs": 0,
        "Resolution": "Update the Smart Provisioning and submit the request again."
    },
    {
        "type": 'Enclosure.1.0.RefreshFailed',
        "Message": "An exception occurred when refreshing the chassis. Failure: {1}; Success: {2}.",
        "NumberOfArgs": 2,
        "Resolution": "Check the chassis alarms to ensure that the modules in the chassis are functional and refresh the chassis again."
    },
    {
        "type": 'Enclosure.1.0.LoginFailed',
        "Message": "The management account of the chassis is abnormal.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that all modules in the chassis are functional. Enter the username and password again to refresh the chassis."
    },
    {
        "type": 'Enclosure.1.0.ConnectFailed',
        "Message": "The chassis connection is abnormal.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that all modules in the chassis are functional and the management IP address of the chassis is reachable. Refresh the chassis again."
    },
    {
        "type": "Upgrade.1.0.DeviceOffline",
        "Message": "The device is offline and cannot be updated.",
        "NumberOfArgs": 0,
        "Resolution": "Check the device management status."
    },
    {
        "type": "Upgrade.1.0.SPVersionTooEarly",
        "Message": "The Smart Provisioning version is too early.",
        "NumberOfArgs": 0,
        "Resolution": "Update the Smart Provisioning and submit the request again."
    },
    {
        "type": 'FusionDirector.1.0.DevMgmtSNRepeat',
        "Message": "Duplicate SN.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the SN of the managed device is unique and submit the request again."
    },
    {
        "type": "Upgrade.1.0.PackageLackXMLErr",
        "Message": "The format of the update package does not meet the requirements. The version information file is missing.",
        "NumberOfArgs": 0,
        "Resolution": "Check whether the uploaded update package is correct."
    },
    {
        "type": "Upgrade.1.0.DecompressErr",
        "Message": "Failed to decompress the software package.",
        "NumberOfArgs": 0,
        "Resolution": "Check whether the uploaded update package is correct or whether the storage space is sufficient."
    }
    ]
}


//获取任务失败信息
function getTaskMsg(errorInfo) {
    var lang = localStorage.getItem('lang');
    var msg = {};
    var messageId = errorInfo.MessageID;
    var messageArgs = errorInfo.MessageArgs;
    if (lang === 'zhCN') {
        if (_.keys(errorInfo).length < 2) {
            return {
                reason: '发生了内部错误。',
                proposal: '错误详细请联系华为工程师定位。'
            };
        }
        var msg = _.find(messageZhCN.Messages, function (item) {
            return item.type == messageId
        });
        if (!msg) {
            return {
                reason: '发生了内部错误。',
                proposal: '错误详细请联系华为工程师定位。'
            };
        }

    } else {
        if (_.keys(errorInfo).length < 2) {
            return {
                reason: 'A general error has occurred.',
                proposal: 'For details, contact Huawei engineers.'
            };
        }
        var msg = _.find(messageEN.Messages, function (item) {
            return item.type == messageId
        });
        if (!msg) {
            return {
                reason: 'A general error has occurred.',
                proposal: 'For details, contact Huawei engineers.'
            };
        }
    }
    if (msg.Message === undefined) {
        return {
            reason: messageId,
            proposal: ''
        };
    }
    if (msg.NumberOfArgs === undefined || msg.NumberOfArgs == 0) {
        return {
            reason: msg.Message,
            proposal: msg.Resolution
        };
    }
    var content = '';
    if (msg.NumberOfArgs <= messageArgs.length) {
        content = msg.Message;
        for (var i = 1; i < msg.NumberOfArgs + 1; i++) {
            content = content.replace('{' + i + '}', messageArgs[i - 1]);
        }
        return {
            reason: content,
            proposal: msg.Resolution
        };
    }

}