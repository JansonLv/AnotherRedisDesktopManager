const cn = {
  message: {
    new_connection: '新建连接',
    refresh_connection: '刷新',
    edit_connection: '编辑连接',
    del_connection: '删除连接',
    close_connection: '关闭连接',
    add_new_line: '添加新行',
    redis_version: 'Redis版本',
    process_id: '进程ID',
    used_memory: '已用内存',
    used_memory_peak: '内存占用峰值',
    used_memory_lua: 'Lua占用内存',
    connected_clients: '客户端连接数',
    total_connections_received: '历史连接数',
    total_commands_processed: '历史命令数',
    key_statistics: '键值统计',
    all_redis_info: 'Redis信息全集',
    server: '服务器',
    memory: '内存',
    stats: '状态',
    settings: '基础设置',
    confirm_to_delete_row_data: '确认删除该行数据？',
    delete_success: '删除成功',
    delete_failed: '删除失败',
    modify_success: '修改成功',
    modify_failed: '修改失败',
    add_success: '添加成功',
    add_failed: '添加失败',
    value_exists: '值已存在',
    refresh_success: '刷新成功',
    click_enter_to_rename: '点击或者按Enter键来重命名',
    click_enter_to_ttl: '点击或者按Enter键来修改过期时间',
    confirm_to_delete_key: '确认删除 {key} ?',
    confirm_to_rename_key: '确认重命名 {old} -> {new} ?',
    edit_line: '修改行',
    auto_refresh: '自动刷新',
    auto_refresh_tip: '自动刷新开关，每{interval}秒刷新一次',
    key_not_exists: '键不存在',
    collapse_all: '全部折叠',
    expand_all: '全部展开',
    json_format_failed: 'Json 格式化失败',
    msgpack_format_failed: 'Msgpack 格式化失败',
    php_unserialize_format_failed: 'PHP Unserialize 格式化失败',
    clean_up: '清空',
    redis_console: 'Redis 控制台',
    confirm_to_delete_connection: '确认删除连接？',
    connection_exists: '连接配置已存在',
    close_to_edit_connection: '编辑前必须关闭连接，要继续么',
    close_to_connection: '确认关闭连接？',
    ttl_delete: '设置TTL<=0将删除该key，是否确认？',
    max_page_reached: '已到达最大页码',
    add_new_key: '新增Key',
    enter_new_key: '请先输入新的key名称',
    key_type: '类型',
    save: '保存',
    enter_to_search: 'Enter 键进行搜索',
    export_success: '导出成功',
    select_import_file: '选择配置文件',
    import_success: '导入成功',
    put_file_here: '将文件拖到此处，或点击选择',
    config_connections: '连接配置',
    import: '导入',
    export: '导出',
    open: '打开',
    close: '关闭',
    open_new_tab: '新窗口打开',
    exact_search: '精确搜索',
    enter_to_exec: '输入Redis命令后，按Enter键执行，上下键切换历史',
    pre_version: '当前版本',
    manual_update: '手动下载',
    retry_too_many_times: '尝试重连次数过多，请检查Server状态',
    key_to_search: '输入关键字搜索',
    begin_update: '更新',
    ignore_this_version: '忽略该版本',
    check_update: '检查更新',
    update_checking: '检查更新中, 请稍后...',
    update_available: '发现新版本',
    update_not_available: '当前为最新版本',
    update_error: '更新失败',
    update_downloading: '下载中...',
    update_download_progress: '下载进度',
    update_downloaded: "更新下载完成，重启客户端生效.\
    [Tips]: 如果您使用的是Windows，关闭软件后，请等待桌面图标刷新到正常状态(约10秒)，然后再重新打开即可",
    mac_not_support_auto_update: 'Mac暂时不支持自动更新，请手动<a href="https://github.com/qishibo/AnotherRedisDesktopManager/releases">下载</a>后重新安装，\
    或者执行brew reinstall --cask another-redis-desktop-manager \
    <br><br>🧡如果您觉得好用，可以通过<a href="https://apps.apple.com/app/id1516451072">AppStore</a>赞助，并由AppStore帮您自动更新',
    font_family: '字体选择',
    font_faq_title: '字体设置说明',
    font_faq: '1. 可以设置多个字体<br>2. 字体选择是有序的，建议首先选择英文字体，然后再选择中文字体<br>\
    3. 某些异常情况无法加载系统字体列表时，可以手动输入已安装字体名称',
    private_key_faq: '目前支持RSA格式私钥，即以<pre>-----BEGIN RSA PRIVATE KEY-----</pre>开头，\
    以<pre>-----BEGIN OPENSSH PRIVATE KEY-----</pre>开头的，需要执行\
    <pre>ssh-keygen -p -m pem -f ~/.ssh/id_rsa</pre>进行格式转换后再使用，该操作不会影响以前的私钥登陆',
    dark_mode: '深色模式',
    load_more_keys: '加载更多',
    key_name: '键名',
    project_home: '项目主页',
    cluster_faq: '选择集群中任一节点配置填入即可，会自动识别其它节点',
    redis_status: 'Redis信息',
    confirm_flush_db: '确认删除db{db}中的所有键值么？',
    flushdb: '删除所有键',
    flushdb_prompt: '请输入 "{txt}"',
    info_disabled: 'Info命令执行异常（可能已被禁用），无法显示Redis信息',
    page_zoom: '页面缩放',
    scan_disabled: 'Scan命令执行异常（可能已被禁用），无法显示Key列表',
    key_type_not_support: '该类型暂不支持可视化展示，请使用命令行进行操作',
    delete_folder: '扫描并删除整个文件夹',
    multiple_select: '多项选择',
    copy: '复制',
    copy_success: '复制成功',
    keys_to_be_deleted: '即将删除的键值',
    delete_all: '全部删除',
    clear_cache: '清除缓存',
    mark_color: '标记颜色',
    key_no_permission: '文件读取权限已过期，请手动重新选择密钥文件',
    toggle_check_all: '全选 | 取消全选',
    select_lang: '选择语言',
    clear_cache_tip: '当客户端出现问题时，该操作会删除所有连接和配置，用于恢复客户端',
    detail: '详情',
    separator_tip: '树状显示的分隔符，设置为空可以禁用树状图，直接以列表展示',
    confirm_modify_unvisible_content: '内容中包含不可见字符，你可以在Hex视图中进行安全编辑。如果继续在Text视图中编辑可能会导致编码错误，确定继续么？',
    keys_per_loading: '加载数量',
    keys_per_loading_tip: '每次加载的key数量, 设置过大可能会影响性能',
    host: '地址',
    port: '端口',
    username: '用户名',
    password: '密码',
    connection_name: '连接名称',
    separator: '分隔符',
    timeout: '超时',
    private_key: '私钥',
    public_key: '公钥',
    authority: '授权',
    redis_node_password: 'Redis节点密码',
    master_group_name: 'Master组名称',
    command_log: '日志',
    sentinel_faq: '多个哨兵任选其一即可，地址、端口、密码请填写哨兵配置，Redis节点密码为哨兵监听的Master节点密码',
    hotkey: '快捷键',
    persist: '持久化',
    custom_formatter: '自定义格式化',
    edit: '编辑',
    new: '新增',
    custom: '自定义',
  },
};

export default cn;
